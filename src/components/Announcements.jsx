import React from "react";

export const Announcements = () => {
  return (
    <div className="py-15 flex justify-center">
      <div className="max-w-[1000px] flex items-center gap-5">
        <div className="w-[70%]">
          <a
            className="text-red-600 underline font-bold text-[17px]"
            href="http://"
          >
            Learnathon 2025
          </a>
          <h1 className="text-4xl font-bold mb-5">About Learnathon 2025</h1>
          <p className="mb-2.5 mt-5 text-[17px]">
            ICT Academy in association with its industry partners launching the
            8th edition of “Learnathon 2025”. It is a self-learning initiative
            for higher education students to build their foundational IT skills
            online.
          </p>
          <p className="mb-2.5 text-[17px]">
            Since 2018, through Learnathon, ICT Academy has inculcated
            self-learning among college students and benefitted lakhs.
          </p>
          <p className="mb-2.5 text-[17px]">
            This year, we're excited to bring together leading experts,
            enthusiastic learners, and cutting-edge technologies to explore the
            future of digital transformation. Enhance your skills to stay ahead
            in the rapidly evolving landscape.
          </p>
          <p className="text-[17px]">
            Learnathon 2025 promises an unforgettable learning experience.
          </p>
        </div>
        <div>
          <img
            className="border-5 border-gray-200"
            src="images/announcement.webp"
            alt=""
            width={600}
          />
        </div>
      </div>
    </div>
  );
};
