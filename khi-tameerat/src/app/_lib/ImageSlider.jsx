import 'react-slideshow-image/dist/styles.css';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { data } from 'autoprefixer';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px',
};

const Slideshow = ({ data }) => {
  return (
    <div className="h-full mx-auto md:mx-0 w-[380px] rounded-lg overflow-hidden w shadow-md duration-700 hover:shadow-2xl bg-white">
      <div className="slide-container mb-2 md:w-[380px] rounded-lg h-[300px]">
        <Slide>
          {data.images.map((m, index) => (
            <div key={index}>
              <div
                className="object-cover"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${m})`,
                }}></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="px-4 mb-2  py-3">
        <h1 className="font-semibold leading-5 mb-2  text-[20px]">
          {data.title}
        </h1>
        <p className="text-[14px] text-gray-500">{data.description}</p>
      </div>
    </div>
  );
};

export default Slideshow;