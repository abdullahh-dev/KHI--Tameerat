import React from 'react';
import ImageCarousel from '../_lib/ImageCarousel';

function Gallery() {
  return (
    <div className="mt-[45px] mx-[10px] md:mx-[20px] mb-[60px] md:mt-[160px] md:mb-[120px]">
      <span className="flex justify-center">
        <h1 className="px-[28px] py-[8px] uppercase text-[18px] font-bold tracking-[2px] text-[#9ED220]">
          Gallery
        </h1>
      </span>
      <h1 className="text-center px-[10px] mb-[24px] leading-tight mt-[12px] md:mt-[32px] font-extrabold text-[24px] md:text-[40px] m-auto text-[#333333] max-w-[670px]">
        Capturing Moments: A Visual Journey Through Our Gallery{' '}
      </h1>

      <div>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Gallery;
