import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';
function HomeHeroSec() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden md:h-[90vh]">
      {/* Background Image */}
      <img
        src="/src/assets/images/bg-imageee1.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 max-w-[1440px] px-[10px] text-white mx-auto w-full h-full flex flex-col justify-center items-center">
        <div className="md:max-w-[800px] text-[36px] md:text-[80px] text-center font-extrabold leading-[40px] md:leading-[88px]">
          <h1>
            Crafting Dreams, We <span className="text-[#9dd221]">Build</span>,
          </h1>
          <h1>
            We <span className="text-[#9dd221]">Renovate</span>.
          </h1>
        </div>
        <p className="max-w-[790px] text-[#cccccc] text-center text-[12px] font-medium md:text-[16px] tracking-wider mt-2 md:mt-8 leading-snug">
          KHI Tameraat is your trusted partner in bringing your dreams to life.
          Whether you are planning a new construction project, remodeling an
          existing space, or simply need accurate cost estimation, KHI Tameraat
          has got you covered. With expertise in every aspect of the building
          process, from concept to completion, we make your vision a reality.
        </p>
        <div className="flex flex-col w-full justify-center md:flex-row gap-2 md:space-x-4 mt-4 md:mt-12 font-semibold">
          <Link to="/contact">
            <button className="bg-[#9dd221] text-[16px] group px-[20px] text-[#333333] py-[8px] rounded-[4px]">
              <div className="inline-block transition-all duration-500">
                Get in Touch
                <HiArrowLongRight
                  size={24}
                  className="inline-block group-hover:translate-x-[3px] transition-all duration-500 ml-[4px]"
                />
              </div>
            </button>
          </Link>
          <button className="bg-white/20 border text-[16px] px-[20px] py-[8px] group rounded-[4px]">
            <Link to="/about">
              Learn More
              <span>
                <HiArrowLongRight
                  size={24}
                  className="inline ml-[4px] group-hover:translate-x-[3px] transition-all duration-500"
                />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSec;
