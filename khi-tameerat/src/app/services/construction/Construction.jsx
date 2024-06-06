import React, { useEffect } from 'react';
import bgImg from '../../../assets/images/bg-images/constructionPageBackground.jpg';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsBox } from 'react-icons/bs';
import ImageSlider from '../../_lib/ImageSlider';
import img1P1 from '../../../assets/images/construction-images/constructionHouse1.png';
import img2P1 from '../../../assets/images/construction-images/constructionhouse2.png';
import img1P2 from '../../../assets/images/construction-images/constructionoffice1.png';
import img2P2 from '../../../assets/images/construction-images/constructionoffice2.png';
import img3P2 from '../../../assets/images/construction-images/constructionoffice3.jpeg';
import img1P3 from '../../../assets/images/construction-images/Reconstruction.jpeg';
import img2P3 from '../../../assets/images/construction-images/reconstruction2.jpeg';
function CustomTabPanel(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const Project1 = {
    images: [img1P1, img2P1],
    title: 'Construction of 14 Marla Residential House in PWD',
    description:
      'Building a modern home in the PWD area, ensuring quality craftsmanship and compliance with local regulations.',
  };
  const Project2 = {
    images: [img1P2, img2P2, img3P2],
    title: 'Construction of a KSN office',
    description:
      'Planning, designing, and building a functional and efficient workspace to support business operations.',
  };
  const Project3 = {
    images: [img1P3, img2P3],
    title: 'Re Construction of Impact Wall of Khushal CNG',
    description:
      'Restoring and reinforcing a structural barrier to ensure safety and durability against high-impact forces.',
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-gray-50">
      <div class="relative h-[500px] group overflow-hidden  flex items-center justify-center">
        <img
          src={bgImg}
          alt="Construction Image"
          class="absolute duration-700 transition-all object-cover translate-y-[-4px] group-hover:translate-y-[30px] animate-scale-bounce  inset-0 w-full h-full"
        />
        <div class="bg-[#000000d3] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-white text-6xl uppercase font-bold text-center mb-4">
            Construction
          </h1>
          <p class="text-white text-[20px] font-medium text-center">
            Exploring groundbreaking projects, innovations, and advancements in
            the construction industry.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl px-[4px] sm:px-[20px] mt-[40px] md:mt-[70px] mb-64">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              textColor="none"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              {/* <Tab label="Clients" {...a11yProps(0)} /> */}
              <Tab label="Projects" {...a11yProps(0)} />
            </Tabs>
          </Box>
          {/* <CustomTabPanel value={value} index={0}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            fugiat exercitationem in inventore, ducimus tempore nam dolor totam
            cum impedit reiciendis aspernatur animi, explicabo commodi a dicta.
            Fugiat sequi voluptatibus magnam? Necessitatibus doloribus, facere
            fugiat minus architecto officiis, at ad error voluptates, odit
            dolores placeat! Sapiente omnis quas commodi sunt illum inventore
            tempora minima facilis blanditiis iste dicta eligendi voluptatibus
            voluptatum temporibus iure dolorum nulla, vel doloremque tempore.
            Magni neque quibusdam excepturi eveniet harum in, ipsam
            exercitationem, itaque commodi accusantium officia voluptate id!
            Quia quos enim molestiae reiciendis deleniti mollitia, pariatur
            optio maxime labore, eos magni. Cum dicta, non adipisci magnam
            doloribus deserunt nisi officia qui sit. Distinctio molestiae
            deserunt, necessitatibus voluptate omnis nihil, nulla autem in,
            aliquid ipsum cumque officia laboriosam odio saepe quod nesciunt
            iusto quo temporibus? Temporibus molestias blanditiis culpa
            voluptatum repellendus aperiam ut animi laborum, sed deleniti
            possimus non quasi commodi veritatis! Obcaecati earum quod iste!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error rem
            dicta, provident esse asperiores cumque explicabo itaque nesciunt a
            atque ad ipsam libero, similique est! Saepe, repellendus velit
            nostrum quo voluptates iusto distinctio recusandae reiciendis dolore
            deleniti eligendi at, sapiente ullam! Atque ipsam porro repudiandae?
            Atque dignissimos magni minus possimus rem
          </CustomTabPanel> */}
          <CustomTabPanel value={value} index={0}>
            <h1 className=" uppercase text-[18px] font-bold text-center tracking-[2px] mt-12 mb-12 text-[#9ED220]">
              Our Construction Projects
            </h1>
            <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2 lg:grid-cols-3  mt-8">
              <ImageSlider data={Project1} />
              <ImageSlider data={Project2} />
              <ImageSlider data={Project3} />
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
