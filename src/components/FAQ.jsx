import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaPlus, FaArrowUp } from "react-icons/fa6";
import { Disclosure } from "@headlessui/react";
import Faq from "../images/faq2.webp";
const faqs = [
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days...",
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order using the tracking number provided...",
  },
  // Add more FAQs here
];

const FAQ = () => {
  return (
    <section className="section bg-black-10 bg-theme-1-background" id="faq">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center mb-4"
          >
            <h4 className=" text-2xl uppercase font-medium mb-1 tracking-wide">
              FAQ
            </h4>
            <h2 className="text-[45px] text-center lg:text-[50px] leading-none mb-1">
              Frequently asked <br /> Questions
            </h2>
          </motion.div>

          <div className="flex rounded-3xl min-h-[50vh] shadow-m bg-black/5 p-4 gap-x-3 shadow-2xl">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 bg-cover hidden pointer-events-none md:flex  justify-center lg:justify-start items-center"
            >
              <img src={Faq} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1  rounded-2xl  flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              {faqs.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white bg-black/10 rounded-lg hover:bg-black/5 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 transition-all duration-500">
                        <span>{faq.question}</span>
                        <FaPlus
                          className={`${
                            open ? "transform rotate-45" : ""
                          } w-5 h-5 text-white`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 text-lg text-white flex gap-1 items-center">
                        <FaArrowUp /> {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
