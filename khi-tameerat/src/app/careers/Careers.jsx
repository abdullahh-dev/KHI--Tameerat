import React from 'react';
import BGSection from '../components/BgSection';
import bgImg from '../../assets/images/bg-images/estimationbg.jpeg';

const careersData = {
  img: bgImg,
  title: 'Careers',
};

function Careers() {
  return (
    <div className="bg-gray-50">
      <BGSection data={careersData} />
      <div className="mt-[90px] mx-auto mb-[90px] max-w-[1440px]">
        <h1 className="mx-auto text-[48px] font-semibold text-center">
          No Job Openings Yet.{' '}
        </h1>
      </div>
    </div>
  );
}

export default Careers;
