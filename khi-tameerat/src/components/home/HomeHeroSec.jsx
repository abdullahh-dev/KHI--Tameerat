import React from 'react';
import logo from '../../assets/images/logo/KHI-Green.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
function HomeHeroSec() {
  return (
    <>
      <div
        className={`w-full relative h-[85vh] bg-cover bg-[url('/src/assets/images/mainimg.jpg')]`}>
        <img
          src={logo}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-45 brightness-[0.43]"
          alt=""
        />
        <div className="max-w-[1440px] px-[20px] relative text-white mx-auto w-full h-full flex flex-col justify-center items-center">
          <p className="uppercase text-center md:text-[18px] text-[12px] font-semibold tracking-[4px] md:tracking-[6px] text-[#9dd221]">
            Building Beyond Boundaries
          </p>
          <h1 className="max-w-[800px] text-[56px] md:text-[90px] text-center font-extrabold leading-[56px] md:leading-[88px]">
            We are your trusted <span className="text-[#9dd221]">Builder</span>
          </h1>
          <p className="max-w-[780px] text-center text-[12px] md:text-[17px] tracking-wider mt-2 md:mt-6 leading-relaxed">
            KHI Tameerat your trusted partner in bringing your dreams to life.
            Weather you are planning a new construction project, remodeling an
            existing space or simply need accurate cost estimation, KHI Tameraat
            have got you covered. With expertise in every aspect of the building
            process, from concept to completion, we make your vision a reality.
          </p>
          <span className="flex flex-col w-full justify-center md:flex-row gap-4 md:space-x-4 mt-3 md:mt-6 font-semibold">
            <button className="bg-[#9dd221] group px-[14px] py-[8px] rounded-[4px]">
              Get in touch
              <span>
                <FaLongArrowAltRight className="inline ml-1 group-hover:translate-x-[2px] transition-all duration-500" />
              </span>
            </button>
            <button className="bg-[#ffffff54] border px-[14px] py-[8px] group rounded-[4px]">
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
