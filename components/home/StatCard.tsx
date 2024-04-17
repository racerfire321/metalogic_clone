'use client'
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const StatsCard = () => {
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsCard = document.getElementById('stats-card');
      if (statsCard) {
        const top = statsCard.getBoundingClientRect().top;
        const bottom = statsCard.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        // Check if the card is at least 25% visible
        if (top < windowHeight * 0.75 && bottom > 0) {
          if (!countStarted) {
            setCountStarted(true);
          }
        } else {
          if (countStarted) {
            setCountStarted(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countStarted]);

  return (
    <section id="stats-card" className='w-full translate-y-28 transform 2xl:container md:translate-y-14'>
      <div className="mx-4 -mb-10 z-50 flex flex-col justify-between gap-4 rounded-xl border bg-white text-black p-4 font-semibold text-accent-teal shadow-lg shadow-translucent-dark-200 sm:flex-row md:mx-auto md:w-[80%] md:px-16 xl:w-[50%]">
        <div className="flex flex-col gap-4">
          <CountUp start={countStarted ? 0 : undefined} end={381} duration={3} separator="," decimals={0} className={`text-7xl md:h-[80px] ${countStarted ? 'count-up' : ''}`} />
          <span>Kilometers of code written</span>
        </div>
        <div className="flex flex-col gap-4">
          <CountUp start={countStarted ? 0 : undefined} end={281} duration={3} separator="," decimals={0} className={`text-7xl transition-all md:h-[80px] ${countStarted ? 'count-up' : ''}`} />
          <span>Liters of Coffee Drank</span>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
