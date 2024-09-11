/** @format */

import { useEffect, useState } from "react";
import carousel1 from "../assets/carousel/carousel-1.jpg";
import carousel2 from "../assets/carousel/carousel-2.jpg";
// import carousel3 from "../assets/carousel/carousel-3.png";
import realImg from "../assets/carousel/gallery-6.jpg";

const images = [carousel1, carousel2, realImg];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden' id="home">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='w-full h-full object-cover'
          />
        </div>
      ))}

      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h2 className='text-4xl md:text-6xl lg:text-8xl font-GreatVibes animate-pulse text-white text-center'>
        "Sunhare sapne, humare saath pura karo."
        </h2>
      </div>

      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
