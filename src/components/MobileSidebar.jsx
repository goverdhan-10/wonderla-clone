import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const MobileSidebar = ({ showMobileSidebar, setShowMobileSidebar, cities }) => {
  const [openSections, setOpenSections] = useState({
    parks: false,
    quickLinks: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div 
      className="absolute flex flex-row-reverse top-0 left-0 bottom-0 right-0"
      style={{ zIndex: 50, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div className="h-dvh w-[470px] bg-white overflow-hidden no-scrollbar">
        <div className="flex justify-between items-center bg-white w-[470px] p-8 pb-3">
          <img 
            className="h-15" 
            alt="Wonderla Logo" 
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75" 
          />
          <div 
            className="mr-4 p-1.5 rounded-full cursor-pointer border-gray-200 border"
            onClick={() => setShowMobileSidebar(false)}
          >
            <FiX size={18} className="text-black" />
          </div>
        </div>

        <div className="h-full min-h-0 overflow-y-scroll p-7">
          <div className="h-fit flex flex-col overflow-y-visible flex-1 pb-24">
            
            <div className="flex-1 cursor-pointer">
              <div 
                className="flex items-center gap-3 justify-between"
                onClick={() => toggleSection('parks')}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <img 
                      className="h-7" 
                      alt="Park icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Parks</div>
                    <div className="text-xs text-gray-600">Explore Your favourite Wonderla Park</div>
                  </div>
                </div>
                <svg 
                  height="24" 
                  width="24" 
                  className={`transition-transform ${openSections.parks ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#334DCF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9L12 15L18 9"></path>
                </svg>
              </div>
              
              <div 
                className={`overflow-hidden transform transition-all ease-out duration-350 ${openSections.parks ? 'h-auto' : 'h-0'}`}
              >
                <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1">
                  {cities.map(city => (
                    <div key={city.name}>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <img 
                            className="rounded-full h-10 w-10 mb-2 object-cover" 
                            alt={city.name} 
                            src={city.image} 
                          />
                        </div>
                        <div className="capitalize">
                          {city.name.toLowerCase() === 'bangalore' ? 'bengaluru' : city.name.toLowerCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-4"></div>
                <hr className="border-t-1 border-gray-200"/>
                <div className="h-4"></div>
              </div>
            </div>

            <div>
              <div className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div>
                    <img 
                      className="h-7" 
                      alt="Resort icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Resorts</div>
                    <div className="text-xs text-gray-600">Get a rejuvenating experience at Wonderla Resort</div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200"/>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div>
                    <img 
                      className="h-7" 
                      alt="Offers icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Offers & Combos</div>
                    <div className="text-xs text-gray-600">Plan the perfect day with exciting offers</div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200"/>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div>
                    <img 
                      className="h-7" 
                      alt="Timings icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Timings And Guidelines</div>
                    <div className="text-xs text-gray-600">Know the timings and other guidelines</div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200"/>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex-1 p-2 rounded-2xl bg-[#fad600] text-black">
                <div className="flex items-center gap-4">
                  <div>
                    <img 
                      className="h-10" 
                      alt="Group booking icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Group Booking</div>
                    <div className="text-xs text-gray-600">Reach Out To Wonderla Team</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-2 rounded-2xl bg-[#334DCF] text-white">
                <div className="flex items-center gap-4">
                  <div>
                    <img 
                      className="h-10" 
                      alt="Tour portal icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Tour Operator Portal</div>
                    <div className="text-xs text-white">Reach Out To Wonderla Team</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-2 rounded-2xl bg-[#fad600] text-black">
                <div className="flex items-center gap-4">
                  <div>
                    <img 
                      className="h-10" 
                      alt="Partner icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Partner With Us</div>
                    <div className="text-xs text-gray-600">Reach Out To Wonderla Team</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <div className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div>
                    <img 
                      className="h-7" 
                      alt="About us icon" 
                      src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">About Us</div>
                    <div className="text-xs text-gray-600">Know all about Wonderla</div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200"/>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex-1 cursor-pointer">
                <div 
                  className="flex items-center gap-3 justify-between"
                  onClick={() => toggleSection('quickLinks')}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <img 
                        className="h-7" 
                        alt="Quick links icon" 
                        src="https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75" 
                      />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Quick Links</div>
                      <div className="text-xs text-gray-600">Explore all other relevant information here</div>
                    </div>
                  </div>
                  <svg 
                    height="24" 
                    width="24" 
                    className={`transition-transform ${openSections.quickLinks ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#334DCF" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M6 9L12 15L18 9"></path>
                  </svg>
                </div>
                <div 
                  className={`overflow-hidden transform transition-all ease-out duration-350 ${openSections.quickLinks ? 'h-auto' : 'h-0'}`}
                >
                  <div className="flex pt-3">
                    <div className="w-10"></div>
                    <div className="flex gap-2 text-sm flex-col">
                      <div>Restaurants</div>
                      <div>Merchandise</div>
                      <div>Events</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200"/>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>

            <div className="flex-1 cursor-pointer">
              <div className="flex items-center gap-3">
                <div>
                  <img 
                    className="h-7" 
                    alt="Contact icon" 
                    src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75" 
                  />
                </div>
                <div>
                  <div className="text-xl font-normal mb-1">Contact Us</div>
                  <div className="text-xs text-gray-600">Get In Touch Wonderla Team</div>
                </div>
              </div>
              <div>
                <div className="h-4"></div>
                <hr className="border-t-1 border-gray-200"/>
                <div className="h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;