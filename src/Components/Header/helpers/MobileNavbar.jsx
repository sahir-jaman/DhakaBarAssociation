/* eslint-disable react/prop-types */
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import MobileDropDown from "./MobileDropDown";

export default function MobileNavbar({ menuOptions }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".mobile-navbar")) {
      closeMenu();
    }
  };

  return (
    <>
      <div className="bg-[#171C49]">
        <div
          className={`mobile-navbar bg-[#171C49] text-white py-4 max-w-[95%] mx-auto`}
          onClick={handleOutsideClick}
        >
          <div className="flex justify-between items-center px-4">
            <img
              src="https://www.bpa-bd.com/frontend/assets/images/logo.png"
              alt=""
              className="h-12"
            />
            <button className="block lg:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <RxHamburgerMenu className="text-2xl" />
              )}
            </button>
          </div>
          <ul
            className={`lg:hidden px-4 mt-4 space-y-2 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {menuOptions.map((item) => (
              <MobileDropDown key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
