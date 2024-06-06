import React, { useEffect } from 'react';
import HomeHeroSec from './HomeHeroSec';
import HServicesSec from './HServicesSec';
import CoreValues from './CoreValues';
import Gallery from './Gallery';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeHeroSec />
      <HServicesSec />
      <CoreValues />
      <Gallery />
    </>
  );
}

export default Home;
