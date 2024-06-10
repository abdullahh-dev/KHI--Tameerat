import React from 'react';
import BasicTabs from '../../_lib/Tabs.jsx';
import bgImg from '../../../assets/images/bg-images/renovation.jpg';
import img1P1 from '../../../assets/images/Renovation_images/14MarlaHouse1.jpeg';
import img2P1 from '../../../assets/images/Renovation_images/14MarlaHouse2.jpeg';
import img3P1 from '../../../assets/images/Renovation_images/14MarlaHouse3.jpeg';
import img1P2 from '../../../assets/images/Renovation_images/SportsComplex1.jpeg';
import img2P2 from '../../../assets/images/Renovation_images/SportsComplex2.jpeg';
import img3P2 from '../../../assets/images/Renovation_images/SportsComplex3.jpeg';
import img1P3 from '../../../assets/images/Renovation_images/chakshahzad1.jpeg';
import img2P3 from '../../../assets/images/Renovation_images/chakshahzad2.jpeg';

import BGSection from '../../components/BgSection';
function Renovation() {
  const projects = [
    {
      images: [img1P1, img2P1, img3P1],
      title: 'Renovation of Residential Houses, Pakistan',
      description:
        'Revitalizing homes with tailored renovations that blend functionality with aesthetic appeal throughout Pakistan.',
    },
    {
      images: [img1P2, img2P2, img3P2],
      title: 'Refurbishment of Sports Complex, Islamabad, Pakistan',
      description:
        'Reviving the heart of sports in Islamabad with a comprehensive refurbishment, enhancing facilities for athletes and enthusiasts alike.',
    },
    {
      images: [img1P3, img2P3],
      title: 'Renovation of Ware House of IDress, Islamabad, Pakistan',
      description:
        'Elevating operational efficiency and modernizing infrastructure to optimize storage solutions for iDress in Islamabad, Pakistan.',
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
