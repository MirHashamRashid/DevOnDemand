import React from "react";
import CardNew from "./card3/CardNew";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import logo from '../images/Mir.png'
const Team = [
  {
    name: "Qadir Agha",
    Job: "Front-end and Back-end Developer",
    img: logo
  },
  {
    name: "Qadir Agha",
    Job: "Front-end and Back-end Developer",
    img: logo
  },
  {
    name: "Qadir Agha",
    Job: "Front-end and Back-end Developer",
    img: logo
  },
];

const TeamMembers = () => {
  return (
    <section className="section py-4   sm:h-max" id="team-members">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-gradient dark:text-white">Team members</h2>
          <h3 className="h3 text-black/35">Know our team best</h3>
        </div>
          <div className="bg-black/5 shadow-m drop-shadow-lg shadow-lg py-2 px-4 rounded-2xl">
          <ul class="cards">
            {Team.map((card,index) => (
              <motion.li
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
              >
                <a href="" class="card">
                <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                  <div class="card__overlay ">
                    <div class="card__header">
                      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                      <div class="card__header-text">
                        <h3 class="card__title ">{card.name}</h3>
                        {/* <span class="card__status">1 hour ago</span> */}
                      </div>
                    </div>
                    <p class="card__description">{card.Job}</p>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
