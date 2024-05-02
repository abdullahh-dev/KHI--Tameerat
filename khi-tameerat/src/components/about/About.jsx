import React from 'react';
import img from '../../assets/images/about-media/aboutus.jpg';
function About() {
  return (
    <div>
      <div class="relative  h-[450px] flex items-center justify-center">
        <img
          src={img}
          alt="About Us Image"
          class="absolute duration-700 transition-all inset-0 w-full h-full object-cover"
        />
        <div class="bg-[#151c05e4] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-white text-4xl font-bold text-center mb-4">
            <span className="text-[#9ED220]">About</span> Us
          </h1>
          <p class="text-white text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div>
        <h1>Who are We?</h1>
      </div>
    </div>
  );
}

export default About;
