import React from 'react';
import logo from '../../assets/images/logo/KHI Green.png';
import { IoIosMail } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#333333]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div>
          <div className="mb-6">
            <Link to="/">
              <img src={logo} className="h-24 me-3" alt="FlowBite Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-y-5 sm:gap-8 lg:gap-24 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h2 className="mb-4 md:mb-6 text-[16px] font-semibold text-[#9ED220]">
                Links
              </h2>
              <ul className="text-[#dbdbdb] font-medium space-y-2 text-[14px]">
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 text-[16px] font-semibold text-[#9ED220]">
                Follow us
              </h2>
              <ul className="text-[#dbdbdb] font-medium space-y-2 text-[14px]">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61560569131512"
                    className="hover:underline antialiased ">
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/khitameraat/?utm_source=ig_web_button_share_sheet"
                    className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/khitameraat/"
                    className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 text-[16px] font-semibold text-[#9ED220]">
                Contact
              </h2>
              <ul className="text-[#dbdbdb] font-medium space-y-3 text-[14px]">
                <li className="flex gap-x-2 items-center">
                  {' '}
                  <MdLocalPhone color="9ED220" size={18} />
                  (+92)-312 1955286
                </li>
                <li className="flex justify-centers gap-x-2 items-center">
                  {' '}
                  <IoIosMail color="9ED220" size={18} />
                  info@khitameraat.com
                </li>
                <li className="flex justify-centers gap-x-2 items-center">
                  <IoLocation color="9ED220" size={18} />
                  Block D, Satellite Town, Rawalpindi
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 text-[#dbdbdb] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#dbdbdb] sm:text-center">
            © 2024{' '}
            <Link to="/" className="hover:underline">
              KHI Tameraat™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center gap-x-[12px] items-center sm:mt-0">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61560569131512"
              className="bg-[#9dd221] flex w-8 h-8 rounded-full items-center justify-center">
              <svg
                className=" text-[#333333] hover:scale-[1.2] duration-500 transition-all w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/khitameraat/?utm_source=ig_web_button_share_sheet"
              className="bg-[#9dd221] flex w-8 h-8 rounded-full items-center justify-center">
              <svg
                className=" text-[#333333] hover:scale-[1.2] duration-500 transition-all w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/khitameraat/"
              className="bg-[#9dd221] flex w-8 h-8 rounded-full items-center justify-center">
              <svg
                className=" text-[#333333] hover:scale-[1.2] duration-500 transition-all w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
