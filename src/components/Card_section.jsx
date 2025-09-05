import React from "react";
const cardData = [
  {
    img: "/images/1.jpg",
    list: [
      {
        title: "Learn AI and Gen AI basics",
        time: "1.5 Hours",
      },
      {
        title: "Get started with Microsoft Copilot",
        time: "2.7 Hours",
      },
      { title: "Describe the concepts of cybersecurity", time: "2.5 Hours" },
    ],
  },
  {
    img: "images/2.jpg",
    list: [
      {
        title: "Introduction to BIM",
        time: "5 Hours",
      },
    ],
  },
  {
    img: "images/3.jpg",
    list: [
      {
        title: "AWS Academy Generative AI Foundations",
        time: "15 Hours",
      },
    ],
  },
  {
    img: "images/4.jpg",
    list: [
      {
        title: "Certified Essentials Automation Professional",
        time: "10 Hours",
      },
    ],
  },
  {
    img: "images/5.jpg",
    list: [
      {
        title: "Configure Process Copilots",
        time: "1.2 Hours",
      },
      {
        title: "Accelerate Process Analysis with Insight Explorer",
        time: "1 Hours",
      },
      {
        title: "Maximize Data Value with AI Annotation Builde",
        time: "1.1 Hours",
      },
    ],
  },
  {
    img: "images/6.jpg",
    list: [
      {
        title: "AI-ML",
        time: "7 Hours",
      },
      {
        title: "Getting started with the Gemini API and Web apps",
        time: "5.5 Hours",
      },
    ],
  },
  {
    img: "images/7.jpg",
    list: [
      {
        title: "AI Foundation for You: Learn Statistics, ML and DL",
        time: "3.5 Hours",
      },
    ],
  },
  {
    img: "images/8.jpg",
    list: [
      {
        title: "MongoDB and AI Fundamentals",
        time: "6 Hours",
      },
    ],
  },
  {
    img: "images/9.jpg",
    list: [
      {
        title: "Archicad BIM Essentials",
        time: "8 Hours",
      },
    ],
  },
  {
    img: "images/10.jpg",
    list: [
      {
        title: "Solve it with SQL",
        time: "8 Hours",
      },
    ],
  },
  {
    img: "images/11.jpg",
    list: [
      {
        title: "Qlik Skills",
        time: "5 Hours",
      },
    ],
  },
  {
    img: "images/12.jpg",
    list: [
      {
        title: "Salesforce Agentforce Champion",
        time: "9.40 Hours",
      },
      {
        title: "Salesforce Agentforce Innovator",
        time: "7.3 Hours",
      },
    ],
  },
  {
    img: "images/13.jpg",
    list: [
      {
        title: "Agentic Automation",
        time: "12 Hours",
      },
    ],
  },
  {
    img: "images/14.jpg",
    list: [
      {
        title: "Self-Presentation",
        time: "3 Hours",
      },
      {
        title: "Problem Solving and Innovation",
        time: "4 Hours",
      },
      {
        title: "Customer Centricity",
        time: "4 Hours",
      },
      {
        title: "Financial Literacy",
        time: "4 Hours",
      },
    ],
  },
];

export const Card_section = ({}) => {
  return (
    <div className="bg-[url('images/bg1.jpg')] bg-cover bg-fixed py-15">
      <div className="text-center pb-3">
        {" "}
        <a
          className="text-[18px] underline text-red-600 font-bold"
          href="http://"
        >
          Learnathon 2025
        </a>
        <h1 className="text-5xl text-white font-bold mb-5 mt-1">
          Partners & Course Details
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5 h-[50%]">
        {cardData.map((item, index) => (
          <div
            key={index}
            className=" bg-white w-83 flex items-center justify-center px-4 rounded-[3px]"
          >
            <div className="">
              <div className="flex justify-center">
                <img src={item.img} alt="" />
              </div>
              <div className="text-center mb-6">
                {item.list.map((lists, index) => (
                  <div key={index} className=" ">
                    <p className="text-[17px] text-[#666666]">{lists.title}</p>
                    <p className="text-[#f14242]">{lists.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
