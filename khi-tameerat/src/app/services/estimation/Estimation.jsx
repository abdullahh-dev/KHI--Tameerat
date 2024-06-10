import React from 'react';
import BasicTabs from '../../_lib/Tabs.jsx';
import bgImg from '../../../assets/images/estimation/estimation.jpg';
import img1P1 from '../../../assets/images/estimation/project1/1.jpg';
import img2P1 from '../../../assets/images/estimation/project1/2.jpg';
import img3P1 from '../../../assets/images/estimation/project1/3.jpg';
import img4P1 from '../../../assets/images/estimation/project1/4.jpg';
import img5P1 from '../../../assets/images/estimation/project1/5.jpg';
import img1P2 from '../../../assets/images/estimation/project2/1.jpg';
import img2P2 from '../../../assets/images/estimation/project2/2.jpg';
import img3P2 from '../../../assets/images/estimation/project2/3.jpg';
import img4P2 from '../../../assets/images/estimation/project2/4.jpg';
import img5P2 from '../../../assets/images/estimation/project2/5.jpg';
import img6P2 from '../../../assets/images/estimation/project2/6.jpg';
import img7P2 from '../../../assets/images/estimation/project2/7.jpg';
import img1P3 from '../../../assets/images/estimation/project3/1.jpg';
import img2P3 from '../../../assets/images/estimation/project3/2.jpg';
import img3P3 from '../../../assets/images/estimation/project3/3.jpg';
import img1P4 from '../../../assets/images/estimation/project4/1.jpeg';
import img2P4 from '../../../assets/images/estimation/project4/2.jpeg';
import img3P4 from '../../../assets/images/estimation/project4/2.jpeg';

import BGSection from '../../components/BgSection';
function Renovation() {
  const projects = [
    {
      images: [img1P1, img2P1, img3P1, img4P1, img5P1],
      title: 'Quantity take off and cost estimation of hotel at Fairfield, USA',
      description:
        'Precision in Planning, Excellence in Execution: Comprehensive Quantity Takeoff and Cost Estimation for Your Fairfield Hotel Project',
    },
    {
      images: [img1P2, img2P2, img3P2, img4P2, img5P2, img6P2, img7P2],
      title:
        'Quantity takeoff and cost estimation for Glenfields schools renovation, USA',
      description:
        'Revitalizing Education with Precision: Expert Quantity Takeoff and Cost Estimation for Glenfields Schools Renovation',
    },
    {
      images: [img1P3, img2P3, img3P3],
      title:
        'Quantity takeoff and cost estimation for Business center Tennesse, USA',
      description:
        'Building Success with Precision: Accurate Quantity Takeoff and Cost Estimation for Your Tennessee Business Center',
    },
    {
      images: [img1P4, img2P4, img3P4],
      title:
        'Center line plan, reinforcement plan and elevation of second floor of Masjid Al Habib, PWD, Pakistan',
      description:
        'Structural Harmony and Detail: Center Line, Reinforcement Plans, and Elevation for Masjid Al Habibs Second Floor',
    },
  ];

  const estimationData = {
    img: bgImg,
    title: 'Estimation & Drafting',
    desc: '',
  };
  return (
    <div className="bg-gray-50">
      <BGSection data={estimationData} />
      <BasicTabs data={projects} title="Our Estimation Projects" />
    </div>
  );
}

export default Renovation;
