import React from "react";

function Home() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen ">
        <div className="bg-[#f2f2f2] flex justify-end items-center  animate-fade-up animate-duration-2000 animate-ease-in">
          <div className="bg-white w-[40vw] h-[80vh]  custom-shadow  ">
            <div className="bg-[#f7f0f5] p-10 uppercase font-serif font-bold text-xl tracking-wider ">
              Hawa Maria
            </div>
          </div>
        </div>
        <div className="bg-[#b2967d] flex items-center  ">
          <div className="bg-[#b2967d] w-[40vw] h-[80vh]   container animate-fade-up animate-duration-2000 animate-ease-in ">
            <div className="bg-[#f7f0f5] p-10 flex justify-around uppercase ">
              <div className=" border-[#b2967d] border-t-4 w-64 text-center font-serif font-semibold tracking-wider">
                Explore
              </div>
              <div className="border-gray-300 border-t-4 w-64 text-center font-serif font-semibold tracking-wider">
                About
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
