import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Top_Section = () => {
  return (
    <div>
      <div className="nav flex items-center justify-around gap-50 bg-[#05255f] text-white ">
        <div className="flex items-center p-2 cursor-pointer">
          <MdOutlineMail className="text-2xl" />
          <div className="text-lg px-1 hover:text-red-600 transition-colors duration-500">
            learnathon@ictacademy.in
          </div>
        </div>
        <div className="flex gap-6">
          <li className="list-none">
            <div className="w-11 h-11 flex items-center justify-center rounded-[5px] hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
              <FaFacebookF />
            </div>
          </li>

          <li className="list-none">
            <div className="w-11 h-11 flex items-center justify-center rounded-[5px] hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
              <FaSquareXTwitter />
            </div>
          </li>

          <li className="list-none">
            <div className="w-11 h-11 flex items-center justify-center rounded-[5px] hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </li>

          <li className="list-none">
            <div className="w-11 h-11 flex items-center justify-center rounded-[5px] hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
              <FaYoutube />
            </div>
          </li>

          <li className="list-none">
            <div className="w-11 h-11 flex items-center justify-center rounded-[5px] hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
              <FaInstagram />
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
