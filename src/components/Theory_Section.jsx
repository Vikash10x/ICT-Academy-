import React from "react";

export const Theory_Section = ({ stage, desc }) => {
  return (
    <div className="bg-[url('images/bg2.png')]">
      <div className="text-center max-w-[800px] m-auto">
        <div className="py-5 bg-stone-100 rounded-[2px] m-10">
          <div className="mx-20">
            <div className="font-bold text-red-600 mb-1.5">{stage}</div>
            <h2 className="text-lg mb-2">{desc}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
