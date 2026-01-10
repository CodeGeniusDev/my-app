"use client";

import { useState } from "react";
import { projects } from "@/Data";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

// Define project categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "portfolio", name: "Portfolio" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "business", name: "Business" },
  { id: "productivity", name: "Productivity" },
  { id: "entertainment", name: "Entertainment" },
];

// Categorize projects
const categorizedProjects = {
  all: projects,
  portfolio: projects.filter((project) =>
    project.title.toLowerCase().includes("portfolio")
  ),
  ecommerce: projects.filter(
    (project) =>
      project.title.toLowerCase().includes("shop") ||
      project.title.toLowerCase().includes("store") ||
      project.title.toLowerCase().includes("e-comm") ||
      project.title.toLowerCase().includes("ecomm") ||
      project.title.toLowerCase().includes("market")
  ),
  business: projects.filter(
    (project) =>
      project.title.toLowerCase().includes("business") ||
      project.title.toLowerCase().includes("crm") ||
      project.title.toLowerCase().includes("finance") ||
      project.title.toLowerCase().includes("management")
  ),
  productivity: projects.filter(
    (project) =>
      project.title.toLowerCase().includes("tracker") ||
      project.title.toLowerCase().includes("task") ||
      project.title.toLowerCase().includes("productivity")
  ),
  entertainment: projects.filter(
    (project) =>
      project.title.toLowerCase().includes("game") ||
      project.title.toLowerCase().includes("quiz") ||
      project.title.toLowerCase().includes("entertainment")
  ),
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects =
    categorizedProjects[activeCategory as keyof typeof categorizedProjects] ||
    [];

  return (
    <div className="py-20 px-4">
      <div className="mb-8 px-14">
        <Link
          href="/"
          className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="text-center mb-12">
        <h1 className="heading mb-6">
          Browse {` `}
          <span className="text-purple-300">Projects</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-purple-900/30 text-white border border-purple-300"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center py-4 gap-14 mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <div
              className="g:min-h-130 h-115 flex items-center justify-center sm:w-96 w-[80vw]"
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
                  className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/20 rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-purple-300 hover:text-white transition-colors"
            >
              View all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
