import React from 'react';
import img from '../../assets/images/contact.jpg';
const Contact = () => {
  return (
    <div className="min-h-screen relative bg-cover bg-center brit bg-[#9dd221] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src={img} // Path to your construction company image
          alt="Construction Company"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Form Container */}
      <div className="bg-[#333333] text-white h-max  bg-opacity-90 p-8 rounded-lg shadow-md z-10 max-w-lg w-full">
        <h1 className="text-3xl text-[#9dd221] font-bold mb-4 text-center">
          Contact Us
        </h1>
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
  );
};

export default Contact;
