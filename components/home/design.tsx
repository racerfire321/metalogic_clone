'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SnakeTimeline from "../SnakeTimeline";
import { FaLocationDot } from "react-icons/fa6";


const Design = () => {
  

 
  return (
    <section className="min-h-screen py-8 md:py-32">
      <h1 className="px-2 py-4 text-center text-4xl font-semibold capitalize md:px-0 md:text-5xl">
        Design, build and scale your <br /> vision with us
      </h1>
      <div className="mx-auto flex gap-3 px-2 md:hidden">
      
        <ul className="flex flex-col gap-2 py-4">
          <li>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex-col space-y-1.5 p-6 flex gap-2">
                <div className="w-fit rounded-xl bg-blue-50 p-4">
                  <img
                    alt="Ideate"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    src="/card/ideate.svg"
                    className="w-8"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">
                  Ideate
                </h3>
              </div>
              <div className="p-6 pt-0">
                Let's brainstorm together and explore creative ideas to solve
                your unique challenges.
              </div>
            </div>
          </li>
          <li>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex-col space-y-1.5 p-6 flex gap-2">
                <div className="w-fit rounded-xl bg-blue-50 p-4">
                  <img
                    alt="design"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    src="/card/design.svg"
                    className="w-8"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">
                 design
                </h3>
              </div>
              <div className="p-6 pt-0">
                Let's brainstorm together and explore creative ideas to solve
                your unique challenges.
              </div>
            </div>
          </li>

          <li>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex-col space-y-1.5 p-6 flex gap-2">
                <div className="w-fit rounded-xl bg-blue-50 p-4">
                  <img
                    alt="develop"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    src="/card/develop.svg"
                    className="w-8"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">
                  develop
                </h3>
              </div>
              <div className="p-6 pt-0">
                Let's brainstorm together and explore creative ideas to solve
                your unique challenges.
              </div>
            </div>
          </li>
          <li>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex-col space-y-1.5 p-6 flex gap-2">
                <div className="w-fit rounded-xl bg-blue-50 p-4">
                  <img
                    alt="launch"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    src="/card/ideate.svg"
                    className="w-8"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">
                  launch
                </h3>
              </div>
              <div className="p-6 pt-0">
                Let's brainstorm together and explore creative ideas to solve
                your unique challenges.
              </div>
            </div>
          </li>
          <li>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex-col space-y-1.5 p-6 flex gap-2">
                <div className="w-fit rounded-xl bg-blue-50 p-4">
                  <img
                    alt="scale"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    src="/card/scale.svg"
                    className="w-8"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">
                  scale
                </h3>
              </div>
              <div className="p-6 pt-0">
                Let's brainstorm together and explore creative ideas to solve
                your unique challenges.
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden 2xl:container md:block">
        {/* Add your content here */}
      </div>
   

      <div className="hidden 2xl:container md:block">
      
     
        <SnakeTimeline 
        />
         
    <div>
    <div style={{ transform: 'rotate(270deg)' , fontSize: '5rem' }} className="w-23 h-3" >
        <FaLocationDot width={600} height={100} style={{ fill: 'url(#paint15_linear_197_4363)', fontSize: '3rem' }} />
    </div>
    </div>    
  
      </div>
    </section>
  );
};

export default Design;