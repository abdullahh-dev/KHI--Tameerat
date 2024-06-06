import React from 'react';
import constructionImg from '../../assets/images/services-media/construction.png';
import estimationImg from '../../assets/images/services-media/estimation.png';
import renovationImg from '../../assets/images/services-media/renovation.png';
import { Link, Navigate, Router } from 'react-router-dom';
function HServicesSec() {
  const servicesData = [
    {
      title: 'Construction',
      src: constructionImg,
      link: 'construction',
    },
    {
      title: 'Project Drafting and Quantity Surveying',
      src: estimationImg,
      link: 'estimation',
    },
    {
      title: 'Renovation',
      src: renovationImg,
      link: 'renovation',
    },
  ];

  return (
    <div className="max-w-[1440px] m-auto mt-[110px]">
      <span className="flex justify-center">
        <h1 className=" uppercase text-[18px] font-bold tracking-[2px] text-[#9ED220]">
          Our Services
        </h1>
      </span>
      <h1 className="text-center mb-[90px] leading-tight mt-[32px] font-extrabold text-[40px] m-auto text-[#333333] max-w-[535px]">
        Excellence in construction and other services
      </h1>
      <div className="flex flex-col items-center px-[20px] gap-y-8 lg:flex-row lg:gap-[40px] justify-center">
        {servicesData.map((s) => (
          <div className="lg:max-w-[320px] w-[100%] md:max-w-[600px] overflow-hidden group relative h-[410px] cursor-pointer rounded-[4px]">
            <div className="absolute bottom-[-5px] group-hover:bottom-36 z-[99999] transition-all duration-1000 left-16 text-white">
              <h1 className="text-[24px] leading-tight font-semibold">
                {s.title}
              </h1>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-700 ">
                <Link
                  to={`/${s.link}`}
                  className="inline-block border-[2px] p-2 mt-4 text-[12px]">
                  View Details
                </Link>
              </span>
            </div>
            <div>
              <img
                className="h-full w-full group-hover:brightness-[0.6] transition-all duration-1000 brightness-[0.28] object-contain"
                src={s.src}
                alt="construction"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HServicesSec;