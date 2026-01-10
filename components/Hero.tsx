"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { gridItems } from "@/Data";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className="flex justify-center relative my-10 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2
            className="uppercase tracking-widest
            text-xs text-center text-blue-100 max-w-80"
          >
            {/* {gridItems[3].title} */}
            HEY, I’M ABDULLAH 👋
          </h2>
          <TextGenerateEffect
            words="Full Stack Web Developer & UI/UX Enthusiast"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p
            className="text-center md:tracking-wider
            mb-4 text-sm md:text-lg lg:text-2x1"
          >
            {gridItems[0].title} I build fast, responsive, and accessible web applications
            using modern technologies like Next.js, React, and Tailwind CSS.
          </p>
          <a href="#about">
            <MagicButton
              position="right"
              otherClasses="px-8"
              title="Show my work"
              icon={<FaLocationArrow className="w-3 h-3" />}
            >
              Show my work
            </MagicButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
