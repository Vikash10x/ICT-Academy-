import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="h-[1px] bg-gray-600 w-full"></div>

      <div className="flex items-center justify-around gap-25 bg-[#05255f] text-white pt-3 pb-5">
        <div className="text-[17px] px-1">
          © Copyright 2025. All Rights Reserved by{" "}
          <span className="cursor-pointer hover:text-red-500 duration-500 transition-colors">
            ICT Academy
          </span>
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
