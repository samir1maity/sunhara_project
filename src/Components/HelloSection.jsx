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
      <div className="absolute md:bottom-36 bottom-44 z-43" style={{right:'-23px'}}>
        <img src={tampbg} alt="corner_img" />
      </div>
      <div className="absolute bottom-36 md:bottom-32 left-0 rotate-180 z-40 top" style={{left:'-17px'}}>
        <img src={tampbg} alt="corner_img" />
      </div>
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="text-8xl sm:text-8xl font-GreatVibes font-bold text-[#80233a] ">
            Hello!
          </h1>
          <div className="flex items-center justify-around">
            <img
              src={line}
              alt=""
              className="h-10 w-12 color-[#80233a] rounded-lg"
            />
            <h4 className="text-4xl sm:text-6xl text-gray-600 font-GreatVibes">
              We invite you to celebrate our wedding
            </h4>
            <img src={line} alt="" className="h-10 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloSection;
