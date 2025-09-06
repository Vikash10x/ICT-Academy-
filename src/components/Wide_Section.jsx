import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

export const Wide_Section = () => {
  return (
    <div className="relative ">
      <div className="bg-[#f4f4f6] w-[45%] h-screen"></div>

      <div className="flex gap-5 absolute top-32 justify-center">
        <div>
          <img
            className="border-11 border-[#ffffff] shadow-[0_3px_8px_rgba(0,0,0,0.5)]"
            src="images/why_choose_img.jpg"
            alt=""
            width={550}
          />
        </div>

        <div className="w-[38%]">
          <div>
            <a
              className="text-[18px] underline text-red-600 font-bold"
              href="#"
            >
              Learnathon 2025
            </a>
            <h1 className="text-5xl text-[#05255f] font-bold mb-4">Support</h1>
          </div>

          <div className="space-y-1">
            <div className="flex items-center ">
              <div className="px-6 mx-1">
                <AiOutlineDoubleRight className="text-red-500" />
              </div>
              <div className="text-[20px]">
                24/7 support from our relationship team for any queries
              </div>
            </div>

            <div className="flex items-center">
              <div className="px-6 mx-1">
                <AiOutlineDoubleRight className="text-red-500" />
              </div>
              <div className="text-[20px]">
                Weekly updates on student course completion
              </div>
            </div>

            <div className="flex items-center">
              <div className="px-6 mx-1">
                <AiOutlineDoubleRight className="text-red-500" />
              </div>
              <div className="text-[20px]">
                Orientation sessions conducted by each partner for coordinators
                and students
              </div>
            </div>

            <div className="flex items-center">
              <div className="px-6 mx-1">
                <AiOutlineDoubleRight className="text-red-500" />
              </div>
              <div className="text-[20px]">
                Exclusive WhatsApp group for all SPOCs to exchange best
                practices
              </div>
            </div>

            <div className="flex items-center">
              <div className="px-6 mx-1">
                <AiOutlineDoubleRight className="text-red-500" />
              </div>
              <div className="text-[20px]">
                Dashboard access provided to institutions for real-time progress
                monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
