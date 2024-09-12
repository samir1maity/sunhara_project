/** @format */

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import sunhara from "../assets/logo/sunhara.png";
import insta from "../assets/SVG/instagram-svgrepo-com.svg";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getFirestore } from "firebase/firestore";

const DB = getFirestore();

// import { auth, db } from "./firebase";
// import { getDoc } from "firebase/firestore";

const Footer = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState("");

  const fetchedUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("docSnap.datab from gallery", docSnap.data());
        setIsUser(docSnap.data());
      } else {
        console.log("user is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchedUserData();
  }, []);

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const onClose = () => {
    setOpenLoginModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log("user logeed in successfully", data);
    } catch (error) {}
    onClose();
  };

  async function signOut() {
    try {
      await auth.signOut();
      console.log("user signed out successfully");
    } catch (error) {
      console.error("signOut error", error);
    }
  }

  // useEffect(() => {
  //   fetchedUserData();
  // }, []);

  return (
    <footer className="bg-[#800020] text-white py-8" id="footer">
      {openLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border text-gray-700 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border text-gray-700 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Company Description */}
          <div className="text-center md:text-left md:w-1/3 mb-6 md:mb-0">
            <img
              src={sunhara}
              alt="Company Logo"
              className="mx-auto md:mx-0 mb-4 h-20 w-52"
            />
            <p className="text-sm">
              Sunhara Wedding Planner is dedicated to creating memorable and
              personalized wedding experiences. Our expert team offers a full
              range of services, including venue selection, vendor coordination,
              budget management, and event design. We work closely with you to
              ensure every detail is perfect, from the initial concept to the
              final execution. Whether you envision an intimate ceremony or a
              grand celebration, Sunhara Wedding Planner brings creativity,
              professionalism, and meticulous attention to detail to every
              event. Our commitment to excellence and personalized service
              ensures a seamless, stress-free experience, allowing you to fully
              enjoy your special day.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-center md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Browse</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  className="hover:text-orange-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  smooth={true}
                  duration={1000}
                  className="hover:text-orange-500"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  className="hover:text-orange-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                {isUser ? (
                  <>
                    <a
                      href="#"
                      className="hover:text-orange-500"
                      onClick={signOut}
                    >
                      Sign out
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="#"
                      className="hover:text-orange-500"
                      onClick={handleOpenLoginModal}
                    >
                      log in
                    </a>
                  </>
                )}
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
            <ul className="space-y-2">
              <li>
                📍 Konnagar, Ghatal, Paschim Medinipur, West Bengal 721212
              </li>
              <li>✉️ sunharaweddingplanner@gmail.com</li>
              <li>
                <a href="tel:+7908172440" className="">
                  📞 +91 9614187462
                </a>
              </li>
              <li>
                <a href="tel:+7908172440" className="">
                  📞 +91 7908172440
                </a>
              </li>
              <li>🕒 Open 10am - 7pm, Sunday closed</li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="mt-8 border-t border-gray-700 text-center md:flex md:justify-between">
          <div className="mb-4 mt-4 md:mb-0 flex items-center justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=100083529304467&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-500 mx-2"
            >
              <FaFacebook size={26} />
            </a>
            <a
              href="https://www.instagram.com/sunheraweddingplanner20?igsh=YjBldjB5MWs2cnFk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-500 mx-2"
            >
              <FaInstagram size={26} />
            </a>
          </div>
          <p className="text-sm mt-4">
            © 2024 | Designed & Managed by{" "}
            <span className="text-orange-500">Prince Globe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
