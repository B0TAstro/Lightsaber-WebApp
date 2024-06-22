import React, { useEffect } from 'react';
import gsap from 'gsap';

const Lightsaber = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      gsap.to('.lightsaber', {
        duration: 5,
        rotate: gsap.utils.mapRange(0, window.innerWidth, -110, -70, x),
        x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, x),
        y: gsap.utils.mapRange(0, window.innerHeight, -75, 75, y)
      });
    };

    const handleClick = () => {
      gsap.to('.App', {
        duration: 0.5,
        '--hue': gsap.utils.random(0, 360, 1)
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="lightsaber">
      <div className="hilt">
        <div className="bt"></div>
        <div className="bt"></div>
      </div>
      <div className="beam"></div>
    </div>
  );
};

export default Lightsaber;