import React from 'react';
import BGSection from '../components/BgSection';
import bgImg from '../../assets/images/careers.jpg';
import nojob from '../../assets/images/nojob.png';

const careersData = {
  img: bgImg,
  title: 'Careers',
};

function Careers() {
  return (
    <div className="bg-white">
      <BGSection data={careersData} />
      <div className="mt-[90px] mx-auto pb-7 max-w-[1440px]">
        <div className="flex justify-center mb-4 ">
          <img className="w-[90%] md:w-1/2" src={nojob} alt="sddsu" />
        </div>
        <h1 className="mx-auto text-[18px] md:text-[48px] font-semibold text-center">
          No Job Openings Yet.{' '}
        </h1>
      </div>
    </div>
  );
}

export default Careers;
