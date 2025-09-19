import React from "react";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white">
      <nav className="flex gap-33 ">
        <div>
          <img
            className="cursor-pointer"
            src="public/images/ICTlogo.jpg"
            alt=""
            width={180}
          />
        </div>
        <ul className="flex items-center gap-5 font-bold text-[14px]">
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">WHOM</li>
          <li className="cursor-pointer">PROCESS</li>
          <li className="cursor-pointer">COURSES</li>
          <li className="cursor-pointer">RECOGNITIONS</li>
          <li className="cursor-pointer">DATES</li>
          <li className="cursor-pointer">WINNERS</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};
