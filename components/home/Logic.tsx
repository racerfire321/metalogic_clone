'use client'
import React, { useEffect, useRef, useState } from 'react';

const Logic = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set the initial visibility
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className='min-h-screen'  >
     <div className='min-h-screen relative flex items-center justify-center' style={{ backgroundImage: "url('/herobg.svg')" }}>
        <div className='bg-[rgba(37,58,120,0.5)]  w-[96%] lg:w-[70%] md:w-[93%] rounded-xl border text-white'>
          <div style={{ opacity: '1' }} className='p-[32px]'>
            <h1 className="mb-8 text-2xl font-bold md:text-4xl">Why MetaLogic <span className="text-red-500">?</span></h1>
            <p className="w-[80%]">Innovation is our driving force. We explore the latest tech trends to deliver groundbreaking solutions that keep you ahead.</p>
          </div>
          <div className="flex gap-4 pt-4 md:px-[10%] md:pr-[10%]">
            <div className="hidden md:block visible"> {/* Add 'visible' class to reveal the SVG path */}
              <svg width="65" height="384" viewBox="0 0 65 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="dots" d="M30 32L30 383" stroke="#999999" strokeWidth="2" strokeLinecap="round" className={`dashed_path ${isVisible ? 'join-dots' : ''}`} />
              
                <rect x="29" y="23" width="2" height="40" rx="1" fill="url(#paint0_linear_1_10894)" />
                <g filter="url(#filter0_di_1_10894)">
                  <circle cx="30.5" cy="29.5" r="18.5" fill="url(#paint1_linear_1_10894)" />
                </g>
                <defs>
                  <filter id="filter0_di_1_10894" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="3" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0856471 0 0 0 0 0.0784314 0 0 0 0 0.439216 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_10894" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_10894" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.334833 0 0 0 0 0.425998 0 0 0 0 0.98 0 0 0 1 0" />
                    <feBlend mode="lighten" in2="shape" result="effect2_innerShadow_1_10894" />
                  </filter>
                  <linearGradient id="paint0_linear_1_10894" x1="30" y1="23" x2="30" y2="93" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E70C0C" />
                    <stop offset="1" stopColor="#EB6BF7" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_10894" x1="30.5" y1="11" x2="30.5" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D64949" />
                    <stop offset="1" stopColor="#F62525" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className='mt-4'>
                <div className="flex flex-col gap-9">
                  <div>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">Innovation at the Core</span>
                      <span>We thrive on innovation and continuously explore the latest technologies to provide you with groundbreaking solutions that keep you ahead of the curve.</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">Collaboration is the key</span>
                      <span>We work closely with you to understand your goals, challenges, and aspirations, ensuring our solutions align perfectly with your business objectives.</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">Your Success, Our Purpose</span>
                      <span>Our solutions are designed to enhance efficiency, boost productivity, and drive ROI, giving you a competitive edge in your industry.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logic;
