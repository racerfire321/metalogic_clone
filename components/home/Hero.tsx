import React from 'react';

const Hero = () => {
  return (
    <div className=" relative  h-screen overflow-hidden    bg-center h-664px bg-cover " style={{ backgroundImage : 'url(/herobg.svg)'}}>
     
    <div  className="" >
    <div className=" text-center mt-6 text-white">
      <div >
        <div>
          <h2 className="mb-8 text-4xl font-semibold lg:text-6xl ">Transforming<br/> Today <br/> For <br /> Digital Tomorrow</h2>
          <p className="w-[90vw] font-semibold lg:w-full">We are committed to offering state-of-the-art software solutions that <br />enable companies to prosper in the digital world.</p>
        </div>
      </div>
      <div className="flex justify-center pt-10" style={{ opacity: 1, transform: 'none' }}>
        <a className="group flex gap-2 rounded-lg bg-slate-700 px-8 py-3 transition-all duration-500 hover:bg-secondary-300 hover:bg-red-500" aria-label="go to about page" href="/about">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-all duration-500 group-hover:translate-x-2">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Hero;
