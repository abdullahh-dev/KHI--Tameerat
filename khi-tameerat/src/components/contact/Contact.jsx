import React from 'react';
import img from '../../assets/images/contact.jpg';
import { IoIosMail } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
const Contact = () => {
  return (
    <div>
      <div class="relative  h-[400px] flex items-center justify-center">
        <img
          src={img}
          alt="About Us Image"
          class="absolute duration-700 transition-all inset-0 w-full h-full object-cover"
        />
        <div class="bg-[#151c05e4] absolute inset-0"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-white text-6xl uppercase font-bold text-center mb-4">
            <span className="text-[#9ED220]">Contact</span> Us
          </h1>
          <p class="text-white text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Contact Form Container */}
      <div className="md-max:flex md:flex-row gap-2 md:gap-24 max-w-[1440px] flex flex-col gap-y-8 px-[10px] lg:px-20 justify-between mx-auto mt-[40px] md:mt-[170px]">
        <div>
          <p className="text-[#9ED220] font-bold text-[18px]">Contact Us</p>
          <h1 className="pt-2 text-[36px] leading-tight md:text-[48px] font-bold max-w-[900px] text-[#333333]">
            Get in touch with KHI-Tameraat's team of experts
          </h1>
        </div>
        <div className="text-[18px]">
          <p className="text-[20px] text-[#333333]/90 md:mb-4">
            Give us a call or send us a message for any queries regarding our
            companies, culture or services' portfolio.
          </p>
          <ul className="text-[#dbdbdb] pt-4 space-y-4 font-medium">
            <li className="flex gap-x-2 text-[#333333] items-center">
              {' '}
              <MdLocalPhone color="9ED220" size={28} />
              03121955286
            </li>
            <li className="flex gap-x-2 text-[#333333] items-center">
              {' '}
              <IoIosMail color="9ED220" size={28} />
              khitameraat@gmail.com
            </li>
            <li className="flex gap-x-2 text-[#333333] items-center">
              <IoLocation color="9ED220" size={28} />
              Block B, Satellite Town, Rawalpindi
            </li>
          </ul>
        </div>
      </div>

      <div className="md-max:flex md:flex-row gap-2 md:gap-24 max-w-[1440px] flex flex-col gap-y-8 px-[10px] lg:px-20 justify-between mx-auto mt-[40px] md:mt-[170px] mb-[60px]">
        <div>
          <h1 className="pt-2 text-[42px] font-bold text-[#333333] ">
            Leave us a message
          </h1>
          <p className="text-[#9ED220] font-bold text-[18px]">
            Our team would love to hear from you.
          </p>
        </div>
        <div className="bg-[#333333] text-white h-max p-8 rounded-lg shadow-md z-10 max-w-lg w-full">
          <form className="space-y-4 w-full">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 h-8 text-[#333333] px-2 rounded-[4px]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 h-8 text-[#333333] px-2 rounded-[4px]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full h-[120px] mt-2 text-[#333333] px-2 rounded-[4px]"></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#9dd221] p-2 text-[#333333] rounded-[4px] hover:bg-[#abdd35] w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
