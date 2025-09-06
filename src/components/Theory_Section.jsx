import React from "react";

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

export const Theory_Section = () => {
  return (
    <div className="relative">
      <div className="bg-[#05255f] w-full">
        <img
          className="object-fill h-75 w-full"
          src="images/video-shape.png"
          alt=""
        />
      </div>
      <div className=" w-full h-75 flex justify-center items-center text-center absolute top-0">
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

      <div className="bg-[url('images/bg2.png')]">
        {theoryData.map((item, index) => (
          <div key={index} className="text-center max-w-[800px] m-auto">
            <div className="py-5 bg-stone-100 rounded-[2px] mb-10 ">
              <div className="mx-20">
                <div className="font-bold text-red-600 mb-1.5">
                  {item.stage}
                </div>
                <h2 className="text-lg mb-2">{item.desc}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
