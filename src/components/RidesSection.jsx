import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ridesData from '../data/ridesData.json';
import CategorySidebar from './CategorySidebar';
import CarouselControls from './CarouselControls';

const RidesSection = () => {
  const [activeCategory, setActiveCategory] = useState('land');
  const [filteredRides, setFilteredRides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const filtered = ridesData.filter(ride => ride.category === activeCategory);
    setFilteredRides(filtered);
    setCurrentIndex(0);
    
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    startAutoScroll();
    
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= filteredRides.length - visibleCards) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => {
      if (prev >= filteredRides.length - visibleCards) {
        return 0;
      }
      return prev + 1;
    });
    resetAutoScroll();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return filteredRides.length - visibleCards;
      }
      return prev - 1;
    });
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    startAutoScroll();
  };

  const getTransformValue = () => {
    if (!carouselRef.current || filteredRides.length === 0) return 'translateX(0)';
    const itemWidth = carouselRef.current.children[0]?.offsetWidth || 288;
    return `translateX(-${currentIndex * (itemWidth + 32)}px)`;
  };

 
  const createSlug = (text) => {
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '') 
      .replace(/\s+/g, '-')     
      .replace(/--+/g, '-');    
  };

  return (
    <div className="flex min-h-screen text-white ml-5 overflow-hidden">
      <div className="w-[260px] h-screen mt-5 overflow-visible">
        <CategorySidebar 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <div className="flex-1 pl-[180px] pr-20 pt-10 overflow-hidden">
        <div className='flex'>
          <h1 className="text-6xl font-bold tracking-tighter mb-10">OUR ICONIC RIDES</h1>
          <div className="absolute pt-[12px] pr-[60px] right-0">
              <CarouselControls onPrev={prevSlide} onNext={nextSlide} />
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex space-x-8 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: getTransformValue(),
              width: `${filteredRides.length * (288 + 32)}px`
            }}
          >
            {filteredRides.map((ride) => (
              <div key={ride.id} className="flex-none w-64 rounded-3xl relative">
                <div className="absolute inset-0 rounded-3xl z-10 bg-gradient-to-t from-[#00040a] to-[22304a]"></div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                  <div className="font-bold text-lg">{ride.title}</div>
                  <div className="text-xs text-gray-300">{ride.location}</div>
                  <div className="text-xs mt-2">{ride.description}</div>
                  <Link 
                    to={`/rides/${createSlug(ride.location)}/${createSlug(ride.title)}`}
                    className="mt-3 py-2 px-6 bg-[#FAD504] text-text font-bold rounded-lg text-xs hover:scale-105 transition-transform block text-center"
                  >
                    RIDE DETAILS
                  </Link>
                </div>
                <video 
                  autoPlay 
                  loop 
                  muted
                  playsInline
                  className="w-full h-full rounded-3xl object-cover aspect-[3/4]"
                >
                  <source src={ride.videoUrl} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-left ml-0">
          <button className="py-3 px-16 bg-[#FAD504] text-text font-bold rounded-full hover:scale-105 transition-transform">
            Explore All Rides!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidesSection;