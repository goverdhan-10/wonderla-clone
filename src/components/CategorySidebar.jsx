import React, { useEffect, useState } from 'react';
import ridesData from '../data/ridesData.json'

const CategorySidebar = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([
    { 
      id: 'land', 
      name: 'land',
      count: '74',
      icon: 'https://wonderla.vercel.app/icons/landRides.svg',
      angle: 45,
      scale: '1',
      highlightScale: '1.4'
    },
    { 
      id: 'water', 
      name: 'water',
      count: '55',
      icon: 'https://wonderla.vercel.app/icons/waterRides.svg',
      angle: 90,
      scale: '1',
      highlightScale: '1.4'
    },
    { 
      id: 'kids', 
      name: 'kids',
      count: '36',
      icon: 'https://wonderla.vercel.app/icons/kidsRides.svg',
      angle: 135,
      scale: '1',
      highlightScale: '1.4'
    }
  ]);

  const getGradientStops = () => {
    if (!activeCategory) return 'conic-gradient(from 0deg, #e8e9f1 0deg, #e8e9f1 180deg)';
    
    const activeCat = categories.find(cat => cat.id === activeCategory);
    const highlightWidth = 120;
    const fadeWidth = 20;
    const highlightStart = activeCat.angle - highlightWidth/2;
    const highlightEnd = activeCat.angle + highlightWidth/2;
    
    return `conic-gradient(
      from 0deg,
      #e8e9f1 ${Math.max(0, highlightStart - fadeWidth)}deg,
      color-mix(in oklab, #e8e9f1, #fcd34d 25%) ${Math.max(0, highlightStart - fadeWidth/2)}deg,
      color-mix(in oklab, #e8e9f1, #fcd34d 50%) ${Math.max(0, highlightStart)}deg,
      color-mix(in oklab, #e8e9f1, #fcd34d 75%) ${Math.max(0, highlightStart + fadeWidth/4)}deg,
      #fcd34d ${Math.max(0, highlightStart + fadeWidth/2)}deg,
      #fcd34d ${Math.min(180, highlightEnd - fadeWidth/2)}deg,
      color-mix(in oklab, #e8e9f1, #fcd34d 75%) ${Math.min(180, highlightEnd - fadeWidth/4)}deg,
      color-mix(in oklab, #e8e9f1, #fcd34d 50%) ${Math.min(180, highlightEnd)}deg,
      color-mix(in oklab, #e8e9f1, #fcd34d 25%) ${Math.min(180, highlightEnd + fadeWidth/2)}deg,
      #e8e9f1 ${Math.min(180, highlightEnd + fadeWidth)}deg,
      #e8e9f1 180deg
    )`;
  };

  const getPositionStyles = (angle) => {
    const radius = 248;
    const centerX = 300;
    const centerY = 300;
    const radian = (angle) * (Math.PI / 180);
    
    const x = centerX + (radius * Math.sin(radian));
    const y = centerY - (radius * Math.cos(radian));
    
    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  };

  return (
    <div className="relative w-full h-[600px] overflow-visible">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div 
          className="h-[600px] w-[600px] rounded-full relative"
          style={{ 
            background: getGradientStops(),
          }}
        >
          <div 
            className="bg-[#22304a] h-[400px] w-[400px] rounded-full absolute top-[100px] left-[100px]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }}
          ></div>
          
          {categories.map((category) => {
            const position = getPositionStyles(category.angle);
            return (
              <React.Fragment key={category.id}>
                <div 
                  className="absolute z-20 hover:cursor-pointer"
                  style={{
                    ...position,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {activeCategory === category.id && (
                    <div 
                      className="absolute rounded-full bg-white border-[8px] border-amber-300"
                      style={{
                        width: '180px',
                        height: '180px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                      }}
                    ></div>
                  )}
                  
                  <img 
                    style={{ 
                      scale: activeCategory === category.id ? category.highlightScale : category.scale,
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      zIndex: 20,
                    }}
                    src={category.icon} 
                    alt={`${category.id}Icon`}
                  />
                </div>
                
                <div 
                  className="absolute text-white capitalize mt-[4px]"
                  style={{
                    left: `calc(${position.left} + 100px)`,
                    top: position.top,
                    transform: 'translateY(-50%)',
                  }}
                >
                  <div className={` ml-[5px] text-xl`}>
                    {category.name}
                  </div>
                  <div className="text-sm rounded-2xl px-3 py-1 text-white bg-[#788beb] mt-2 whitespace-nowrap">
                    {category.count} Rides
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;