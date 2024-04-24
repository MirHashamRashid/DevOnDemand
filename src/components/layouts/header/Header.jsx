import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Header = ({onSideBarToggle}) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
      <RxHamburgerMenu onClick={onSideBarToggle} className="text-2xl hover:text-white cursor-pointer"/>
      <form action="#">
        <input type="text" placeholder="Multi-Search..." className="bg-transparent ml-4 outline-none" />
      </form>
      </div>
    {/* header right side elements */}
      <div className="flex flex-row-reverse items-center ">
        <IoSettingsOutline className="text-2xl mx-2hover:text-white cursor-pointer"  />
        <FaRegBell className="text-2xl mx-2 hover:text-white cursor-pointer"/>
        <MdOutlineEmail className="text-2xl mx-2 hover:text-white cursor-pointer" />

      </div>
    </div>
  );
};

export default Header;
