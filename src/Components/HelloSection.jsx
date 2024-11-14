/** @format */
import tampbg from "../assets/hellosction/tamp-bg-1.png";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import line from "../assets/SVG/line.svg";

const HelloSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const helloSection = document.getElementById("hello-section");
      const rect = helloSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        helloSection.classList.add("animate-images");
      } else {
        helloSection.classList.remove("animate-images");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-60 flex items-center justify-center bg-[#fffff0]">
      {/* <div
        className="absolute md:bottom-36 bottom-44 z-43"
        style={{ right: "-23px" }}
      ></div>
      <div
        className="absolute bottom-36 md:bottom-32 left-0 rotate-180 z-40 top"
        style={{ left: "-17px" }}
      ></div> */}
      <div className="w-full max-w-7xl mx-auto py-4 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="text-8xl sm:text-8xl font-GreatVibes font-bold text-[#80233a] ">
            Hello!
          </h1>
          <div
            className="flex items-center justify-around "
            data-aos="zoom-in-left"
          >
            <div className="w-72 max-w-4xl px-4">
              <div className="h-1 bg-gradient-to-r from-transparent via-[#80233a] to-transparent"></div>
            </div>
            <h4 className="text-4xl sm:text-6xl text-gray-600 font-GreatVibes">
              "Life is one big opportunity, celebrate every moment"
            </h4>
            <div className="w-72 max-w-4xl px-4">
              <div className="h-1 bg-gradient-to-r from-transparent via-[#80233a] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloSection;
