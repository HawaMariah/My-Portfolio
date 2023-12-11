import img from "../assets/bat.gif"


function Home() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen ">
        <div className="bg-gray-100 flex justify-end items-center  animate-fade-up animate-duration-1000 animate-ease-in">
          <div className="bg-white w-[40vw] h-[80vh]  custom-shadow  ">
            <div className="text-[#B79883] bg-[#f7f0f5] p-10 uppercase font-serif font-bold text-2xl h-[5.5rem] tracking-wider  ">
              Hawa Maria
            </div>
            <div className="uppercase text-[#B79883] font-serif ">
              <div className=" text-8xl mt-24 ml-14">Welcome</div>
              <div className="text-6xl mt-28 text-end mr-20">To</div>
              <div class=" border-[#B79883] border-2 shadow-2xl rounded-md p-10 max-w-sm  ml-14 animate-flip-down mt-10 ">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-[#B79883]  h-12 w-12 "></div>
                  <div class="flex-1 space-y-5 py-1">
                    <div class="h-2 bg-[#B79883]  rounded"></div>
                    <div class="space-y-5">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-[#B79883]  rounded col-span-2"></div>
                        <div class="h-2 bg-[#B79883]  rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-[#B79883]  rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#B79883] flex items-center  ">
          <div className="bg-[#B79883] w-[40vw] h-[80vh]   container animate-fade-up animate-duration-1000 animate-ease-in ">
            <div className="text-[#B79883] bg-[#f7f0f5] p-10 flex justify-around uppercase  h-[5.5rem] ">
              <div className=" border-[#B79883] border-t-4 hover:border-t-8 w-64 text-center font-serif font-semibold tracking-wider">
                Explore
              </div>
              <div className="border-gray-300 border-t-4 hover:border-t-8 w-64 text-center font-serif font-semibold tracking-wider">
                About
              </div>
            </div>

            <div className="uppercase text-white font-serif ">
              <div className="text-end mt-24 mr-24 text-8xl">world</div>
              <div className="mt-28 ml-20 text-6xl">my</div>
              <div className="overflow-hidden mt-10 ">
            <img
              src={img}
              alt=""
              className="animate-moveRight"
            />
          </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
