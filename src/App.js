import './App.css';

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiYoutube,
  FiTwitter,
} from 'react-icons/fi';
import {IoLogoWhatsapp} from 'react-icons/io';

function App() {
  return (
    <div>
      <nav className="bg-gray-200 p-4">
        <div className="mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-white h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20">
              <img
                className="w-full h-full object-contain"
                src="logo.png"
                alt="edstasy-logo"
              />
            </div>
            <div className="text-black text-lg sm:text-xl md:text-2xl font-bold">
              Edstasy Classes
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <FiMail className="text-gray-700" />
              <span className="text-gray-700 ml-1 hidden sm:inline">
                info@edstasy.com
              </span>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-gray-700" />
              <span className="text-gray-700 ml-1 hidden sm:inline">
                +1 234 567 890
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto">
        <div className="h-auto md:h-96 bg-blue-500 p-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to my website
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-0">
            At Edstasy Classes, we believe in fostering a dynamic learning
            environment where every student is empowered to achieve their
            academic goals and unlock their full potential. With a commitment to
            excellence and innovation, we provide comprehensive coaching
            solutions designed to nurture holistic development and academic
            success. This is some sample text for the body of the page.
          </p>
        </div>

        <div className="parallax-bg h-auto md:h-96 flex flex-col md:flex-row justify-center items-center md:gap-20 relative overflow-hidden">
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <div className="w-28 h-28 md:w-44 md:h-44 flex items-center justify-center bg-blue-500 p-2 md:p-4 rounded-full">
              <img
                className="w-3/4 h-3/4 md:w-4/5 md:h-4/5 object-contain"
                src="students.png"
                alt="edstasy-logo"
              />
            </div>

            <p className="text-gray-500 mt-2 text-lg md:text-4xl font-bold">
              200+ Students
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <div className="w-28 h-28 md:w-44 md:h-44 flex items-center justify-center bg-blue-500 p-2 md:p-4 rounded-full">
              <img
                className="w-3/4 h-3/4 md:w-4/5 md:h-4/5 object-contain"
                src="lecture.png"
                alt="edstasy-logo"
              />
            </div>
            <p className="text-gray-500 mt-2 text-lg md:text-4xl font-bold">
              20+ Lectures
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28 md:w-44 md:h-44 flex items-center justify-center bg-blue-500 p-2 md:p-4 rounded-full">
              <img
                className="w-3/4 h-3/4 md:w-4/5 md:h-4/5 object-contain"
                src="teacher.png"
                alt="edstasy-logo"
              />
            </div>
            <p className="text-gray-500 mt-2 text-lg md:text-4xl font-bold">
              Experienced Faculty
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 mt-8">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-black">
          <div className="flex items-center gap-4">
            <FiMapPin className="text-gray-700" />
            <span className="text-sm sm:text-base md:text-lg">
              123 Main Street, Cityville, State, Country
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="text-gray-700" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube className="text-gray-700" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter className="text-gray-700" />
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=1234567890"
        target="_blank"
        rel="noopener noreferrer"
        title="whatsapp me"
        className="fixed bottom-4 right-4 border border-green-500 p-2 rounded-full"
      >
        <IoLogoWhatsapp className="text-green-500 text-3xl md:text-4xl" />
      </a>
    </div>
  );
}

export default App;
