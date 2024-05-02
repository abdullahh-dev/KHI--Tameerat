import React from 'react';
import logo from '../../assets/images/logo/KHI Green.png';
const Footer = () => {
  return (
    <footer className="bg-[#333333]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex items-baseline">
            <a href="">
              <img src={logo} className="h-24 me-3" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-40 sm:grid-cols-3">
            <div>
              <h2 className="mb-5 text-[16px] font-semibold text-[#9ED220]">
                Links
              </h2>
              <ul className="text-[#dbdbdb] space-y-2 text-[14px]">
                <li>
                  <a href="https://flowbite.com/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-5 text-[16px] font-semibold text-[#9ED220]">
                Follow us
              </h2>
              <ul className="text-[#dbdbdb] space-y-2 text-[14px]">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-5 text-[16px] font-semibold text-[#9ED220]">
                Contact
              </h2>
              <ul className="text-[#dbdbdb] space-y-2 text-[14px]">
                <li>Email</li>
                <li>Phone Number</li>
                <li>Phone Number</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 text-[#dbdbdb] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#dbdbdb] sm:text-center">
            © 2024{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              KHI Tameraat™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-[#dbdbdb] hover:text-[#9ED220]">
              <svg
                class="w-6 h-6"
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
            <a href="#" className="text-[#dbdbdb] hover:text-[#9ED220] ms-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
