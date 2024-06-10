import React from 'react';

function BGSection({ data }) {
  return (
    <>
      <div class="relative h-[200px] md:h-[800px] group overflow-hidden  flex items-center justify-center">
        <img
          src={data.img}
          alt={data.img + 'Image'}
          class="absolute duration-700 transition-all object-cover  animate-scale-bounce  inset-0 w-full h-full"
        />
        <div class="bg-[#000000d3] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col justify-end mb-8 md:mb-24">
          <div className="bg-white/15 text-left p-4 md:p-8 backdrop-blur-3xl rounded-e-full max-w-max">
            <h1 class="text-white text-3xl md:text-7xl  font-bold">
              {data.title}
            </h1>
          </div>
          {/* <p class="text-white text-[20px] font-medium">{data.desc}</p> */}
        </div>
      </div>
    </>
  );
}

export default BGSection;
