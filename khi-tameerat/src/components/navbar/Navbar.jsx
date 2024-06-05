import React from 'react';
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from 'react-icons/fa6';
import NavLinks from './NavLinks';
function Navbar() {
  return (
    <div>
      <div className="bg-[#9dd221]">
        <div className="max-w-screen-xl py-[10px] px-[10px] m-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#333333] font-semibold ">(+92)-312 1955286</h1>
            <span className="flex items-center gap-x-4 text-[#333333]">
              <a
                href="#"
                className="bg-[#333333] flex w-8 h-8 rounded-[5px] items-center justify-center">
                <svg
                  class="text-[#9dd221] hover:scale-[1.2] duration-500 transition-all w-6 h-6"
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
                href="https://www.instagram.com/khitameraat/?utm_source=ig_web_button_share_sheet"
                className="bg-[#333333] flex w-8 h-8 rounded-[5px] items-center justify-center">
                <svg
                  class="text-[#9dd221] hover:scale-[1.2] duration-500 transition-all w-6 h-6"
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
                href="https://www.linkedin.com/company/khitameraat/"
                className="bg-[#333333] flex w-8 h-8 rounded-[5px] items-center justify-center">
                <svg
                  class="text-[#9dd221] hover:scale-[1.2] duration-500 transition-all w-6 h-6"
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
              <button className="px-[20px] text-[16px] font-medium  py-[8px] rounded-[4px] text-[#9dd221] bg-[#333333]">
                Contact Us
              </button>
            </span>
          </div>
        </div>
      </div>
      <>
        <NavLinks />
      </>
    </div>
  );
}

export default Navbar;
