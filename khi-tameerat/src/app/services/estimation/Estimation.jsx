import React from 'react';
import img from '../../../assets/images/services-media/estimation.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div class="relative  h-[400px] flex items-center justify-center">
        <img
          src={img}
          alt="Extimation Image"
          class="absolute duration-700 transition-all inset-0 w-full h-full object-cover"
        />
        <div class="bg-[#000000d3] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-white text-6xl uppercase font-bold text-center mb-4">
            Estimation
          </h1>
          <p class="text-white text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            velit.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mt-[40px] md:mt-[70px] mx-auto">
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
            Atque dignissimos magni minus possimus rem perspiciatis, modi
            voluptate ex, dolore labore praesentium placeat. A, provident ut
            molestias, quod, ex eos officia dignissimos autem ipsam suscipit
            porro quas sint earum soluta beatae quisquam. Nobis, laborum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos error nulla
            ullam, commodi illum amet odio omnis veniam temporibus tenetur
            quibusdam. Laboriosam, quam. Aspernatur quidem, tempora corrupti
            maiores rerum amet minima dolore numquam omnis ea itaque assumenda
            repellendus soluta fugit, rem totam tempore reprehenderit obcaecati
            in asperiores nostrum ad consectetur molestiae. Nihil laudantium
            deleniti expedita. Quam pariatur assumenda eveniet voluptates nisi
            debitis adipisci quod rerum qui ab. Laborum qui libero sunt suscipit
            corrupti, debitis aliquid laboriosam, soluta deserunt impedit, optio
            fugit quam id. Saepe alias, recusandae iste, sit sed fugit
            voluptates iusto, molestias nostrum dolores voluptas facere amet
            quae non ipsam quis sint. Id, consequuntur ipsam perferendis
            provident reiciendis atque nesciunt quidem fugit quod, natus
            mollitia! Perspiciatis nulla corrupti nam!
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Projects Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium ducimus tenetur ad rerum quam et deserunt alias, cum
            accusantium ipsum inventore, voluptate aliquid cupiditate eaque id
            suscipit numquam aliquam quia quod ullam assumenda! Quasi rerum sit
            accusamus ab quidem! Quis vel voluptatem laboriosam ullam tempore!
            Ratione blanditiis consectetur eveniet in, minima eligendi
            laudantium error praesentium, itaque, amet placeat facilis
            doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, odio? Omnis, sit officia voluptas dolore libero
            similique repudiandae rerum, autem corrupti illo fuga. Autem
            corporis nam porro libero vitae quae rem nesciunt unde sit eum
            doloribus numquam quia, corrupti laudantium a dolor ad nisi illum
            suscipit vero rerum nulla! Provident reiciendis veritatis eius,
            itaque animi alias expedita doloremque saepe accusamus
            necessitatibus ipsum explicabo ipsa ad, dolorum exercitationem ea,
            inventore incidunt! Possimus expedita deleniti, quod veniam mollitia
            est vero, et ad minus architecto unde vel culpa! Nisi soluta
            possimus, distinctio placeat voluptatum incidunt corrupti minima
            explicabo accusantium architecto deleniti aut iure. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Iste eum nostrum
            maiores modi voluptatem nihil, earum distinctio, esse excepturi
            eveniet debitis. Sapiente laboriosam cum ratione nam at optio omnis
            repudiandae repellendus ipsa maxime molestias et rerum, consequatur
            quasi consectetur? Necessitatibus quisquam nulla exercitationem
            fugit in hic corporis quis quod soluta et repudiandae quibusdam
            numquam consequuntur, eum veniam delectus a nemo! Facere excepturi
            iure molestias tempore aliquam itaque quo voluptates consequatur?
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
