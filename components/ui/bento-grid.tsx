"use client";
import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "@/components/ui/magic-button";
import { FaGlobe } from "react-icons/fa";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlobeDemo } from "@/components/ui/gridGlobe";
import animationData from "../../Data/confetti.json";

// Placeholder components - you'll need to create these or remove them if not needed
// const BackgroundGradientAnimation = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => (
//   <div className="relative w-full h-full">
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-2xl" />
//     {children}
//   </div>
// );

// const GridGlobe = () => (
//   <div className="w-full h-full flex items-center justify-center">
//     <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
//       <FaGlobe className="w-8 h-8 text-white" />
//     </div>
//   </div>
// );

// Simple confetti animation data as a fallback
// const animationData = {
//   // Basic confetti animation data
//   v: "5.5.7",
//   fr: 30,
//   ip: 0,
//   op: 90,
//   w: 500,
//   h: 500,
//   nm: "Confetti",
//   ddd: 0,
//   assets: [],
//   layers: [
//     {
//       ddd: 0,
//       ind: 1,
//       ty: 4,
//       nm: "Confetti",
//       sr: 1,
//       ks: {
//         o: { a: 0, k: 100 },
//         r: { a: 0, k: 0 },
//         p: { a: 0, k: [250, 250, 0] },
//         a: { a: 0, k: [0, 0, 0] },
//         s: { a: 0, k: [100, 100, 100] },
//       },
//       ao: 0,
//       shapes: [
//         {
//           ty: "gr",
//           it: [
//             {
//               ind: 0,
//               ty: "sh",
//               ix: 1,
//               ks: {
//                 a: 0,
//                 k: {
//                   c: false,
//                   v: [
//                     [0, 0],
//                     [100, 0],
//                     [100, 100],
//                     [0, 100],
//                   ],
//                   i: [
//                     [0, 0],
//                     [0, 0],
//                     [0, 0],
//                     [0, 0],
//                   ],
//                   o: [
//                     [0, 0],
//                     [0, 0],
//                     [0, 0],
//                     [0, 0],
//                   ],
//                 },
//               },
//               nm: "Confetti",
//               mn: "ADBE Vector Shape - Group",
//               hd: false,
//             },
//             {
//               ty: "st",
//               c: { a: 0, k: [1, 1, 1, 1] },
//               o: { a: 0, k: 100 },
//               w: { a: 0, k: 1 },
//               lc: 1,
//               lj: 1,
//               ml: 4,
//               bm: 0,
//               d: [{ n: "d", nm: "d", s: 0, v: 1 }],
//               nm: "Stroke 1",
//               mn: "ADBE Vector Graphic - Stroke",
//               hd: false,
//             },
//             {
//               ty: "fl",
//               c: { a: 0, k: [1, 0.5, 0.5, 1] },
//               o: { a: 0, k: 100 },
//               r: 1,
//               bm: 0,
//               nm: "Fill 1",
//               mn: "ADBE Vector Graphic - Fill",
//               hd: false,
//             },
//             {
//               ty: "tr",
//               p: {
//                 a: 1,
//                 k: [
//                   {
//                     i: { x: 0.833, y: 0.833 },
//                     o: { x: 0.167, y: 0.167 },
//                     t: 0,
//                     s: [0, 0],
//                   },
//                   { t: 30, s: [100, 100] },
//                 ],
//               },
//               a: { a: 0, k: [0, 0] },
//               s: {
//                 a: 1,
//                 k: [
//                   {
//                     i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
//                     o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
//                     t: 0,
//                     s: [0, 0, 100],
//                   },
//                   { t: 30, s: [100, 100, 100] },
//                 ],
//               },
//               r: { a: 0, k: 0 },
//               o: { a: 0, k: 100 },
//               sk: { a: 0, k: 0 },
//               sa: { a: 0, k: 0 },
//               nm: "Transform",
//             },
//           ],
//           nm: "Confetti",
//           np: 3,
//           cix: 2,
//           bm: 0,
//           ix: 1,
//           mn: "ADBE Vector Group",
//           hd: false,
//         },
//       ],
//       ip: 0,
//       op: 90,
//       st: 0,
//       bm: 0,
//     },
//   ],
//   markers: [],
// };

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "MongoDB", "Typescript"];
  const rightLists = ["SQL", "NextJS", "TailwindCSS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "abdullahabbad916@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div
        className={`${
          id === 6 ? "flex flex-col items-center justify-center" : ""
        } h-full`}
      >
        {id !== 6 && (
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
                loading="lazy"
              />
            )}
          </div>
        )}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && id !== 6 && (
            <img
              src={spareImg}
              alt={spareImg}
              loading="lazy"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* {id === 6 && (
            // add background animation , remove the p tag
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )} */}
          {id === 6 && (
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-2 text-center">
              <div className="relative z-50">
                <MagicButton
                  title="Copy my email address"
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <span>Email is Copied!</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </>
                  ) : (
                    "Copy my email address"
                  )}
                </MagicButton>
                {copied && (
                  <div className="absolute top-0 right-20 -z-1">
                    <Lottie
                      options={{
                        loop: false,
                        autoplay: true,
                        animationData,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
                      height={400}
                      width={400}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
