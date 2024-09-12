/** @format */

import { FaPhoneSquareAlt } from "react-icons/fa";
import about1 from "../assets/about/about-1.jpg";
import bgFlower from "../assets/about/bg-flower.png";
import galleryImg from "../assets/carousel/gallery-6.jpg";

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
        <h2 className="text-[#80233a] text-6xl font-bold mt-4 font-dancing">
          About us
        </h2>
        <h3 className="text-4xl font-semibold mt-2  text-gray-600 mt-4 ">
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
              src={galleryImg}
              alt="Bride"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
              <h4 className="text-2xl font-bold text-[#80233a]">Sunhara</h4>
              <p className="text-gray-800 font-bold">
                "Sunhare sapne, humare saath pura karo."
              </p>
              <div className="flex justify-center md:justify-start gap-2 mt-4">
                <a href="#" className="hover:text-pink-600">
                  {/* <i className='fab fa-facebook-f'></i> */}
                </a>
                <a href="#" className="hover:text-pink-600">
                  {/* <i className='fab fa-twitter'></i> */}
                </a>
                <a href="#" className="hover:text-pink-600">
                  {/* <i className='fab fa-instagram'></i> */}
                </a>
                <a href="#" className="hover:text-pink-600">
                  {/* <i className='fab fa-linkedin'></i> */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-between items-center lg:mt-4">
          <div className="flex items-center  md:mt-0">
            <div className="">
              <FaPhoneSquareAlt size={18} />
            </div>
            <span className=" text-lg font-bold text-pink-700">
              +123 456 7890
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
