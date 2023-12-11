import React from "react";
import img from "../assets/hawaa.png";
import img1 from "../assets/ht.png";
import { TypeAnimation } from "react-type-animation";

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
            <img src={img1} alt="" className="w-[26vw]"/>
          </div>
        </div>

        <div className="flex items-center  ">
          <div className=" text-white  animate-fade-left animate-duration-1000 animate-ease-in  ">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
