/** @format */

// import { useState } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/Navbar";
import HelloSection from "./Components/HelloSection";
import Timeline from "./Components/Timeline";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import { useEffect } from "react";
// import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ImageUpload from "./Components/ImageUpload";
// import Story from "./Components/Story";

function App() {
  // const [user, setUser] = useState('')

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration (in ms)
      offset: 100, // Customize the offset (in px)
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <>
      {" "}
      <div>
        {/* <Helmet>
          <title>Best Wedding Planner in kolkata | Sunhara Wedding Planner</title>
        </Helmet> */}
        <Navbar /> {/* Navbar will be at the top */}
        <HeroSection />
        <HelloSection />
        <AboutSection />
        {/* <Story /> */}
        <Timeline />
        <Gallery />
        <Footer />
        {/*<Signup />*/}
        <Login />
        {/* <ImageUpload/> */}
        {/* Add other sections like Gallery, RSVP as required */}
      </div>
    </>
  );
}

export default App;
