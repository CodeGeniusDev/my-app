"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import MagicButton from "@/components/ui/magic-button";
import { cn } from "@/lib/utils";

export default function CanvasRevealEffectDemo() {
  return (
    <>
      <section id="approach" className="w-full py-20">
        <h1 className="heading">
          My <span className="text-purple-300">Approach</span>
        </h1>
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
          <Card
            title="Planing & Research"
            icon={<AceternityIcon order="Phase 01" />}
            description="I start by understanding your goals and requirements, then create a detailed plan for the project."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card
            title="Design & Development"
            icon={<AceternityIcon order="Phase 02" />}
            description="I design and develop the project based on the plan, using the latest technologies and best practices."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-purple-900"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            {/* <div className="absolute inset-0 mask-[radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </Card>
          <Card
            title="Testing & Deployment"
            icon={<AceternityIcon order="Phase 03" />}
            description="I test and deploy the project, ensuring it meets your requirements and is ready for production."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </section>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      style={{ cursor: "pointer" }}
      className="border border-black/20 group/canvas-card flex text-center items-center justify-center dark:border-white/20 bg-purple-300/2 max-w-sm w-full mx-auto p-4 relative h-140 touch-manipulation"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        <div
          className={cn(
            "text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center",
            hovered && "-translate-y-4 opacity-0"
          )}
        >
          {icon}
        </div>
        <div className="-mt-15 px-4">
          <h2
            className={cn(
              "dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200",
              hovered ? "opacity-100 -translate-y-2 text-white" : "opacity-0"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-sm opacity-0 text-center group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200",
              hovered ? "opacity-100 -translate-y-2 text-white" : "opacity-0"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <MagicButton
        position="right"
        otherClasses="px-6 rounded-full cursor-none text-sm"
        title={order}
      >
        {order}
        <svg
          width="16"
          height="16"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-3 w-3 text-white dark:text-white group-hover/canvas-card:text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
            // style={{ mixBlendMode: "darken" }}
          />
        </svg>
      </MagicButton>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
