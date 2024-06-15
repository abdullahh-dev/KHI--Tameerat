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
      breakpoint: { max: 1024, min: 464 },
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
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={200}
        containerClass="carousel-container"
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {galleryImages.map((i, index) => (
          <div
            key={index}
            className="h-[400px] md:h-[400px] md:max-w-[470px] mb-4 w-full aspect-square lg:max-w-[550px] lg:h-[550px] mx-auto carousel-item overflow-hidden mr-0">
            <img
              className="hover:scale-125 scale-[.85] duration-1000 w-full h-full object-cover hover:translate-x-6"
              src={i}
              alt="gallery image"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default ImageCarousel;
