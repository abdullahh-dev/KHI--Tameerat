import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function NavLinks() {
  return (
    <div>
      <nav className="bg-[#333333]  relative border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl text-white uppercase font-semibold whitespace-nowrap">
              <span className="text-[#9dd221]">Khi</span> Tameraat
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-[#9dd221] hover:bg-[#88b62d]  focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
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
            className={`absolute  z-[999999999] bg-[#333333] top-16 left-0 md:relative md:top-0 lg:relative lg:top-0 lg:left-0 w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col text-[14px] font-medium text-white p-4 md:p-0 sm:shadow-sm shadow-[#9dd221]  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-[#9dd221]" : "text-white"
                    }  hover:text-[#9dd221] md:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-[#9dd221]" : "text-white"
                    } hover:text-[#9dd221] md:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/construction"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-[#9dd221]" : "text-white"
                    } hover:text-[#9dd221] md:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-[#9dd221]" : "text-white"
                    } hover:text-[#9dd221] md:p-0`
                  }
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-[#9dd221]" : "text-white"
                    } hover:text-[#9dd221] md:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavLinks;
