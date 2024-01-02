import React from "react";
import img from "../assets/contact.jpg";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

function Contact() {
  return (
    <div className="bg-[rgb(3,19,26)] font-serif h-[100vh] text-white relative ">
      <div className="">
        <div className="absolute bg-gray-900 top-10 left-10 p-10">
          <h1 className="font-bold text-6xl tracking-wider">Contact Me:</h1>
          <p className="text-2xl flex mt-10">
            <TfiEmail className="mr-5" /> hawamaria33@gmail.com
          </p>
          <p className="text-2xl flex mt-10">
            <FaPhoneVolume className="mr-5" /> +2547914235147
          </p>
          <p className="text-2xl flex mt-10">
            <SlLocationPin className="mr-5" />Nairobi,Kenya
          </p>
        </div>
        <div className="">
          <img
            src={img}
            alt=""
            className="w-[60vw] h-[90vh] object-cover rounded opacity-30 ml-40  "
          />
        </div>
      </div>
      <div className="  absolute top-40 right-80 w-[40vw] bg-[#03131A]  p-10 containerr border-2 border-gray-800 ">
        <h1 className="font-bold text-4xl ">Send Message</h1>
        <form action="#" className="mt-10">
          <div className="flex">
            <div className=" text-xl mb-10">
              <label htmlFor="name"> Full Name:</label>
              <br />
              <input
                type="text"
                name="name"
                className="mt-3 bg-transparent px-0 py-1 border-b w-72 border-white focus:outline-none focus:border-gray-500"
                placeholder="Jane  Doe"
                required
              />
            </div>
            <div className="mb-10 ml-10 text-xl">
              <label htmlFor="email">E-mail:</label>
              <br />
              <input
                type="email"
                name="email"
                className="mt-3 bg-transparent px-0 py-1 w-72 border-b border-white focus:outline-none focus:border-gray-500"
                placeholder="example@youremail.com"
                required
              />
            </div>
          </div>
          <div className="text-xl">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              name="message"
              type="text"
              cols="55"
              placeholder="Hi there ..."
              className="mt-3 bg-transparent px-0 py-1 border-b border-white focus:outline-none focus:border-gray-500"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="py-2 px-5 bg-slate-800 mt-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
