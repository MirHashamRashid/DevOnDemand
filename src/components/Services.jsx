import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
// services Data
import web3 from "../SVG/blockchain.svg";
import webdev from "../SVG/web-development.svg";
import maintaine from "../SVG/web.svg";
import mobile from "../SVG/mobile-development.svg";
const services = [
  {
    name: "Software Maintenance",
    description:
      "Keep your software reliable, secure, and up-to-date with our maintenance services. We address bugs, performance issues, and security vulnerabilities, ensuring smooth, uninterrupted operation.",
    link: "Learn more",
    img: maintaine,
  },
  {
    name: "Web Development",
    description:
      "Elevate your online presence with dynamic, responsive websites. Our team designs and develops custom web solutions optimized for performance and user experience. Drive engagement and conversions across all devices.",
    link: "Learn more",
    img: webdev,
  },
  {
    name: "Mobile Development",
    description:
      "Develop intuitive, high-performance mobile applications for iOS and Android. Our expert team creates seamless, scalable solutions tailored to your business needs. Engage and delight users with innovative mobile experiences..",
    link: "Learn more",
    img: mobile,
  },
  {
    name: "Web3 Development",
    description:
      "Harness blockchain technology with our Web3 development services. We build secure, efficient decentralized applications and smart contracts. Experience the future with transparent, high-performance solutions.",
    link: "Learn more",
    img: web3,
  },
];
const Services = () => {
  return (
    <section className="section py-4 bg-theme-1-background sm:h-max" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-gradient text-theme-1-h2">OUR services</h2>
          <h3 className="h3 ">what do we do?</h3>
        </div>
        <div className=" shadow-2xl rounded-3xl shadow-m bg-black/5 drop-shadow-lg py-10 px-4">
          <ServiceCard services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
