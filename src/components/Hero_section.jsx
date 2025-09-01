import React from "react";

export const Hero_section = () => {
  return (
    <div className="bg-[url('./images/slider1.jpg')] bg-cover h-screen ">
      <div className="flex items-center  justify-center h-[100%]">
        <div className="mt-20">
          <div className="flex justify-center mb-2">
            <img src="public/images/Learnathon_Logo.png" alt="" width={380} />
          </div>
          <div className="text-center">
            <h2 className="text-5xl text-white font-bold mb-5">
              Passion Meets Progress
            </h2>
            <h4 className="text-white text-2xl mb-5">
              ONLINE SELF-LEARNING - 8TH EDITION
            </h4>
          </div>
          <div className="btn">
            <button className="bg-red-500 py-2 px-5 cursor-pointer rounded-[3px] text-white hover:bg-white hover:text-black m-0.5 duration-700">
              Institution Registration
            </button>
            <button className="bg-red-500 py-2 px-5 cursor-pointer rounded-[3px] text-white hover:bg-white hover:text-black m-0.5 duration-700">
              Faculty Registration
            </button>
            <button className="bg-red-500 py-2 px-5 cursor-pointer rounded-[3px] text-white hover:bg-white hover:text-black m-0.5 duration-700">
              Student Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
