'use client'
import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";

const cars = [
  {
    imageUrl: "https://i.ibb.co/FXtFBSh/martin-katler-0-Sm-GWb-Zzw-unsplash.jpg",
    name: "Black Coupe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    imageUrl: "https://i.ibb.co/7C3nkfr/niklas-du-EI1op-VNk4yg-unsplash.jpg",
    name: "Porsche",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    imageUrl: "https://i.ibb.co/b22kSx7/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg",
    name: "Orange Lamborghini",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const ServicesSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <section className="grid w-[80%] gap-y-8 pt-20 2xl:container sm:mx-auto lg:w-[90%] lg:grid-cols-2">
      <div className="order-2 grid items-center justify-center gap-y-8 px-4 sm:grid-cols-2">
        <div className="car-container">
          {cars.map((car, index) => (
            <ReactCardFlip
              isFlipped={isFlipped}
              flipDirection="vertical"
              key={index}
            >
              {/* Front side */}
              <div
                className="card-front"
                onClick={handleMouseEnter}
              >
                <img
                  src={car.imageUrl}
                  alt="car"
                />
              </div>
              {/* Back side */}
              <div className="card-back" onClick={handleMouseLeave}>
                <h2>{car.name}</h2>
                <p>{car.description}</p>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 md:px-8 lg:order-2">
        <div style={{ opacity: 1, transform: 'none' }}>
          <span className="font-semibold">Our Services</span>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <h5 className="text-5xl font-bold">Empowering <br /> Your Vision</h5>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <p>
            Our range of offerings is carefully curated to cater to your diverse needs, ensuring that your digital journey is seamless, captivating, and results-driven.
          </p>
        </div>
        <a
          aria-label="services that metalogic software provides"
          className="flex w-fit gap-2 rounded-lg border border-secondary-300 px-3 py-2 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white"
          href="/services"
        >
          Learn More
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-arrow-right"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>

        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
