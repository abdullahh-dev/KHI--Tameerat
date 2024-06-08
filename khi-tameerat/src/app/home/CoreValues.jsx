import React from 'react';

import { HiBadgeCheck } from 'react-icons/hi';
import { FaHandshake, FaUserGraduate } from 'react-icons/fa';
import { MdEco } from 'react-icons/md';
import { IoIosPricetag, IoMdClock } from 'react-icons/io';
import { TbBulbFilled } from 'react-icons/tb';
import { FaUserGear } from 'react-icons/fa6';
function CoreValues() {
  return (
    <div className="md:mt-[110px] mt-[55px]">
      <span className="flex justify-center">
        <h1 className="uppercase text-[18px] font-bold tracking-[2px] text-[#9ED220]">
          Why Choose Us?
        </h1>
      </span>

      <h1 className="text-center md:mb-[90px] mb-[45px] px-[10px] leading-tight mt-[12px] md:mt-[32px] font-extrabold text-[24px] md:text-[40px] text-[#333333] mx-auto max-w-[535px]">
        Choose us for top-quality work, on time and on budget
      </h1>
      <div className=" bg-[#333333] w-full py-24">
        <div className="max-w-[1440px] flex justify-center items-center w-full h-full  mx-auto">
          <div className="flex justify-center gap-x-2 md:gap-x-12 gap-y-12 flex-wrap">
            <div className="flex flex-col w-[300px]  hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2  items-center">
              <span className="text-[#9ED220]">
                {' '}
                <FaUserGraduate size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Experienced Professionals
              </p>
            </div>
            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <HiBadgeCheck size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Quality Assurance
              </p>
            </div>
            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <FaHandshake size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Client Centric Approach
              </p>
            </div>
            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <MdEco size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Eco-Friendly Practices
              </p>
            </div>

            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <IoIosPricetag size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Budget Friendly Options
              </p>
            </div>
            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <TbBulbFilled size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Innovative Design
              </p>
            </div>
            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <IoMdClock size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Flexible Scheduling
              </p>
            </div>
            <div className="flex flex-col hover:bg-[#282828] space-y-4 rounded-md p-2 transition-all duration-500 gap-y-2 w-[300px] items-center">
              <span className="text-[#9ED220]">
                {' '}
                <FaUserGear size={60} />{' '}
              </span>
              <p className="text-white text-[18px] font-semibold">
                Personalized Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
