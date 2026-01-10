"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/Data/index";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";
import MagicButton from "./ui/magic-button";

const RecentProjects = () => {
  // Pick 6 random projects on each render
  const recentProjects = [...projects]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of {` `}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center py-4 gap-14 mt-10">
        {recentProjects.map((item) => (
          <div
            className="lg:min-h-130 h-115 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              LinkComponent={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[90vw] overflow-hidden h-full mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" loading="lazy" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  loading="lazy"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7">
                <div className="flex items-center -space-x-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                      // style={{
                      //   transform: `translateX(-${5 * index + 2}px)`,
                      // }}
                    >
                      <img
                        src={icon}
                        alt="icon5"
                        className="p-1.5"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-sm text-sm text-purple-300">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/projects">
          <MagicButton
            position="right"
            otherClasses="px-8"
            title="View all projects"
            icon={<FaLocationArrow className="w-3 h-3" />}
          >
            View all projects
          </MagicButton>
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
