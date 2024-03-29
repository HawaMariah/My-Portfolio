import React from "react";
import img from "../assets/hawaa.png";
import img1 from "../assets/ht.png";

import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Landing() {
  return (
    <>
      <div className="relative ">
        <div className=" bg-[#03131A] h-screen grid grid-col-1  lg:grid-cols-2 min-w-fit  ">
          <div className=" flex items-center justify-center animate-fade-right animate-duration-1000  animate-ease-in  ">
            <div className="relative mb-10">
              <img
                src={img}
                alt=""
                className="rounded-full  opacity-40 w-[80vw] md:w-[60vw] lg:w-[40vw]  border-b  ml-10  "
              />
            </div>
            <div className="absolute opacity-30 bottom-28  blur-sm   ">
              <img src={img1} alt="" className="w-[26vw] " />
            </div>
          </div>

          <div className="flex items-center md:justify-center  bg-[#03131A]">
            <div className=" text-white  animate-fade-left animate-duration-1000 animate-ease-in   w-[100%] md:w-[50vw]  lg:w-[40vw]  p-10 containerr bg-gradient-to-b from-[#03131A] to-gray-500">
              <p className="uppercase text-xl md:text-4xl mb-4 font-mono font-bold">
                Hi There,
              </p>
              <p className=" uppercase text-2xl sm:text-4xl    mb-4  font-mono">
                I'm Hawa Maria,
              </p>
              <div className="md:font-bold text-sm  lg:text-lg 2xl:text-3xl  font-serif  tracking-wider">
                <TypeAnimation
                  sequence={[
                    "Software Engineer ",
                    1000,
                    "Web Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Backend Developer",
                    1000,
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
              <div className="  text-4xl mt-5 ">
                <div className="flex ">
                  <a
                    href="https://instagram.com/hawa_maria_?igshid=OGQ5ZDc2ODk2ZA==/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  hover:text-pink-700 p-2 rounded-full 2xl:border-2  border-gray-800  "
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hawa-maria-338511288/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4  hover:text-blue-700  2xl:border-2 p-2 rounded-full border-gray-800"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/hawa_maria1?t=vaOHYqU3G0hRiiNZB1R0ag&s=09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4  hover:text-blue-600  2xl:border-2 p-2 rounded-full border-gray-800 "
                  >
                    <FaXTwitter />
                  </a>
                </div>

                <p className=" pt-3 font-mono text-2xl sm:text-4xl  ">
                  {" "}
                  Let's Connect!!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wave  hidden lg:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Landing;
