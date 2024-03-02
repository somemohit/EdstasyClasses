import './App.css';

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiYoutube,
  FiFacebook,
} from 'react-icons/fi';
import {IoLogoWhatsapp, IoMdClose} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';

import {Autoplay, Navigation, Pagination, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from 'react';
import {Link} from 'react-scroll';
import {menus, slideImgs} from './StaticData';

function App() {
  // states start
  const [isOpen, setIsOpen] = useState(false);
  // states end

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <button onClick={toggleSidebar} className="fixed top-2 right-2 z-40">
          <GiHamburgerMenu />
        </button>
        <nav className="sm:fixed top-0 left-0 z-40 w-full bg-yellow-300 pt-1 shadow-md">
          <div className="relative mx-auto flex flex-col md:flex-row justify-between md:items-center gap-2">
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
                <div className="bg-gradient-to-r from-blue-700 via-yellow-500 to-green-500 bg-clip-text text-transparent animate-bounce font-Rampart text-black text-3xl sm:text-3xl md:text-4xl font-bold">
                  Edstasy Classes
                </div>
                <p className="text-2xs md:text-base md:font-semibold">
                  Empowering futures through top-tier math and science coaching.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between sm:justify-end gap-4 py-2 sm:py-1 px-4 sm:px-10 bg-green-200 md:bg-transparent">
                <div className="flex items-center">
                  <FiMail className="text-gray-700" />
                  <a
                    className="text-gray-700 text-xs sm:text-sm md:text-base ml-1 inline"
                    href="mailto:edstasyclasses@gmail.com"
                  >
                    edstasyclasses@gmail.com
                  </a>
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

              {/* menu options start */}
              <div className="hidden sm:flex justify-end px-4 sm:px-10">
                <ul
                  className={`md:flex font-semibold text-black h-fit md:h-full py-4 gap-8 space-y-6 md:space-y-0 items-center md:space-x-12 z-[-1] md:z-auto
        absolute md:static left-0 w-full md:w-auto border-t-2 md:border-t-0
        transition-all md:transition-none duration-500 ease-in-out shadow-xl md:shadow-none`}
                >
                  {menus?.map((item) => {
                    return (
                      <li key={item?.id} className="cursor-pointer">
                        <Link
                          activeClass="active"
                          to={item?.name}
                          smooth={true}
                          duration={500}
                          offset={-100}
                          className=" relative before:content-[''] before:absolute 
                before:opacity-0 before:-bottom-2 md:before:left-0 before:h-1 before:rounded-full before:duration-300 before:transition-all
                before:bg-blue-500 before:w-0 hover:before:h-1 hover:before:w-full hover:before:opacity-100"
                        >
                          {item?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* menu options end */}
            </div>
          </div>
        </nav>

        <main className="mx-auto sm:pt-32">
          <div
            className="bg-cover bg-center"
            style={{backgroundImage: "url('slide/pattern.jpg')"}}
          >
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
                      className="w-full h-80 md:h-[600px] object-contain"
                      src={item?.url}
                      alt={item?.alt}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div
            name="Profile"
            className="h-auto md:h-fit bg-green-200 px-4 sm:px-20 py-10 sm:py-10 gap-6 md:gap-20 flex flex-col sm:flex-row justify-between items-center"
          >
            <div className="flex flex-col gap-4">
              <div className="text-white h-52 w-52 sm:h-28 sm:w-28 md:h-80 md:w-80 shadow-md">
                <img
                  className="w-full h-full object-contain"
                  src="profile-pic.jpg"
                  alt="profile-pic"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-xl lg:text-2xl">
                Mr. Satyabrata Mishra
              </p>
              <p className="text-white text-sm md:text-xl lg:text-2xl px-4 md:px-4 py-2 bg-blue-500 border-l-4 border-gray-700">
                Founder and Educator
              </p>
            </div>

            <div className="p-6 sm:p-10 border border-gray-300 rounded-lg relative">
              <div className="text-5xl sm:text-8xl absolute -top-4 sm:-top-8 left-3 sm:left-6 text-gray-400">
                ❝
              </div>
              <div className="text-5xl sm:text-8xl absolute -bottom-8 sm:-bottom-16 right-3 sm:right-6 text-gray-400">
                ❞
              </div>
              <p className="text-sm sm:text-3xl tracking-wide leading-loose font-cursive text-gray-700">
                My goal extends beyond teaching textbook content; I strive to
                equip students to confront and overcome the challenges they'll
                encounter in the future. My efforts are dedicated to shaping you
                into a well-rounded individual and preparing you for a
                successful profession.
              </p>
            </div>
          </div>

          <div
            name="Features"
            style={{backgroundImage: "url('pattern-2.jpg')"}}
            className="relative bg-cover h-auto bg-white px-4 sm:px-20 py-10 sm:py-20"
          >
            <p className="text-3xl sm:text-6xl text-white font-bold text-center mb-4 sm:mb-8">
              Our Features
            </p>
            <div className="flex flex-col gap-6 sm:flex-row md:gap-6 justify-between items-center">
              <ul className="text-sm sm:text-3xl text-white flex flex-col gap-4 font-semibold">
                <li>👉 Structured Curriculum and small class sizes</li>
                <li>👉 Weekly test and monthly test to track progress</li>
                <li>👉 Practice Materials and doubt clear sessions</li>
                <li>👉 Individualized Support and motivational support</li>
                <li>
                  👉 Extra-curricular activities and personality development
                  skills
                </li>
                <li>👉 Parent-Teacher Communication</li>
                <li>👉 Group activities and cultural inclusivity</li>
              </ul>

              <div className="sm:w-1/3 p-4 sm:p-6 bg-gradient-to-r from-blue-400 via-yellow-300 to-green-200 rounded-lg shadow-lg">
                <p className="text-sm sm:text-3xl font-bold mb-3 sm:mb-4">
                  Class Timing:-
                </p>
                <ul className="text-xs sm:text-2xl flex flex-col gap-3 sm:gap-4 font-semibold">
                  <li>i) Monday to Friday(Class)</li>
                  <li>ii) Saturday (Closed)</li>
                  <li>iii) Sunday (Exam and Extra curricular Activities )</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            name="About"
            className="relative h-auto sm:h-[500px] bg-blue-500 px-4 sm:px-20 py-10 sm:py-10 text-center flex flex-col md:gap-6 justify-center items-center"
          >
            {/* background faded logo starts */}
            <div className="opacity-20 absolute left-1/2 transform -translate-x-1/2 text-white h-64 w-64 sm:h-52 sm:w-52 md:h-96 md:w-96">
              <img
                className="w-full h-full object-contain"
                src="logo.png"
                alt="edstasy-logo"
              />
            </div>
            {/* background faded logo ends */}
            <div className="z-10 flex flex-col gap-0 sm:gap-4">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                About us
              </h1>
              <p className="text-white text-sm md:text-xl lg:text-2xl px-4 md:px-0">
                At Edstasy Classes, we believe in fostering a dynamic learning
                environment where every student is empowered to achieve their
                academic goals and unlock their full potential. With a
                commitment to excellence and innovation, we provide
                comprehensive coaching solutions designed to nurture holistic
                development and academic success.
              </p>
            </div>
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

          <div
            name="Location"
            className="h-96 sm:h-[500px] bg-blue-500 p-4 sm:p-10 flex justify-center items-center"
          >
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

        <footer name="Contact" className="bg-yellow-300">
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
                  href="https://www.youtube.com/@EdstasyClasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 duration-300"
                >
                  <FiYoutube className="text-gray-700 text-2xl " />
                </a>
                <a
                  href="https://www.facebook.com/Edstasy"
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

      {/* mobile sidenav starts */}
      <div
        className={`sidebar ${
          !isOpen ? 'open' : 'shadow-nimble'
        } fixed left-0 top-0 z-50 h-full text-white w-4/5 transition-all duration-300`}
      >
        <div className="relative bg-gray-900 text-white w-full h-full py-8 px-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleSidebar}
          >
            <IoMdClose className="text-white text-xl" />
          </button>
          <p className="bg-gradient-to-r from-blue-700 via-yellow-500 to-green-500 bg-clip-text text-transparent font-Rampart text-black text-3xl sm:text-3xl md:text-4xl font-bold">
            Edstasy Classes
          </p>
          <ul className="pl-1 pt-6 font-bold text-lg">
            {menus?.map((item) => {
              return (
                <Link
                  key={item?.id}
                  activeClass="active"
                  to={item?.name}
                  smooth={true}
                  duration={500}
                  className=""
                  onClick={toggleSidebar}
                >
                  <li className="py-4">{item?.name}</li>
                </Link>
              );
            })}
          </ul>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white h-32 w-32 sm:h-28 sm:w-28 md:h-32 md:w-32">
            <img
              className="w-full h-full object-contain"
              // src="./EdstasyClasses/logo.png"
              src="logo.png"
              alt="edstasy-logo"
            />
          </div>
        </div>
      </div>
      {/* mobile sidenav ends */}
    </>
  );
}

export default App;
