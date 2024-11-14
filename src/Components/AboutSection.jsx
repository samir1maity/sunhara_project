/** @format */

import { FaPhoneSquareAlt } from "react-icons/fa";
import about1 from "../assets/about/about-1.jpg";
import bgFlower from "../assets/about/bg-flower.png";
import galleryImg from "../assets/carousel/gallery-6.jpg";
import phone from "../assets/SVG/phone.svg";
import smallIcon from "../assets/logo/sunharaFav.png";

const AboutSection = () => {
  return (
    <div
      id="about"
      className=" items-center py-10 sm:px-16 px-8 bg-[#f5f5dc] flex flex-col md:flex-row relative"
      style={{ minHeight: "90vh" }}
    >
      <img
        src={bgFlower}
        alt=""
        className="absolute bottom-0 right-0 opacity-50 z-0 h-48"
      />
      <img
        src={bgFlower}
        alt=""
        className="absolute top-0 left-0 rotate-180 opacity-50 z-0 h-48"
      />
      <div className="flex items-center justify-center md:w-1/2 sm:wfull border-black">
        <img
          src={about1}
          alt="Wedding"
          className="h-full object-cover relative z-10"
        />
      </div>
      <div className="flex flex-col justify-center md:p-8 w-full sm:w-full md:w-1/2 h-full sm:gap-2">
        <h2
          className="text-[#80233a] text-6xl font-bold mt-4 font-dancing"
          data-aos="zoom-in"
        >
          About us
        </h2>
        <h3 className="text-4xl font-semibold text-gray-600 mt-4 ">
          We Make Your Every Moment
        </h3>
        <p className="mt-4 text-gray-600  text-xl">
          Sunhara Wedding Planner is dedicated to creating memorable and
          personalized wedding experiences. Our expert team offers a full range
          of services, including venue selection, vendor coordination, budget
          management, and event design. We work closely with you to ensure every
          detail is perfect, from the initial concept to the final execution.
          Whether you envision an intimate ceremony or a grand celebration,
          Sunhara Wedding Planner brings creativity, professionalism, and
          meticulous attention to detail to every event. Our commitment to
          excellence and personalized service ensures a seamless, stress-free
          experience, allowing you to fully enjoy your special day.
        </p>

        <div className="mt-6 p-4 bg-[#79a879] rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={smallIcon}
              alt="Bride"
              className="w-24 h-24  object-cover"
            />
            <div
              className="mt-4 md:mt-0 md:ml-4 text-center md:text-left"
              data-aos="zoom-in"
            >
              <h4 className="text-2xl font-bold text-[#80233a]">Sunhara</h4>
              <p className="text-gray-800 font-bold">
                "Sunhare sapne, humare saath pura karo."
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 lg:mt-4">
          <div className="flex items-center  md:mt-0">
            <div className="">
              <img src={phone} className="w-5 h-5 mr-1" />
            </div>
            <a
              href="tel:+7908172440"
              className=" text-lg font-bold text-pink-700"
            >
              +91 9614187462
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
