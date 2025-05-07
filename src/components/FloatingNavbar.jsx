import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import MobileSidebar from './MobileSidebar';

const FloatingNavbar = () => {
  const [showCities, setShowCities] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [activeNav, setActiveNav] = useState('RIDES');
  const [showBangaloreSubmenu, setShowBangaloreSubmenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const cities = [
    {
      name: 'Kochi',
      image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75'
    },
    {
      name: 'Bangalore',
      image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75',
      options: [
        { 
          type: 'PARK', 
          image: 'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75' 
        },
        { 
          type: 'RESORT', 
          image: 'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75' 
        }
      ]
    },
    {
      name: 'Hyderabad',
      image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75'
    },
    {
      name: 'Bhubaneswar',
      image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75'
    }
  ];

  const navItems = [
    {
      name: 'OFFERS',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75'
    },
    {
      name: 'RIDES',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75'
    },
    {
      name: 'RESTAURANT',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75'
    },
    {
      name: 'EVENTS',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75'
    }
  ];

  const iconFilterStyle = {
    color: 'transparent',
    filter: 'brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)'
  };

  const activeIconFilterStyle = {
    color: 'transparent',
    filter: 'brightness(0) saturate(100%) invert(39%) sepia(99%) saturate(2475%) hue-rotate(202deg) brightness(97%) contrast(93%)'
  };

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setHoverTimeout(setTimeout(() => setShowCities(true), 200));
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHoverTimeout(setTimeout(() => {
      if (!document.querySelector('.dropdown-container:hover')) {
        setShowCities(false);
        setShowBangaloreSubmenu(false);
      }
    }, 300));
  };

  const handleDropdownMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHoverTimeout(setTimeout(() => {
      if (!document.querySelector('.location-button:hover')) {
        setShowCities(false);
        setShowBangaloreSubmenu(false);
      }
    }, 300));
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <>
      <div className="z-15 fixed top-10 left-15 right-15 bg-white rounded-xl py-3 px-12 font-mulish __className_2aa964">
        <div className="flex justify-between items-center gap-x-7">
          <div className="h-12 transition-transform duration-300 hover:scale-[1.08] hover:cursor-pointer">
            <img 
              src='https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75'
              alt="Company Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="flex gap-5">
            <div className="relative">
              <button 
                className={`location-button flex items-center space-x-2 group `}
                onClick={() => {
                  setActiveNav('LOCATIONS');
                  setShowCities(!showCities);
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src="https://wonderla.vercel.app/icons/location.svg" 
                  alt="Location" 
                  className="h-5 w-5"
                />
                <span className='font-extrabold text-sm text-[#717D92]'>LOCATIONS</span>
                <FiChevronDown className={`color-[#717D92] transition-transform ${showCities ? 'rotate-180' : ''}`} />
              </button>
              
              {showCities && (
                <div 
                  className="dropdown-container mt-1 w-72 transform -translate-x-1/4 absolute top-12 z-50 bg-white rounded-3xl p-4 shadow-xl transition-opacity duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="flex flex-col gap-3">
                    {cities.map((city) => (
                      <div key={city.name} className="group/subSection relative">
                        <div 
                          className={`flex justify-between items-center p-2 rounded-lg ${city.name === 'Bangalore' ? 'hover:bg-gray-100' : ''}`}
                          onMouseEnter={() => {
                            clearTimeout(hoverTimeout);
                            city.name === 'Bangalore' && setShowBangaloreSubmenu(true);
                          }}
                          onMouseLeave={() => {
                            setHoverTimeout(setTimeout(() => {
                              if (!document.querySelector('.bangalore-submenu:hover')) {
                                setShowBangaloreSubmenu(false);
                              }
                            }, 300));
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <img 
                              className="h-12 w-12 rounded-xl object-cover"
                              alt={city.name}
                              src={city.image}
                            />
                            <div className="uppercase font-medium">{city.name}</div>
                          </div>
                          {city.name === 'Bangalore' && (
                            <FiChevronRight className="text-gray-400" />
                          )}
                        </div>

                        {city.name === 'Bangalore' && showBangaloreSubmenu && (
                          <div 
                            className="bangalore-submenu absolute left-full top-0 ml-5 w-48 bg-white rounded-lg shadow-lg p-2 z-20"
                            onMouseEnter={() => clearTimeout(hoverTimeout)}
                            onMouseLeave={() => {
                              setHoverTimeout(setTimeout(() => {
                                setShowBangaloreSubmenu(false);
                              }, 300));
                            }}
                          >
                            {city.options.map((option) => (
                              <div key={option.type} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                                <img 
                                  className="h-10 w-10 rounded-lg object-cover"
                                  alt={option.type}
                                  src={option.image}
                                />
                                <span className="uppercase font-medium">{option.type}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <div 
                key={item.name}
                className={`flex items-center space-x-2 hover:cursor-pointer gap-1 text-sm`}
                onClick={() => setActiveNav(item.name)}
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="h-5 w-5 m-0"
                  style={iconFilterStyle}
                />
                <span className='text-[#717D92] font-extrabold'>{item.name}</span>
              </div>
            ))}
          </div>
          <div className='flex gap-7 justify-center items-center'>
            <div className=' flex justify-center items-center gap-[55px]'>
              <button className='px-2.5 py-2.5 rounded-lg text-text bg-amber-300 hover:cursor-pointer'>
                <div className='flex justify-center items-center gap-1'>
                  <div className="text-[12px] font-bold">BOOK TICKETS</div>
                  <img className="h-[12px]" alt="icon" src="https://wonderla.vercel.app/icons/tickets.svg"></img>
                </div>
              </button>
            </div>
            <div>
              <button 
                onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                className="text-gray-700 focus:outline-none"
              >
                {showMobileSidebar ? <FiX size={24} /> : <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-yellow lg:h-[17px] lg:w-[26px] lg:fill-text"><rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect><rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className="transform transition-opacity duration-300"></rect><rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect></svg>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showMobileSidebar && (
        <MobileSidebar 
          showMobileSidebar={showMobileSidebar} 
          setShowMobileSidebar={setShowMobileSidebar}
          cities={cities}
        />
      )}
    </>
  );
};

export default FloatingNavbar;