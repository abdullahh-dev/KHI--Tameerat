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
      <div className="bg-[#9ED220]">
        <div className="max-w-[1440px] py-[10px] m-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#323232] font-semibold ">(+92)-312 1955286</h1>
            <span className="flex gap-4 text-[#323232]">
              <button>
                <FaSquareWhatsapp size={24} />
              </button>
              <button>
                <FaSquareInstagram size={24} />
              </button>
              <button>
                <FaSquareFacebook size={24} />
              </button>
              <button className="px-[14px] text-[14px] font-semibold  py-[8px] rounded-[4px] text-[#9ED220] bg-[#323232]">
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
