import React from "react";
import Projects from "./Projects";

import img from "../assets/html-removebg-preview.png";
import img1 from "../assets/flask-removebg-preview.png";
import img2 from "../assets/css-removebg-preview.png";
import img3 from "../assets/py-removebg-preview.png";
import img4 from "../assets/sql-removebg-preview.png";
import img5 from "../assets/react-removebg-preview.png";
import img6 from "../assets/tail-removebg-preview (2).png";
import img7 from "../assets/js-removebg-preview.png";
import cv from "../assets/My Cv.pdf";
import { IoMdDownload } from "react-icons/io";

function About() {
  return (
    <>
      <div className="bg-[#092327]  ">
        {/* <svg viewBox="0 0 50 50 ">

        <rect x={10} y={10} width={20} height={20} fill="white" stroke="blue" />
        </svg> */}
        <div className="flex justify-center    animate-flip-down animate-duration-1000  animate-ease-in  ">
          <div className="w-full    mt-10  ">
            <p className=" text-center font-bold  text-6xl font-mono mt-5  text-white">
              About me
            </p>
            <p className="text-center px-10 pb-5 mt-5 text-gray-100 text-xl ">
              Hello there! I'm Hawa Maria, a passionate web developer with a
              keen eye for design and a love for turning ideas into digital
              realities.
              <br />
              Beyond coding, I'm passionate about staying updated on the latest
              industry trends and exploring how technology can positively impact
              society.
              <br />
              As a recent graduate, I am eager to kickstart my career in
              software engineering and contribute my skills to real-world
              projects. I am excited about the opportunity to learn and grow as
              part of a dynamic and collaborative team. I'm actively seeking
              opportunities to apply my skills and contribute to innovative
              projects.
            </p>
            <div className="flex justify-center">
            <div className="text-white text-center p-3 bg-[#03131A] sm:w-1/4 mb-2 rounded-full hover:bg-gray-700">
                <a
                  href={cv}
                  download="My_CV.pdf"
                  className="flex justify-center font-mono font-bold "
                >
                  Download CV <IoMdDownload className=" ml-2 text-2xl " />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white  ">
          <div className="text-center text-[2.5em] p-10 underline font-mono">
            <p>My Skills</p>
          </div>
          <div className=" animate-pulse  ml-10 grid grid-cols-2 md:grid-cols-4 text-center font-mono tracking-wider font-bold text-xl  ">
            <div className="containerr w-[20vw]  ">
              <div className="flexing">
                <img src={img} alt="" className="w-[8vw] " />
              </div>
              <div className="mt-5">HTML</div>
            </div>
            <div className="custom-shadow w-[20vw] ">
              <div className="flexing">
                <img src={img2} alt="" className="w-[8vw] " />
              </div>
              <div className="mt-5">CSS</div>
            </div>
            <div className="containerr w-[20vw] ">
              <div className="flexing">
                {" "}
                <img src={img7} alt="" className=" " />
              </div>
              <div className="">JavaScript</div>
            </div>
            <div className="custom-shadow w-[20vw] ">
              <div className="flexing">
                <img src={img3} alt="" className=" " />
              </div>
              <div className="">Python</div>
            </div>
            <div className="containerr w-[20vw] ">
              <div className="flexing">
                {" "}
                <img src={img5} alt="" className="w-[8vw] mt-7 animate-spin " />
              </div>
              <div className="mt-5">React</div>
            </div>
            <div className="custom-shadow w-[20vw] ">
              <div className="flexing">
                {" "}
                <img src={img6} alt="" className=" w-[10vw] " />
              </div>
              <div className="">TailWind</div>
            </div>

            <div className="containerr w-[20vw] ">
              <div className="flexing">
                <img src={img4} alt="" className="w-[10vw] " />
              </div>
              <div className="">SQL</div>
            </div>
            <div className="custom-shadow w-[20vw] ">
              <div className="flexing">
                <img src={img1} alt="" className="w-[10vw] " />
              </div>
              <div className="">Flask</div>
            </div>
          </div>
        </div>
        <Projects/>
        <div className="pt-10"></div>
    

      </div>
    </>
  );
}

export default About;
