import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import BannerImage from "../images/banner.png";
import { FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";
import ThemeToggler from "../components/ThemeToggler";
// import {SVG} from '../SVG/index';
import icon1 from "../SVG/analys.svg";
import icon2 from "../SVG/availability.svg";
import icon3 from "../SVG/interface.svg";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center  text-black dark:text-white" id="home">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12"
          
        >
          {/* text container */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] text-theme-1-h2"
            >
              DEV on <span>DEMAND</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6 text-[36px] lg:text-[60] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-theme-1-h2 mr-4 ">We deliver</span>
              <TypeAnimation
                sequence={[
                  "Quality",
                  2000,
                  "OnTime",
                  2000,
                  "within budget",
                  2000,
                ]}
                speed={50}
                className="  text-[#4dc7d9] "
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8 max-w-lg mx-auto  lg:text-left text-lg font-primary lg:mx-0 text-theme-1-p"
            >
              Transforming Ideas into Digital Realities Innovative Solutions
              Tailored for Your Business Empowering Growth Through Cutting-Edge
              Technology
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex max-w-max gap-x-6 items-center mb-2 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true}>
              <button className="btn btn-lg">Contact US</button>
              </Link>
              <Link
                to="services"
                className="text-gradient cursor-pointer"
                smooth={true}
              >
                Our Services
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto mb-10"
            >
              <a href="#">
                <FaFacebook className="hover:text-blue-700" />
              </a>
              <a href="#">
                <FaGithub className="hover:text-black" />
              </a>
              <a href="#">
                <FaDribbble className="hover:bg-red-600 rounded-full" />
              </a>
              <ThemeToggler />
            </motion.div>
          </div>
          {/* image section */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:flex flex-1 max-w-[320px] pointer-events-none lg:mx-0 lg:max-w-[482px]"
          >
            <img src={BannerImage} alt="" />
            <div className="absolute top-40 flex items-center gap-1 icon-1 font-tertiary text-theme-1-h2">
              <img src={icon1} className="w-10 h-10" alt="" />
              growth
            </div>
            <div className="absolute top-40 right-20 flex  items-center gap-1 icon-2 font-primary text-theme-1-h2">
              <img src={icon2} className="w-10 h-10" alt="" />
              API Creation
            </div>
            <div className="absolute bottom-40 flex items-center gap-1 icon-3 font-primary text-theme-1-h2">
              <img src={icon3} className="w-10 h-10" alt="" />
              Analytic
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
