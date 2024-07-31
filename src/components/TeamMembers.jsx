import React from "react";
import logo1 from '../images/avatars/profile1.png'
import logo2 from '../images/avatars/avatar2.png'
import logo3 from '../images/avatars/avatar3.png'
import logo4 from '../images/avatars/avatar4.png'
import TeamCard from "./TeamMemberCard/TeamCard";
const Team = [
  {
    name: "Qadir Agha",
    Job: "full Stack developer",
    img: logo1
  },
  {
    name: "Ashraf Khan",
    Job: "Front-end Developer",
    img: logo2
  },
  {
    name: "Shakir Naimy",
    Job: "Back-end Developer",
    img: logo3
  },
  {
    name: "MirHasham Rashid",
    Job: "Front-end Developer",
    img: logo4
  },
  
];

const TeamMembers = () => {
  return (
    <section className="section bg-theme-1-background py-4 sm:h-max" id="team-members">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-gradient text-theme-1-h2 font-primary">Team members</h2>
          <h3 className="h3">Know our team best</h3>
        </div>
          <div className="bg-black/5  shadow-m drop-shadow-lg shadow-lg py-2 px-4 rounded-2xl">
         <TeamCard TeamMembers={Team}/>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
