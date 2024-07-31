import React from "react";
import Logo from "../images/devOnDemandLogo.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="DevOnDemand" />
          </a>
          <Link to="footer" smooth={true}>
            <button className="btn btn-sm hover:shadow-2xl hover:drop-shadow-2xl">
              Work with US
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
