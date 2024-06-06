import React, { useEffect } from 'react';
import img from '../../assets/images//services-media/construction.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsBox } from 'react-icons/bs';
import ImageSlider from '../_lib/ImageSlider';
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-gray-50">
      <div class="relative h-[400px] flex items-center justify-center">
        <img
          src={img}
          alt="Construction Image"
          class="absolute duration-700 transition-all inset-0 w-full h-full object-cover"
        />
        <div class="bg-[#000000d3] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-white text-6xl uppercase font-bold text-center mb-4">
            Construction
          </h1>
          <p class="text-white text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            velit.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mt-[40px] md:mt-[70px] mb-64 mx-auto">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              textColor="none"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Clients" {...a11yProps(0)} />
              <Tab label="Projects" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
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
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2 lg:grid-cols-3  mt-8">
              <ImageSlider />
              <ImageSlider />
              <ImageSlider />
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
