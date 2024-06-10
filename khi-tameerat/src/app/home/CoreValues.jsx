import React from 'react';

import { HiBadgeCheck } from 'react-icons/hi';
import { FaHandshake, FaUserGraduate } from 'react-icons/fa';
import { MdEco } from 'react-icons/md';
import { IoIosPricetag, IoMdClock } from 'react-icons/io';
import { TbBulbFilled } from 'react-icons/tb';
import { FaUserGear } from 'react-icons/fa6';
function CoreValues() {
  const coreValuesData = [
    {
      title: 'Experienced Professionals',
      icon: <FaUserGraduate />,
    },
    {
      title: 'Quality Assurance',
      icon: <HiBadgeCheck />,
    },
    {
      title: 'Client Centric Approach',
      icon: <FaHandshake />,
    },
    {
      title: 'Eco-Friendly Practices',
      icon: <FaUserGraduate />,
    },
    {
      title: 'Budget-Friendly Options',
      icon: <IoIosPricetag />,
    },
    {
      title: 'Innovative Design',
      icon: <TbBulbFilled />,
    },
    {
      title: 'Flexible Scheduling',
      icon: <IoMdClock />,
    },
    {
      title: 'Personalized Solutions',
      icon: <FaUserGear size={60} />,
    },
  ];

  return (
    <div className="md:mt-[160px] mt-[45px]">
      <span className="flex justify-center">
        <h1 className="uppercase text-[18px] font-bold tracking-[2px] text-[#9ED220]">
          Why Choose Us?
        </h1>
      </span>

      <h1 className="text-center md:mb-[90px] mb-[45px] px-[10px] leading-tight mt-[12px] md:mt-[32px] font-extrabold text-[24px] md:text-[40px] text-[#333333] mx-auto max-w-[650px]">
        Choose us for top-quality work, on time and on budget
      </h1>
      <div className=" w-full">
        <div className="max-w-[1440px] flex justify-center items-center w-full h-full  mx-auto">
          <div className="flex justify-center px-4 gap-4 md:gap-12  flex-wrap">
            {coreValuesData.map((v) => (
              <div className="flex flex-col w-full group md:w-[300px] hover:bg-black  bg-[#282828] space-y-8 rounded-md px-y py-8 transition-all duration-500 gap-y-2  items-center">
                <span className="text-[#9ED220] group-hover:scale-125 duration-700 text-[70px]">
                  {' '}
                  {v.icon}
                </span>
                <p className="text-white text-[18px] group-hover:-translate-y-4 duration-1000 font-semibold">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
