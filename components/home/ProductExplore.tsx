'use client'
import React, { useState, useRef, forwardRef, MutableRefObject, useEffect } from "react";




const ProductExplorer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [transitionStarted, setTransitionStarted] = useState(false); 
  const images = ['slider/chart.svg', 'slider/contribution.svg', 'slider/idcard.svg'];

  useEffect(() => {
    const autoplay = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setTransitionStarted(true); 
    }, 3000); 

    setTimeout(() => {
      setTransitionStarted(true);
    }, 4000);
    return () => clearInterval(autoplay);
  }, []);


  return (
    <div className="relative w-full  bg-left-bottom bg-no-repeat  bg-bg-image">
      <div className="container py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="lg:mx-auto lg:w-[80%]">
            <div style={{ opacity: 1, transform: 'none' }}>
              <h2 className="z-50 pb-12 text-4xl font-bold md:w-[50%] md:pb-24 md:text-5xl">
                Explore Our Products
              </h2>
            </div>
            <div className="w-full md:mx-auto md:w-full">
              <div>
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  className="h-9 items-center justify-center bg-muted p-1 text-muted-foreground rounded-3xl grid grid-cols-2 md:w-[50%] lg:w-[30%]"
                  tabIndex={0}
                  data-orientation="horizontal"
                  style={{ outline: 'none' }}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 0 ? 'true' : 'false'}
                    aria-controls="radix-:r1:-content-banshwali"
                    data-state={activeTab === 0 ? 'active' : 'inactive'}
                    id="radix-:r1:-trigger-banshwali"
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background focus-visible:outline-none rounded-3xl ${
                      activeTab === 0
                        ? 'bg-background text-foreground shadow border-primary border'
                        : 'transition-all'
                    } hover:bg-ui-200`}
                    onClick={() => {
                      setActiveTab(0);
                      
                    }}
                    tabIndex={0}
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    Banshwali
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 1 ? 'true' : 'false'}
                    aria-controls="radix-:r1:-content-digital_khata"
                    data-state={activeTab === 1 ? 'active' : 'inactive'}
                    id="radix-:r1:-trigger-digital_khata"
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background focus-visible:outline-none rounded-3xl ${
                      activeTab === 1
                        ? 'bg-background text-foreground shadow border-primary border'
                        : 'transition-all'
                    } hover:bg-ui-200`}
                    onClick={() => {
                      setActiveTab(1);
                     
                    }}
                    tabIndex={-1}
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    Digital Khata
                  </button>
                </div>
                
                          {activeTab === 0 && (
                            <div
                            className="mt-2 ring-offset-background focus-visible:outline-none"
                            style={{ animationDuration: '2s' }}
                          >
                            <div style={{ opacity: 1, transform: 'none' }}>
                              <div className="rounded-xl border bg-card text-card-foreground shadow my-4 grid md:grid-cols-2">
                                <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-100 pb-10 lg:rounded-r-none">
                                  <div className="relative overflow-hidden">
                                  <img
                              className="w-[250px] p-8"
                              style={{
                                transition: ' 1s ease', // Adjust transition duration here
                                transform: `translateX(-${imageIndex * 100}%)`,
                                
                              }}
                              src={images[imageIndex]}
                              alt="Slide"
                            />
                             
                                
                
            
                                  </div>
                                  <h1 className="absolute bottom-0 hidden p-4 text-ui-500 md:block">
                                    Trace the footsteps of your ancestors and discover your family tree's
                                    story.
                                  </h1>
                                </div>
                                <div className="flex h-full flex-col px-4 pt-4">
                                  <h2 className="text-3xl font-bold">Features</h2>
                                  
                            <section >
                              <p className="py-4 font-semibold">
                                View full Banshawali chart digitally.
                              </p>
                              <hr />
                              <ul className="flex list-disc flex-col gap-4 py-4 pl-4">
                                <li>View your Banshaj information all in one place.</li>
                                <li>
                                  Bring all generations together under one roof creates a unique
                                  opportunity for shared experiences, mutual learning, and the
                                  strengthening of family bonds.
                                </li>
                                <li>Manage and learn about events nearby you.</li>
                              </ul>
                              <div className="flex self-center px-8 pb-3 pt-10 lg:self-end">
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border bg-transparent shadow-sm h-9 px-4 py-2 border-red-500 text-red-500 transition-all duration-500 hover:bg-red-500 hover:text-white">
                                  <a
                                    aria-label="Learn more about our digital banshwali"
                                    className="flex items-center gap-2 "
                                    href="/banshwali"
                                  >
                                    Learn more
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-arrow-right "
                                    >
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </a>
                                </button>
                              </div>
                            </section>
                            </div>
                    </div>
                  </div>
                </div>
                
                          )}
                        
                          {activeTab === 1 && (
                            <div
                            className="mt-2 ring-offset-background focus-visible:outline-none"
                            style={{ animationDuration: '2s' }}
                          >
                            <div style={{ opacity: 1, transform: 'none' }}>
                              <div className="rounded-xl border bg-card text-card-foreground shadow my-4 grid md:grid-cols-2">
                                <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-100 pb-10 lg:rounded-r-none">
                                  <div className="relative overflow-hidden">
                                  <img
                              className="w-[250px] p-8"
                              style={{
                                transition: 'transform 1s ease', 
                                transform: `translateX(-${imageIndex * 100}%)`,
                                
                              }}
                              src={images[imageIndex]}
                              alt="Slide"
                            />
                             
                                  </div>
                                  <h1 className="absolute bottom-0 hidden p-4 text-ui-500 md:block">
                                  Where Finances unify for business and personal success
                                  </h1>
                                </div>
                                <div className="flex h-full flex-col px-4 pt-4">
                                  <h2 className="text-3xl font-bold">Features</h2>
                                  
                            <section>
                              <p className="py-4 font-semibold">Powerful POS system</p>
                              <hr />
                              <ul className="flex list-disc flex-col gap-4 py-4 pl-4">
                                <li>Efficient personal finance management</li>
                                <li>Accurate interest calculator</li>
                                <li>Timely reminders and alerts</li>
                                <li>Streamlined record-keeping</li>
                                <li>Robust data security and many more</li>
                              </ul>
                              <div className="flex self-center px-8 pb-3 pt-10 lg:self-end">
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border bg-transparent shadow-sm h-9 px-4 py-2 border-secondary-300 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white">
                                  <a
                                    aria-label="Learn more about our digital banshwali"
                                    className="flex items-center gap-2 "
                                    href="/banshwali"
                                  >
                                    Learn more
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-arrow-right "
                                    >
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </a>
                                </button>
                              </div>
                            </section>
                            </div>
                    </div>
                  </div>
                </div>
                
                          )}
                        
                      
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductExplorer;
