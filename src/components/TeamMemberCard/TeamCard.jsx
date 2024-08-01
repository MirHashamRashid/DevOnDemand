import React from "react";
import "./TeamCard.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaFacebook, FaTwitter, FaInstagram, FaLink } from "react-icons/fa6";
const TeamCard = ({ TeamMembers }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 w-full flex-wrap ">
      {TeamMembers.map((team, index) => {
        return (
          <motion.article
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="flex nft items-center  flex-col min-w-[250px] max-w-[300px] glass p-4 rounded-xl mx-auto"
          >
            <img
              src={team.img}
              className="rounded-full border w-20 h-20 border-yellow-300 bg-yellow-500"
              alt=""
            />
            <div className="flex flex-col ">
              <h2 className="h2 mb-0 text-xl mt-4">{team.name}</h2>
              <span className="text-gray-300">{team.Job}</span>
            </div>
            <hr className="w-full my-4  text-white" />

            <div className="px-6 pt-4 pb-2 relative group flex justify-center">
              <svg
                className="w-10 h-10 text-white group-hover:rotate-180 group-hover:opacity-0 transition-all duration-500"
                viewBox="0 0 24 24"
              >
                <FaLink />
              </svg>
              <div className="flex space-x-4 justify-center opacity-0 group-hover:opacity-100  transition-all duration-500 absolute inset-0 items-center">
                <a
                  href="https://facebook.com"
                  className="text-blue-500 text-2xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-blue-400 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-pink-500 text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default TeamCard;
