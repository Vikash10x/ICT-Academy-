import React, { useRef } from "react";

export const Hero_section = () => {
  const first = useRef(null);

  const scrollLeft = () => {
    if (first.current) {
      first.current.scrollLeft -= first.current.clientWidth;
    }
  };

  const scrollRight = () => {
    if (first.current) {
      first.current.scrollLeft += first.current.clientWidth;
    }
  };

  const card = ["./images/slider1.jpg", "./images/slider2.jpg"];

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-5 z-10 text-white bg-black/50 px-3 py-2 rounded hover:bg-black duration-300 font-bold"
      >
        &lt;
      </button>

      <div
        ref={first}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth w-full h-screen snap-x snap-mandatory"
      >
        {card.map((item, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 snap-center bg-cover bg-center"
            style={{ backgroundImage: `url(${item})` }}
          >
            <div className="flex items-center justify-center h-full bg-black/50">
              <div className="mt-20 text-center">
                <div className="flex justify-center mb-2">
                  <img src="/images/Learnathon_Logo.png" alt="" width={380} />
                </div>

                <h2 className="text-5xl text-white font-bold mb-5">
                  Passion Meets Progress
                </h2>
                <h4 className="text-white text-2xl mb-5">
                  ONLINE SELF-LEARNING - 8TH EDITION
                </h4>

                <div className="btn">
                  <button className="bg-red-500 py-2 px-5 cursor-pointer rounded-[3px] text-white hover:bg-white hover:text-black m-0.5 duration-700">
                    Institution Registration
                  </button>
                  <button className="bg-red-500 py-2 px-5 cursor-pointer rounded-[3px] text-white hover:bg-white hover:text-black m-0.5 duration-700">
                    Faculty Registration
                  </button>
                  <button className="bg-red-500 py-2 px-5 cursor-pointer rounded-[3px] text-white hover:bg-white hover:text-black m-0.5 duration-700">
                    Student Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-5 z-10 text-white bg-black/50 px-3 py-2 rounded hover:bg-black duration-300 font-bold"
      >
        &gt;
      </button>
    </div>
  );
};
