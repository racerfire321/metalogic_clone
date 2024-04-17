'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SnakeTimeline = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (pathRef.current) {
      // Calculate the length of the path
      const pathLength = pathRef.current.getTotalLength();

      // Set initial state of the path
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      // Animate the path
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 500, 
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true // Adjust scrubbing as needed
        }
      });
    }
  }, []);
  return (
    <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="container mx-auto"
          viewBox="0 0 1174 765"
          style={{ opacity: 4}}
        >
  <defs>
    <linearGradient id="paint15_linear_197_4363" x1="587"
          x2="674.5"
          y1="643"
          y2="644"
          gradientUnits="userSpaceOnUse"
          >
    <stop stopColor="#F83962"></stop>
         <stop offset="1" stopColor="#213C8E"></stop>
    </linearGradient>
  </defs>
  <path
  ref={pathRef}
  strokeDasharray="0px 5px"
        strokeLinecap="round"
        strokeWidth="10"
        stroke="url(#paint15_linear_197_4363)"
        strokeDashoffset="0"
        
       
       
        d="M612.334 17.593c-89-19-150.5 138 0 150 61 4.864 101 106.5 0 143-115.5 0-125.62 147.5 0 147.5 59 0 101.5 123.5 0 144.5-125.5 0-118 160 0 146"
         // Adjust this value according to the length of your motion path
      ></path>
      
  <path 
  ref={pathRef}
         strokeDashoffset="0"
         strokeLinecap="round"
         strokeWidth="3"   stroke="url(#paint15_linear_197_4363)"  d="
    M612.334 17.593
    C523.334 -1.40692 461.834 155.593 612.334 167.593
    C673.334 172.457 713.334 274.093 612.334 310.593
    C496.834 310.593 486.714 458.093 612.334 458.093
    C671.334 458.093 713.834 581.593 612.334 602.593
    C486.834 602.593 494.334 762.593 612.334 748.593
    M668 86
    C634.5 97 612.33 121 593 121
    C573.67 121 558 105.33 558 86
    C558 66.67 573.67 51 593 51
    C612.33 51 633 76.5 668 86Z
    
    M774 87
    L784 91.7735
    V80.2265
    L774 85
    Z
    
    M653 87
    H775
    V85
    H653
    Z
    
    M527 232
    C560.5 243 582.67 267 602 267
    C621.33 267 637 251.33 637 232
    C637 212.67 621.33 197 602 197
    C582.67 197 562 222.5 527 232Z
    
    M421 233
    L411 237.774
    V226.226
    L421 231
    Z
    
    M542 233
    H420
    V231
    H542
    Z
    
    M668 378
    C634.5 389 612.33 413 593 413
    C573.67 413 558 397.33 558 378
    C558 358.67 573.67 343 593 343
    C612.33 343 633 368.5 668 378Z
    
    M774 379
    L784 383.774
    V372.226
    L774 377
    Z
    
    M653 379
    H775
    V377
    H653
    Z
    
    M527 524
    C560.5 535 582.67 559 602 559
    C621.33 559 637 543.33 637 524
    C637 504.67 621.33 489 602 489
    C582.67 489 562 514.5 527 524Z
    
    M421 525
    L411 529.774
    V518.226
    L421 523
    Z
    
    M542 525
    H420
    V523
    H542
    Z
    
    M668 670
    C634.5 681 612.33 705 593 705
    C573.67 705 558 689.33 558 670
    C558 650.67 573.67 635 593 635
    C612.33 635 633 660.5 668 670Z
    
    M774 671
    L784 675.774
    V664.226
    L774 669
    Z
    
    M653 671
    H775
    V669
    H653
    Z
    
  "/>
</svg>
  );
}

export default SnakeTimeline;
