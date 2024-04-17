import React, { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = {
    x: 0,
    y: 0
  };
  const stars: any[] = [];
  const FPS = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit early if canvas is null

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Push stars to array
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    const draw = () => {
      if (!ctx) return; // Exit early if context is null
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      
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
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
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

    const update = () => {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
      
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;
        
        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    };

    const distance = (point1: { x: any; y: any; }, point2: { x: number; y: number; }) => {
      let xs = 0;
      let ys = 0;
     
      xs = point2.x - point1.x;
      xs *= xs;
     
      ys = point2.y - point1.y;
      ys *= ys;
     
      return Math.sqrt(xs + ys);
    };

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const tick = () => {
      draw();
      update();
      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default StarField;
