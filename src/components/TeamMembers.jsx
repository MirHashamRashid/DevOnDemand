import React from "react";
import CardNew from "./card3/CardNew";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import logo from '../images/Mir.png'
import TeamCard from "./TeamMemberCard/TeamCard";
const Team = [
  {
    name: "Qadir Agha",
    Job: "full Stack developer",
    img: logo
  },
  {
    name: "Ashraf Khan",
    Job: "Front-end Developer",
    img: logo
  },
  {
    name: "Shakir Naimy",
    Job: "Back-end Developer",
    img: logo
  },
  {
    name: "MirHasham Rashid",
    Job: "Front-end Developer",
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
          <div className="bg-black/5  shadow-m drop-shadow-lg shadow-lg py-2 px-4 rounded-2xl">
         <TeamCard TeamMembers={Team}/>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
