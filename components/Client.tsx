import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/Data";
import { companies } from "@/Data";

const Client = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from{" "}
        <span className="text-purple-300">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10 mx-auto px-4">
        <div className="h-[50vh] md:h-120 rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
            {/* <p className="text-gray-400 text-sm">Trusted by industry leaders</p> */}
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
