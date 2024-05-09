import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
function HomeHeroSec() {
  return (
    <>
      <div
        className={`w-full h-[85vh] bg-cover bg-[url('/src/assets/images/mainimg.jpg')]`}>
        <div className="max-w-[1440px] px-[20px] relative text-white mx-auto w-full h-full flex flex-col justify-center items-center">
          <p className="uppercase text-center md:text-[18px] text-[12px] font-semibold tracking-[4px] md:tracking-[6px] text-[#9dd221]">
            Building Beyond Boundaries
          </p>
          <h1 className="max-w-[800px] text-[56px] md:text-[96px] text-center font-extrabold leading-[56px] md:leading-[88px]">
            We are your trusted <span className="text-[#9dd221]">Builder</span>
          </h1>
          <p className="max-w-[780px] text-[#cccccc] text-center text-[14px] md:text-[16px] tracking-wider mt-2 md:mt-12 leading-snug">
            KHI Tameraat your trusted partner in bringing your dreams to life.
            Weather you are planning a new construction project, remodeling an
            existing space or simply need accurate cost estimation, KHI Tameraat
            have got you covered. With expertise in every aspect of the building
            process, from concept to completion, we make your vision a reality.
          </p>
          <span className="flex flex-col w-full justify-center md:flex-row gap-2 md:space-x-4 mt-4 md:mt-12 font-semibold">
            <button className="bg-[#9dd221] text-[16px] group px-[20px] text-[#333333] py-[8px] rounded-[4px]">
              Get in Touch
              <span>
                <FaLongArrowAltRight className="inline ml-[4px] mb-[2px] group-hover:translate-x-[3px] transition-all duration-500" />
              </span>
            </button>
            <button className="bg-white/20 border text-[16px] px-[20px] py-[8px] group rounded-[4px]">
              Learn More
              <span>
                <FaLongArrowAltRight className="inline ml-[4px] group-hover:translate-x-[3px] transition-all duration-500" />
              </span>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default HomeHeroSec;
