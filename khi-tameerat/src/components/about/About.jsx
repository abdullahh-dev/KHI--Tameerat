import React, { useEffect } from 'react';
import img from '../../assets/images/about-media/aboutus.jpg';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="relative  h-[400px] flex items-center justify-center">
        <img
          src={img}
          alt="Construction Image"
          class="absolute duration-700 transition-all inset-0 w-full h-full object-cover"
        />
        <div class="bg-[#151c05e4] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-white text-6xl uppercase font-bold text-center mb-4">
            <span className="text-[#9ED220]">About</span> Us
          </h1>
          <p class="text-white text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            velit.
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] px-[10px] mx-auto">
        <div class="text-center md:px-8">
          <h2 class="text-4xl font-bold mb-6 uppercase text-[#9ED220] mt-[40px] md:mt-[110px]">
            Who are we?
          </h2>
          <p class="text-[22px] leading-relaxed">
            At
            <span className="text-[#9ED220] font-semibold"> KHI Tameraat</span>,
            we pride ourselves on being one of the leading engineering firm,
            specializing in construction, renovation, and estimation services.
            With a strong track record in erecting and renovating various
            structures, from homes to commercial buildings, we cater to clients
            with diverse needs. What sets us apart is our commitment to
            providing top-notch construction planning and reliable services,
            ensuring that our clients receive the best possible outcomes for
            their projects. Each of our projects is geared towards
            sustainability, contributing to a healthier environment. With KHI
            Tameraat, you can trust that your construction needs are in capable
            hands.
          </p>
          <h2 class="text-4xl font-bold mb-6 uppercase text-[#9ED220] mt-[24px] md:mt-[60px]">
            Meet our team
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
