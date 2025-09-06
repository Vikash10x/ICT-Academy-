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
import { Theory_Section } from "./components/Theory_Section";
import { Card_section } from "./components/Card_section";
import { Progress } from "./components/Progress";
import { Event_schedule } from "./components/Event_schedule";
import { Table_Section } from "./components/Table_Section";
import { Wide_Section } from "./components/Wide_Section";
import { Last_Section } from "./components/Last_Section";
import { Footer } from "./components/Footer";

const theoryData = [
  {
    stage: "Stage 1",
    desc: "Institutions and Students to register at the ICT Academy Learnathon 2025 Portal",
  },
  {
    stage: "Stage 2",
    desc: "Students receive Learnathon 2025 Learning Guide in registered email along with the learning Guidelines",
  },
  {
    stage: "Stage 3",
    desc: "Student start self-learning from 01st Aug 2025 and complete minimum 10 courses and maximum of 22 courses.",
  },
  {
    stage: "Stage 4",
    desc: "Students submit the certificates/credentials earned in minimum 10 courses to receive the ICT Academy Learnathon 2025 Certificate.",
  },
  {
    stage: "Stage 5",
    desc: "College SPOC can report back to the ICT Academy on their student's completion.",
  },
  {
    stage: "Stage 6",
    desc: "Success Students to receive Learnathon 2025 certificate and the Top Performing Institutions to receive Recognition.",
  },
];

function App() {
  return (
    <>
      <div className="">
        <div className="nav flex items-center justify-around gap-50 bg-[#05255f] text-white ">
          <div className="flex items-center p-2 cursor-pointer">
            <MdOutlineMail className="text-2xl" />
            <div className="text-lg px-1">learnathon@ictacademy.in</div>
          </div>
          <div className="">
            <ul className="flex p-2 gap-15">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaSquareXTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>

        <Navbar />
        <Hero_section />
        <Announcements />
        <Content />
        {theoryData.map((item, index) => (
          <Theory_Section key={index} stage={item.stage} desc={item.desc} />
        ))}
        <Card_section />

        <Progress />
        <Event_schedule />
        <Table_Section />
        <Wide_Section />
        <Last_Section />
        <Footer />
      </div>
    </>
  );
}

export default App;
