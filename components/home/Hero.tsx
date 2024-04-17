'use client'
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { IoInformationCircle } from 'react-icons/io5';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [stars, setStars] = useState<{ x: number; y: number; radius: number; vx: number; vy: number }[]>([]);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const FPS = 60;
  const mouseRef = useRef<{ x: number; y: number; hovered: boolean }>({ x: 0, y: 0, hovered: false });

  useEffect(() => {
    if (canvasRef.current) {
      const { width, height } = canvasRef.current.getBoundingClientRect();
      setCanvasSize({ width, height });
      setCenterX(width / 2);
      setCenterY(height / 2);
      const initialStars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
      for (let i = 0; i < 100; i++) {
        initialStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1 + 1,
          vx: Math.random() * 20 - 10,
          vy: Math.random() * 20 - 10
        });
      }
      setStars(initialStars);
      draw();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      const { left, top } = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.hovered = true;
      if (isVisible) {
        draw();
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
     
    };
  }, [isVisible]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    const mouseX = mouseRef.current.hovered ? mouseRef.current.x : centerX;
    const mouseY = mouseRef.current.hovered ? mouseRef.current.y : centerY;
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    }
    ctx.beginPath();
    for (let i = 0; i < stars.length; i++) {
      const starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance({ x: mouseX, y: mouseY }, starI) < 150) ctx.lineTo(mouseX, mouseY);
      for (let j = 0; j < stars.length; j++) {
        const starII = stars[j];
        if (distance(starI, starII) < 150) {
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  };

  const distance = (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
    let xs = point2.x - point1.x;
    xs *= xs;
    let ys = point2.y - point1.y;
    ys *= ys;
    return Math.sqrt(xs + ys);
  };

  const updateStars = () => {
    const updatedStars = stars.map((star) => ({
      ...star,
      x: star.x + star.vx / FPS,
      y: star.y + star.vy / FPS,
      vx: star.x < 0 || star.x > canvasSize.width ? -star.vx : star.vx,
      vy: star.y < 0 || star.y > canvasSize.height ? -star.vy : star.vy
    }));
    setStars(updatedStars);

    // Check if more than half of the stars are out of the canvas
    const starsInCanvas = updatedStars.filter((star) => {
      return star.x >= 0 && star.x <= canvasSize.width && star.y >= 0 && star.y <= canvasSize.height;
    });
    if (starsInCanvas.length < updatedStars.length / 2) {
      // Redraw stars randomly within the canvas
      const newStars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
      for (let i = 0; i < updatedStars.length; i++) {
        const randomX = Math.random() * canvasSize.width;
        const randomY = Math.random() * canvasSize.height;
        newStars.push({
          x: randomX,
          y: randomY,
          radius: updatedStars[i].radius,
          vx: updatedStars[i].vx,
          vy: updatedStars[i].vy
        });
      }
      setStars(newStars);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateStars();
      draw();
    }, 1000 / FPS);
    return () => clearInterval(interval);
  }, [stars]);

  const handleMouseEnter = () => {
    setIsVisible(true);
    mouseRef.current.hovered = true;
    draw();
  };

  const handleMouseLeave = () => {
    setIsVisible(true);
    mouseRef.current.hovered = false;
    draw();
  };

  return (
    <div
      className="top-0 left-0 w-full  h-screen flex justify-center items-center overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: 'url(/herobg.svg)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          width={canvasSize.width}
          height={canvasSize.height}
        />
      )}
      <IoInformationCircle className='absolute top-[13%] right-[4%] text-white' style={{ fontSize: '3rem' }} />

      <div className="text-center mt-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div initial={{ y: 400 }} animate={{ y: -30 }} transition={{ type: 'tween', duration: 0.4}}>
        <div>
          <h2 className="mb-8 text-4xl font-semibold lg:text-6xl">
            Transforming <br />
            Today <br />
            For <br /> Digital Tomorrow
          </h2>
          <p className="w-[90vw] font-semibold lg:w-full">
            We are committed to offering state-of-the-art software solutions that <br />
            enable companies to prosper in the digital world.
          </p>
        </div>
        </motion.div>
        <div className="flex justify-center pt-10" style={{ opacity: 1, transform: 'none' }}>
          <a className="group flex gap-2 rounded-lg bg-black/30  px-8 py-3 hover:bg-secondary-300 transition-all duration-500 hover:bg-red-500" aria-label="go to about page" href="/about">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-all duration-500 group-hover:translate-x-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
