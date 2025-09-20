import React from "react";

export const Content = () => {
  return (
    <div>
      <div className="bg-[url('/images/service-bg2.jpg')] bg-cover bg-center bg-fixed h-screen">
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
      </div>
    </div>
  );
};
