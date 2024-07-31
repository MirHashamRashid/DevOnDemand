import React from "react";
import ContactUsBG from "../images/about3.png";
//countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section h-screen bg-theme-1-background mb-4" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex shadow-m flex-col py-3 lg:py-0 pl-4 gap-y-2 lg:flex-row lg:items-center  drop-shadow-2xl shadow-2xl rounded-3xl bg-black/5 lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-cover  flex justify-center pointer-events-none h-[200px] w-auto lg:h-auto"
          >
            <img src={ContactUsBG} alt="" />
          </motion.div>
          {/* Text here */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="md:h2  text-[30px] md:text-[44px] md:mb-4 sm:mb-0 ">
              About US
            </h2>
            <h3 className="h3 text-[24px] mb-4 sm:mb-1 ">
              We Provide software services with over 5 years of experience.
            </h3>
            <p className="mb-6 text-xl">
              At the forefront of digital innovation, we specialize in crafting
              bespoke software solutions. Our dedicated team is committed to
              driving your success through technology and creativity.
            </p>
            {/* stats */}
            <div className="flex gap-x-3 lg:gap-x-10 mb-2 justify-center md:justify-start">
              <div className="bg-white/5  hover:border rounded-2xl md:px-4 md:py-4 py-5 px-1 ">
                <div className="text-[30px] md:text-[40px] font-tertiary text-gradient text-white mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-theme-1-p">
                  years of <br />
                  Experience
                </div>
              </div>
              <div className=" hover:bg-black/10 hover:border dark:hover:bg-transparent rounded-2xl md:px-4 md:py-4 py-5 px-1 bg-white/5">
                <div className="text-[30px] md:text-[40px] font-tertiary text-gradient text-white mb-2">
                  {inView ? <CountUp start={0} end={15} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-theme-1-p ">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div className="bg-black/5 hover:bg-black/10 dark:hover:border dark:hover:bg-transparent rounded-2xl md:px-4 md:py-4 py-5 px-1 dark:bg-white/5">
                <div className="text-[30px] md:text-[40px] font-tertiary text-gradient text-white mb-2">
                  {inView ? <CountUp start={0} end={6} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-theme-1-p">
                  <span className="w-full">
                    Satisfied <br />
                    Clients
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
