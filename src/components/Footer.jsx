import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="relative bg-black/15  drop-shadow-lg shadow-2xl text-white pt-16 pb-6">
      {/* Wavy SVG */}
      
      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 drop-shadow-2xl shadow-xl rounded-xl px-2 md:mb-0">
            <h2 className="h2  ">Dev On Demand</h2>
            <p className="mt-2">Kandahar, Kandahar city, 3802</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <a href="mailto:devOnDemand">devOnDemand@gmail.com</a>
          </div>
          <div>
            <h3 className="text-xl  font-bold">Quick Links:</h3>
            <ul className="mt-2 border-l pl-2">
              <li><Link to='home' smooth offset={-200} className="cursor-pointer hover:font-bold transition">Home</Link></li>
              <li><Link to='about' smooth className="cursor-pointer hover:font-bold transition">About</Link></li>
              <li><Link to='contact' smooth className="cursor-pointer hover:font-bold transition">Contact</Link></li>
              <li><Link to='services'smooth  className="cursor-pointer hover:font-bold transition">Services</Link></li>
              <li><Link to='team-members'smooth  className="cursor-pointer hover:font-bold transition">Team members</Link></li>
              <li><Link to='faq'smooth  className="cursor-pointer hover:font-bold transition">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>© {new Date().getFullYear()} DevOnDemand. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
