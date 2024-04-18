import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
function HomeHeroSec() {
  return (
    <>
      <div
        className={`w-full relative h-[85vh] bg-cover bg-[url('/src/assets/images/mainimg.jpg')]`}>
        <div className="max-w-[1440px] text-white mx-auto w-full h-full flex flex-col justify-center items-center gap-4">
          <p className="uppercase text-center text-[18px] font-semibold tracking-[6px] text-[#9ED220]">
            Building Beyond Boundaries
          </p>
          <h1 className="max-w-[800px] text-[90px] text-center font-extrabold leading-[88px]">
            We are your trusted <span className="text-[#9ED220]">Builder</span>
          </h1>
          <p className="max-w-[780px] text-center text-[17px] tracking-wider mt-6 leading-relaxed">
            KHI Tameerat your trusted partner in bringing your dreams to life.
            Weather you are planning a new construction project, remodeling an
            existing space or simply need accurate cost estimation, KHI Tameraat
            have got you covered. With expertise in every aspect of the building
            process, from concept to completion, we make your vision a reality.
          </p>
          <span className="space-x-4 mt-6 font-semibold">
            <button className="bg-[#9ed220] group px-[14px] py-[8px] rounded-[4px]">
              Get in touch
              <span>
                <FaLongArrowAltRight className="inline ml-1 group-hover:translate-x-[2px] transition-all duration-500" />
              </span>
            </button>
            <button className="bg-[#ffffff54] border  px-[14px] py-[8px] group rounded-[4px]">
              Get in touch
              <span>
                <FaLongArrowAltRight className="inline ml-1 group-hover:translate-x-[2px] transition-all duration-500" />
              </span>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default HomeHeroSec;
