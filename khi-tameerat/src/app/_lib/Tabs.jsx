import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageSlider from '../_lib/ImageSlider.jsx';
function CustomTabPanel(props) {
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

export default function BasicTabs({ data, title }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="max-w-screen-xl mt-[40px] md:mt-[70px] mx-auto">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              textColor="none"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Projects" {...a11yProps(0)} />
              {/* <Tab label="Projects" {...a11yProps(1)} /> */}
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <h1 className="text-[#9ED220] font-bold text-center my-6 text-[24px]">
              {title}
            </h1>
            <div className="grid grid-cols-1 gap-y-8 gap-x-2  md:grid-cols-2 lg:grid-cols-3">
              {data.map((d) => (
                <ImageSlider data={d} />
              ))}
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
