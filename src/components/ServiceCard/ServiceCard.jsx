import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <article className="flex flex-col items-center justify-center lg:flex-row px-4 py-3 flex-wrap gap-6">
      {services.map((service, index) => {
        return (
          <div
            className="flex max-w-[400px] min-h-60 px-3 gap-2 py-2 rounded-2xl justify-center transition-all duration-300 glass hover:bg-transparent hover:-translate-y-2 active:scale-[0.95] group cursor-pointer"
            key={index}
          >
            <div className="flex pt-4">
              <div className="rounded-full border group-hover:scale-[0.85]  w-16 h-16 transition-all duration-300  flex items-center justify-center  backdrop-blur-3xl">
                <img
                  className="w-8 h-8  shadow-2xl drop-shadow-2xl "
                  src={service.img}
                  alt=""
                />
              </div>
            </div>

            <div className="border-l  ml-2 pl-4 flex  flex-col justify-center">
              <h2 className="text-theme-1-h2 text-2xl font-primary mb-3">
                {service.name}
              </h2>
              <p className=" pl-2 text-theme-1-p font-secondary leading-7">
                {
                  service.description
                }
              </p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default ServiceCard;
