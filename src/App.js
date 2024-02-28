import './App.css';

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiYoutube,
  FiFacebook,
} from 'react-icons/fi';
import {IoLogoWhatsapp} from 'react-icons/io';

import {Autoplay, Navigation, Pagination, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const slideImgs = [
    // {
    //   id: '1',
    //   url: './EdstasyClasses/tution.jpg',
    //   alt: 'edstasy-1',
    // },
    {
      id: '1',
      url: 'tution.jpg',
      alt: 'edstasy-1',
    },
    {
      id: '2',
      url: 'tution.jpg',
      alt: 'edstasy-2',
    },
    {
      id: '3',
      url: 'tution.jpg',
      alt: 'edstasy-3',
    },
  ];

  return (
    <div>
      <nav className="bg-yellow-300 pt-1 shadow-md">
        <div className="mx-auto flex flex-col md:flex-row justify-between md:items-center gap-2">
          <div className="flex items-center gap-4 px-4 sm:px-10">
            <div className="text-white h-28 w-28 sm:h-28 sm:w-28 md:h-32 md:w-32">
              <img
                className="w-full h-full object-contain"
                // src="./EdstasyClasses/logo.png"
                src="logo.png"
                alt="edstasy-logo"
              />
            </div>
            <div>
              <div className="animate-bounce font-Rampart text-black text-3xl sm:text-3xl md:text-4xl font-bold">
                Edstasy Classes
              </div>
              <p className="text-2xs md:text-base md:font-semibold">
                Empowering futures through top-tier math and science coaching.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-2 px-4 sm:px-10 bg-green-200 md:bg-transparent">
            <div className="flex items-center">
              <FiMail className="text-gray-700" />
              <span className="text-gray-700 text-xs sm:text-sm md:text-base ml-1 inline">
                satyabratamishra666@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-gray-700" />
              <a
                className="text-gray-700 text-xs sm:text-sm md:text-base ml-1 inline"
                href="tel:+91-7077586648"
              >
                +91-7077586648
              </a>
              {/* <span className="text-gray-700 text-xs sm:text-sm md:text-base ml-1 inline">
                +91-7077586648
              </span> */}
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto">
        <div className="">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            autoplay={{delay: 3000}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {slideImgs?.map((item) => {
              return (
                <SwiperSlide key={item?.id}>
                  <img
                    className="w-full h-80 md:h-[550px] object-contain"
                    src={item?.url}
                    alt={item?.alt}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="h-auto md:h-96 bg-blue-500 px-4 sm:px-10 py-10 sm:py-10 text-center flex flex-col md:gap-6 justify-center items-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About us
          </h1>
          <p className="text-white text-sm md:text-xl lg:text-2xl px-4 md:px-0">
            At Edstasy Classes, we believe in fostering a dynamic learning
            environment where every student is empowered to achieve their
            academic goals and unlock their full potential. With a commitment to
            excellence and innovation, we provide comprehensive coaching
            solutions designed to nurture holistic development and academic
            success. This is some sample text for the body of the page.
          </p>
        </div>

        <div className="parallax-bg py-10 h-auto md:h-96 flex flex-col md:flex-row justify-center items-center md:gap-20 relative overflow-hidden">
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <div className="w-28 h-28 md:w-44 md:h-44 flex items-center justify-center bg-blue-500 p-2 md:p-4 rounded-full">
              <img
                className="w-3/4 h-3/4 md:w-4/5 md:h-4/5 object-contain"
                src="students.png"
                alt="edstasy-logo"
              />
            </div>

            <p className="text-yellow-300 mt-2 text-lg md:text-4xl font-bold">
              30+ Students
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
            <p className="text-yellow-300 mt-2 text-lg md:text-4xl font-bold">
              1800+ hours of Lectures
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
            <p className="text-yellow-300 mt-2 text-lg md:text-4xl font-bold">
              Experienced Faculty
            </p>
          </div>
        </div>

        <div className="h-96 sm:h-[500px] bg-blue-500 p-4 sm:p-10 flex justify-center items-center">
          <iframe
            title="my-loc"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14926.661394566492!2d86.41384019898022!3d20.723809693601797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be9002f9805e1%3A0x444580ffd61cc5e1!2sEdstasy%20Classes!5e0!3m2!1sen!2sin!4v1709136562475!5m2!1sen!2sin"
            className="w-11/12 md:w-1/2 h-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <footer className="bg-yellow-300">
        <div className="mx-auto h-fit md:h-56 flex flex-col md:flex-row justify-between items-center gap-10 text-black p-10">
          <div className="text-white h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44">
            <img
              className="w-full h-full object-contain"
              // src="./EdstasyClasses/logo.png"
              src="logo.png"
              alt="edstasy-logo"
            />
          </div>

          <div className="flex items-center gap-4">
            <FiMapPin className="text-gray-700 text-xl" />
            <span className="text-sm sm:text-base md:text-lg">
              Jajpur - Singhpur Rd, Goudasahi, Odisha 755004
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold">Follow us on</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/edstasy_classes?igsh=MW96M3ZrMGlyNzVqNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300"
              >
                <FiInstagram className="text-gray-700 text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@EdstasyClasses://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300"
              >
                <FiYoutube className="text-gray-700 text-2xl " />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61557049223443&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300"
              >
                <FiFacebook className="text-gray-700 text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-green-200 h-16 text-gray-500 text-xs sm:text-base flex justify-center items-center">
          Edstasy Classes -2024 © All Rights Reserved.
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=7750803022"
        target="_blank"
        rel="noopener noreferrer"
        title="whatsapp me"
        className="fixed bottom-4 right-4 border border-green-500 bg-white p-2 rounded-full hover:scale-110 duration-300"
      >
        <IoLogoWhatsapp className="text-green-500 text-3xl md:text-4xl" />
      </a>
    </div>
  );
}

export default App;
