import React, { useEffect, useState } from 'react';

function NavLinks() {
  const [menuBarV, setMenuBarV] = useState('hidden');
  const [dropDownV, setDropDownV] = useState('hidden');

  const setMenuBarVisibility = () => {
    setMenuBarV(menuBarV === 'hidden' ? 'block' : 'hidden');
  };
  const setDropDownVisibility = () => {
    setDropDownV(dropDownV === 'hidden' ? 'block' : 'hidden');
  };

  return (
    <div>
      <nav className="bg-[#333333]  relative border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
              <span className="text-[#9dd221]">KHI</span> TAMEERAT
            </span>
          </a>
          <button
            onClick={setMenuBarVisibility}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-[#9dd221] hover:bg-[#88b62d]  focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`absolute ${menuBarV} z-[999999999] bg-[#333333] top-16 left-0 md:relative md:top-0 lg:relative lg:top-0 lg:left-0 w-full md:block md:w-auto`}
            id="navbar-dropdown">
            <ul className="flex flex-col font-medium text-white p-4 md:p-0 sm:shadow-sm shadow-[#9dd221]  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:text-[#9dd221] md:p-0">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 hover:text-[#9dd221]   md:p-0">
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={setDropDownVisibility}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 hover:text-[#9dd221]  md:p-0 md:w-auto  ">
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`${dropDownV} z-10 bg-[#333333] border border-gray-600 text-white absolute font-normal divide-y divide-gray-100 rounded-lg shadow w-44`}>
                  <ul
                    className="py-2 text-sm text-white "
                    aria-labelledby="dropdownLargeButton">
                    <li>
                      <button
                        onClick={() => {
                          setDropDownVisibility('hidden');
                          setMenuBarV('hidden');
                        }}
                        href="#"
                        className="block px-4 py-2 hover:text-[#9dd221]">
                        Construction
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-[#9dd221]">
                        Estimation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-[#9dd221]">
                        Renovation
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:text-[#9dd221] md:p-0">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded hover:text-[#9dd221] md:p-0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavLinks;
