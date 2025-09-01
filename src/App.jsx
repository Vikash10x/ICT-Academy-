import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Navbar } from "./components/Navbar";
import { Hero_section } from "./components/Hero_section";
import { Announcements } from "./components/Announcements";
import { Content } from "./components/Content";

import "./App.css";
import { ImPower } from "react-icons/im";

function App() {
  return (
    <>
      <div className="content">
        <div className="nav flex items-center justify-around gap-50 bg-[#05255f] text-white ">
          <div className="flex items-center p-2 cursor-pointer">
            <MdOutlineMail className="text-2xl" />
            <div className="text-lg px-1">learnathon@ictacademy.in</div>
          </div>
          <div className="flex p-2 gap-15">
            <FaFacebookF className="hover:bg-blue-600" />
            <FaSquareXTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <Navbar />
        <Hero_section />
        <Announcements />
        <Content />
      </div>
    </>
  );
}

export default App;
