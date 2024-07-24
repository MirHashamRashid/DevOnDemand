import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import BannerImage from "../images/coding2.png";
import { FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";
import ThemeToggler from "../components/ThemeToggler";
const Banner = () => {
  return (
    <section className=" min-h-[85vh] lg:min-h-[78vh] flex items-center  text-black dark:text-white">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12"
          id="home"
        >
          {/* text container */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              DEV on <span>DEMAND</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="dark:text-white mr-4 ">We deliver</span>
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
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto text-left text-lg font-primary lg:mx-0 text-black/90 "
            >
              Transforming Ideas into Digital Realities Innovative Solutions
              Tailored for Your Business Empowering Growth Through Cutting-Edge
              Technology
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-2 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact US</button>
              <a href="#services" className="text-gradient">
                Our Services
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
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
            className="hidden lg:flex flex-1 max-w-[320px] lg:mx-0 lg:max-w-[482px]"
          >
            <img src={BannerImage} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
