'use client'
import React from 'react';
import CountUp from 'react-countup'; // Import react-countup

const StatsCard = () => {
  return (
    <div className="mx-4 -mb-10 z-50 flex flex-col justify-between gap-4 rounded-xl border bg-white text-black p-4 font-semibold text-accent-teal shadow-lg shadow-translucent-dark-200 sm:flex-row md:mx-auto md:w-[80%] md:px-16 xl:w-[50%]">
      <div className="flex flex-col gap-4">
        {/* Use CountUp component instead of the Odometer */}
        <CountUp start={0} end={381} duration={3} separator="," decimals={0} className="text-7xl md:h-[80px]" />
        <span>Kilometers of code written</span>
      </div>
      <div className="flex flex-col gap-4">
        <CountUp start={0} end={281} duration={3} separator="," decimals={0} className="text-7xl md:h-[80px]" />
        <span>Liters of Coffee Drank</span>
      </div>
    </div>
  );
};

export default StatsCard;
