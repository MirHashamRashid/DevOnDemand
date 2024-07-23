import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight, BsEnvelope } from "react-icons/bs";
import img1 from "../images/servicesRaw.jpg";
import { MdPlayArrow } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Card from "./CardComponent/Card";
import CardHover from "./CardComponent/CardHover";
import CardNew from "./card3/CardNew";
import GlowingBox from "./glowingCard/GlowingBox";
// services Data
const services = [
  {
    name: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "Learn more",
  },
  {
    name: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "Learn more",
  },
  {
    name: "Web3 Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section py-4  sm:h-max" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-gradient dark:text-white">OUR services</h2>
          <h3 className="h3 text-black/35">what do we do?</h3>
        </div>
          <div className="shadow-2xl rounded-3xl shadow-m bg-black/5 drop-shadow-lg py-2 px-4">
          {/* <CardHover cardData={services}/> */}
          {/* <Card CardsList={services}/> */}
          <CardNew  cards={services}/>
          </div>
  
      </div>
    </section>
  );
};
// const Card = () => {
//   return (
//     <div className="relative w-80 bg-lime-300 rounded-2xl p-4 shadow-lg">
//       <div className="absolute top-0 right-0 w-32 h-32 bg-black text-white flex items-start justify-between p-2 clip-path-custom">
        
//         <div className="flex items-center justify-center w-8 h-8 mt-2 bg-black text-white rounded-full">
//         <a className='border text-lg text-white rounded-full w-16 h-16 flex justify-center items-center  border-white transition-all duration-500 hover:bg-transparent' href='#'>
//                     <BsArrowUpRight/>
//                     </a>
//                     <a className='border text-lg text-white rounded-full w-16 h-16 flex justify-center items-center  border-white transition-all duration-500 hover:bg-transparent' href='#'>
//                     <BsArrowUpRight/>
//                     </a>
//         </div>
//       </div>
//       <div className="mt-20 flex items-center mb-4">
//         <img src="https://via.placeholder.com/50" alt="profile" className="w-12 h-12 rounded-full mr-4" />
//         <div className="text-gray-800">
//           <h3 className="text-lg font-semibold">Peter Thomas</h3>
//           <p className="text-sm">CEO at Madra Ink</p>
//         </div>
//       </div>
//       <div>
//         <div className="flex items-center mb-4">
//           <img src="https://via.placeholder.com/30" alt="logo" className="w-8 h-8 mr-4" />
//           <div>
//             <h2 className="text-lg font-semibold">Google Meet Call</h2>
//             <p className="text-sm text-gray-600">28.03.2023 at 2 pm</p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg p-2">
//           <p className="text-sm text-gray-800">Call scheduled</p>
//           <div className="flex space-x-2">
//             <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
//               <i className="fa fa-envelope"></i>
//             </button>
//             <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
//               <i className="fa fa-video"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Services;

