import React from 'react';
import BasicTabs from '../../_lib/Tabs.jsx';
import bgImg from '../../../assets/images/estimation/estimation.jpg';
import img1P1 from '../../../assets/images/construction-images/constructionHouse1.png';
import img2P1 from '../../../assets/images/construction-images/constructionhouse2.png';
import img1P2 from '../../../assets/images/construction-images/constructionoffice1.png';
import img2P2 from '../../../assets/images/construction-images/constructionoffice2.png';
import img3P2 from '../../../assets/images/construction-images/constructionoffice3.jpeg';
import img1P3 from '../../../assets/images/construction-images/Reconstruction.jpeg';
import img2P3 from '../../../assets/images/construction-images/reconstruction2.jpeg';
import BGSection from '../../components/BgSection';
function Renovation() {
  const projects = [
    {
      images: [img1P3, img2P3],
      title: 'Re Construction of Impact Wall of Khushal CNG',
      description:
        'Restoring and reinforcing a structural barrier to ensure safety and durability against high-impact forces.',
    },
    {
      images: [img1P2, img2P2, img3P2],
      title: 'Construction of a KSN office',
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
