import React from "react";

export const Content = () => {
  return (
    <div>
      <div className="bg-[url('images/service-bg2.jpg')] bg-cover bg-center bg-fixed h-screen">
        <div className="top h-[100%] flex justify-center items-center gap-10">
          <div className="img flex gap-6">
            <img
              className="border-8 border-white rounded-[2px]"
              src="images/wcu_1-2.jpg"
              alt=""
              width={250}
            />
            <img
              className="border-8 border-white rounded-[2px]"
              src="images/wcu_1-3.jpg"
              alt=""
              width={250}
            />
          </div>
          <div className="w-[39%] text-white">
            <a className="text-[18px] underline" href="http://">
              Learnathon 2025
            </a>
            <h1 className="text-5xl font-bold mb-5">Who Can Attend?</h1>
            <h4 className="text-[18px]">
              1st Year, 2nd Year & 3rd year students from engineering, science,
              commerce and management institutions across India.
            </h4>
          </div>
        </div>
        <div className="bg-[#05255f] w-full">
          <img
            className="object-fill h-75 w-full"
            src="images/video-shape.png"
            alt=""
          />
        </div>
      </div>
      <div className=" w-full h-75 flex justify-center items-center text-center relative">
        <div className="">
          <a
            className="text-[18px] underline text-red-600 font-bold"
            href="http://"
          >
            Learnathon 2025
          </a>
          <h1 className="text-5xl text-white font-bold mb-5 mt-1">
            Learnathon Process
          </h1>
        </div>
      </div>
    </div>
  );
};
