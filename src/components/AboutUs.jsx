import React from "react";
import ContactUsBG from "../images/coding-4.png";
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
    <section className="section dark:bg-transparent mb-4" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex shadow-m flex-col pl-4 gap-y-2 lg:flex-row lg:items-center  drop-shadow-2xl shadow-2xl rounded-3xl bg-black/5 lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  flex justify-center h-[200px] lg:h-[640px]"
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
            <h2 className="md:h2 md:text-[44px] md:mb-4 sm:text-xl sm:mb-0 text-gradient">
              About US
            </h2>
            <h3 className="md:h3 mb-4 text-black/50 sm:mb-1 ">
              We Provide software services with over 5 years of experience.
            </h3>
            <p className="mb-6 text-black/90 text-xl">
            At the forefront of digital innovation, we specialize in crafting bespoke software solutions.
            Our dedicated team is committed to driving your success through technology and creativity.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-2 ">
              <div className="bg-black/5 hover:bg-black/10 dark:hover:border dark:hover:bg-transparent rounded-2xl md:px-4 md:py-4 py-5 px-1 dark:bg-white/5">
                <div className="text-[40px] font-tertiary text-gradient dark:text-white mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white dark:text-black/60">
                  years of <br />
                  Experience
                </div>
              </div>
              <div className="bg-black/5 hover:bg-black/10 dark:hover:border dark:hover:bg-transparent rounded-2xl md:px-4 md:py-4 py-5 px-1 dark:bg-white/5">
                <div className="text-[40px] font-tertiary text-gradient dark:text-white mb-2">
                  {inView ? <CountUp start={0} end={15} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white dark:text-black/60 ">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div className="bg-black/5 hover:bg-black/10 dark:hover:border dark:hover:bg-transparent rounded-2xl md:px-4 md:py-4 py-5 px-1 dark:bg-white/5">
                <div className="text-[40px] font-tertiary text-gradient dark:text-white mb-2">
                  {inView ? <CountUp start={0} end={6} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-black/65 dark:text-black/60 text-white">
                  Satisfied <br />
                  Clients
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
