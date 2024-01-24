import React from "react";
import img from "../assets/contact.jpg";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import img1 from "../assets/wave-haikei (1).svg";
function Contact() {
  return (
    <>
      <div className="">
        <img src={img1} alt="" className=" w-[100vw] " />
      </div>
      <div className=" bg-[#03131A] font-serif text-white ">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col space-y-6 md:flex-row md:space-x-40 md:space-y-0 bg-[#092327] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-md hover:shadow-white ">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold  text-4xl tracking-wide">
                  {" "}
                  Contact Me
                </h1>
                <p className="pt-2 text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <FaPhoneVolume className="text-xl" />
                  <span>+254791435147</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <TfiEmail className="text-xl" />
                  <span>hawamaria33@gmail.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <SlLocationPin className="text-xl" />
                  <span>Nairobi,Kenya</span>
                </div>
              </div>
              {/* <div></div> */}
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-2xl shadow-black p-8 text-gray-600 md:w-90">
                <form
                  action="
                "
                  className="flex flex-col space-y-4"
                >
                  <div>
                    <label htmlFor="" className="text-sm"></label> Your name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 ring-1 ring-gray-500 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-800 "
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm"></label> Email
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="mt-2 ring-1 ring-gray-500 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-800 "
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm"></label> Message
                    <textarea
                      placeholder="Message"
                      className="mt-2 ring-1 ring-gray-500 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-800 "
                      rows="4"
                    ></textarea>
                  </div>
                  <button className="inline-bock self-end bg-gray-900 font-bold rounded-lg px-6 py-2 text-sm uppercase">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
