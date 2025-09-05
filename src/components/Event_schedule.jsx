import React from "react";

const eventData = [
  {
    time: "01 August 2025",
    desc: "Institution Registration Open",
  },
  {
    time: "30 August 2025",
    desc: "Institution Registration Closes",
  },
  {
    time: "01 August 2025",
    desc: "Student Registration Open",
  },
  {
    time: "31 August 2025",
    desc: "Student Registration Closes",
  },
  {
    time: "31 August 2025",
    desc: "Program Virtual Launch",
  },
  {
    time: "01 September 2025",
    desc: "Self learning Start Date",
  },
  {
    time: "30 September 2025",
    desc: "Self learning End Date",
  },
  {
    time: "31 October 2025",
    desc: "Announcement of Final Results",
  },
];

export const Event_schedule = () => {
  return (
    <div className="relative h-screen flex">
      <div className="w-1/2 ml-auto bg-[url('/images/bg8.jpg')] bg-cover bg-center bg-fixed"></div>

      <div className="absolute inset-0 flex">
        <div className="flex flex-col items-center justify-center p-10">
          <div className="text-center mb-5">
            <a
              className="text-[18px] underline text-red-600 font-bold"
              href="#"
            >
              Learnathon 2025
            </a>
            <h1 className="text-5xl text-[#05255f] font-bold mt-1">
              Important Dates
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {eventData.map((item, index) => (
              <div
                key={index}
                className="bg-[#05255f]/90 w-[320px] flex items-center px-6 py-8 rounded-md shadow-lg"
              >
                <div className="text-white">
                  <p className="text-[17px] mb-2">{item.time}</p>
                  <p className="text-[22px] font-bold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
