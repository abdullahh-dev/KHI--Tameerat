import React from 'react';
import BasicTabs from '../../_lib/Tabs.jsx';
import bgImg from '../../../assets/images/bg-images/estimationbg.jpeg';
import img1P1 from '../../../assets/images/Renovation_images/14MarlaHouse1.jpeg';
import img2P1 from '../../../assets/images/Renovation_images/14MarlaHouse2.jpeg';
import img3P1 from '../../../assets/images/Renovation_images/14MarlaHouse3.jpeg';
import img1P2 from '../../../assets/images/Renovation_images/SportsComplex1.jpeg';
import img2P2 from '../../../assets/images/Renovation_images/SportsComplex2.jpeg';
import img3P2 from '../../../assets/images/Renovation_images/SportsComplex3.jpeg';

import BGSection from '../../components/BgSection';
function Renovation() {
  const projects = [
    {
      images: [img1P1, img2P1, img3P1],
      title: 'Renovation of 14 Marla house in PWD',
      description:
        'Restoring and reinforcing a structural barrier to ensure safety and durability against high-impact forces.',
    },
    {
      images: [img1P2, img2P2, img3P2],
      title: 'Refurbishment of sports complex, Islamabad',
      description:
        'Planning, designing, and building a functional and efficient workspace to support business operations.',
    },
    {
      images: [img1P1, img2P1],
      title: 'Construction of 14 Marla Residential House in PWD',
      description:
        'Building a modern home in the PWD area, ensuring quality craftsmanship and compliance with local regulations.',
    },
  ];

  const renovationData = {
    img: bgImg,
    title: 'Renovation',
    desc: '',
  };

  return (
    <div className="bg-gray-50">
      <BGSection data={renovationData} />
      <BasicTabs data={projects} title="Our Renovation Projects" />
    </div>
  );
}

export default Renovation;
