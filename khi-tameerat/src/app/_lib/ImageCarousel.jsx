import React from 'react';
import { isMobile, isDesktop, isTablet } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../../assets/images/gallery/1.jpeg';
import img2 from '../../assets/images/gallery/2.jpeg';
import img3 from '../../assets/images/gallery/3.jpeg';
import img4 from '../../assets/images/gallery/4.jpeg';
import img5 from '../../assets/images/gallery/5.jpeg';
import img6 from '../../assets/images/gallery/6.jpeg';
import img7 from '../../assets/images/gallery/7.jpeg';
import '../../carouselStyles.css';
function ImageCarousel() {
  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1224, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        className="h-[300px] md:h-[600px]"
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={400}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {galleryImages.map((i, index) => (
          <div
            key={index}
            className="max-h-[260px] w-full sm:w-auto  rounded-[8px] carousel-item overflow-hidden mr-4 sm:max-h-[200px] md:max-h-[300px] max-md:max-h-[200px] lg:max-h-[400px]">
            <img
              className="hover:scale-125 duration-1000 hover:translate-x-6"
              src={i}
              alt={i + 'img'}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default ImageCarousel;
