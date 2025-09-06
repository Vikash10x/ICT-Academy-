import React from "react";

export const Progress = () => {
  return (
    <div className="my-15 flex items-center">
      <div className="relative">
        <img
          className="object-cover -ml-35"
          src="images/4_1.jpg"
          alt=""
          width={1100}
        />
      </div>

      <div className="bg-[#05255f] w-[49%] px-27 py-18 h-[] absolute ml-[50%]">
        <a
          className="text-[18px] underline text-red-600 font-bold"
          href="http://"
        >
          Learnathon 2025
        </a>
        <h1 className="text-5xl text-white font-bold mb-5 mt-1">
          Recognitions
        </h1>

        <div className="flex items-center gap-2 mb-10">
          <img src="images/i1.png" alt="" width={75} />
          <p className="text-white text-[18px]">
            National level, State level and Institutional level recognition for
            Institutions & Coordinators
          </p>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <img src="images/i2.png" alt="" width={75} />
          <p className="text-white text-[18px]">
            Institutions will be recognized only upon 200 students completing
            the learning
          </p>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <img src="images/i3.png" alt="" width={75} />
          <p className="text-white text-[18px]">
            Every student will get a certificate on completing a minimum of 10
            courses each
          </p>
        </div>
      </div>
    </div>
  );
};
