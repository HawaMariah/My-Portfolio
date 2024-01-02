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
      <div className="bg-[#03131A] h-screen grid grid-col-1  lg:grid-cols-2 min-w-fit ">
        <div className=" flex items-center justify-center animate-fade-right animate-duration-1000  animate-ease-in  ">
          <div className="relative">
            <img
              src={img}
              alt=""
              className="rounded-full  opacity-40 w-[40vw] border-b  "
            />
          </div>
          <div className="absolute opacity-30 bottom-28  blur-sm  ">
            <img src={img1} alt="" className="w-[26vw] " />
          </div>
        </div>

        <div className="flex items-center  bg-[#03131A] ">
          <div className=" text-white  animate-fade-left animate-duration-1000 animate-ease-in border-white  border w-auto h-auto lg:w-[40vw] p-10 containerr bg-gradient-to-b from-[#03131A] to-gray-500">
            <p className="uppercase text-2xl md:text-4xl mb-4 font-mono font-bold">
              Hi There,
            </p>
            <p className=" uppercase text-4xl md:text-6xl mb-4  font-mono">
              I'm Hawa Maria,
            </p>
            <div className="md:font-bold text-xl lg:text-4xl font-serif  tracking-wider">
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
                className="ml-3  hover:text-pink-700 p-2 rounded-full border-2 "
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/hawa-maria-338511288/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4  hover:text-blue-700 border-2 p-2 rounded-full"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/hawa_maria1?t=vaOHYqU3G0hRiiNZB1R0ag&s=09/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4  hover:text-blue-600 border-2 p-2 rounded-full "
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
