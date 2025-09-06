import React from "react";

export const Last_Section = () => {
  return (
    <div className="relative mt-20">
      <div className="h-43"></div>
      <div className="bg-[#05255f] h-[340px]"></div>

      <div className="absolute -top-8 w-full flex justify-center">
        <div className="relative flex justify-center items-center bg-black/80">
          <img
            className="w-280 h-100 object-cover "
            src="images/contact.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute w-75 text-[#fff] text-center space-y-2 p-1">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <h4 className="text-[1.7rem]">ICT Academy</h4>
            <p className="text-[16px]">
              Module No E6 -03, Block - E (6th Floor) IITM Research Park Kanagam
              Road, Chennai - 600 113. Tamil Nadu
            </p>
            <p className="text-[16px]">
              Email: learnathon@ictacademy.in Phone: T 044 6928 6800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
