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
      <div className="bg-[#B79883] h-screen grid grid-cols-2">
        <div className=" flex items-center justify-center animate-fade-right animate-duration-1000  animate-ease-in  ">
          <div className="relative">
            <img
              src={img}
              alt=""
              className="rounded-full  opacity-50 w-[40vw]  "
            />
          </div>
          <div className="absolute opacity-30 bottom-28  blur-sm ">
            <img src={img1} alt="" className="w-[26vw]" />
          </div>
        </div>

        <div className="flex items-center  bg-[#B79883]">
          <div className=" text-white  animate-fade-left animate-duration-1000 animate-ease-in border-[#B79883]  border-4 w-[40vw] p-10 shadow-2xl bg-gradient-to-b from-gray-500 to-[#B79883]">
            <p className="uppercase text-4xl mb-4 font-mono font-bold">
              Hi There,
            </p>
            <p className=" uppercase text-6xl mb-4  font-mono">
              I'm Hawa Maria,
            </p>
            <div className="font-bold text-4xl font-serif  tracking-wider">
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
            <div className="flex text-4xl mt-5 ">
              <a
                href="https://instagram.com/hawa_maria_?igshid=OGQ5ZDc2ODk2ZA==/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-pink-500 hover:text-pink-700 bg-gray-200 p-2 rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/hawa-maria-338511288/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500 hover:text-blue-700 bg-gray-200 p-2 rounded-full"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/hawa_maria1?t=vaOHYqU3G0hRiiNZB1R0ag&s=09/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-400 hover:text-blue-600 bg-gray-200 p-2 rounded-full "
              >
                <FaXTwitter />
              </a>
              <p className="ml-5 pt-3 font-mono "> Let's Connect!!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
