import React from 'react';
import constructionImg from '../../assets/images/services-media/construction.png';
import estimationImg from '../../assets/images/services-media/estimation.png';
import renovationImg from '../../assets/images/services-media/renovation.png';
function HServicesSec() {
  return (
    <div className="max-w-[1440px] m-auto mt-[110px]">
      <span className="flex justify-center">
        <h1 className="px-[28px]  py-[8px] bg-[#323232] rounded-full uppercase text-[18px] font-semibold tracking-[5px] text-[#9ED220]">
          Our Services
        </h1>
      </span>
      <h1 className="text-center mb-[90px] leading-tight mt-[32px] font-extrabold text-[40px] m-auto text-[#323232] max-w-[535px]">
        Excellence in construction and other services
      </h1>
      <div className="flex flex-col flex-wrap items-center gap-6  md:flex-row md:gap-[48px] md:justify-center ">
        <div className="w-[340px] group relative h-[410px]  cursor-pointer rounded-[2px]">
          <div className="absolute bottom-[-20px] group-hover:bottom-36 z-[99999] transition-all duration-1000 left-16 text-white">
            <h1 className="text-[36px] font-semibold">Construction</h1>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-700 ">
              <hr />
              <button className="border p-2 mt-4 text-[12px]">
                View Details
              </button>
            </span>
          </div>
          <div>
            <img
              className="h-full w-full group-hover:brightness-[0.6] transition-all duration-1000 brightness-[0.31] object-contain"
              src={constructionImg}
              alt="construction"
            />
          </div>
        </div>
        <div className="max-w-[340px] relative h-[410px] rounded-[2px]">
          <img
            className="h-full brightness-[0.5] object-contain"
            src={estimationImg}
            alt="estimation"
          />
        </div>

        <div className="max-w-[340px] h-[410px] rounded-[2px]">
          <img
            className="h-full object-contain"
            src={renovationImg}
            alt="renovation"
          />
        </div>
      </div>
    </div>
  );
}

export default HServicesSec;
