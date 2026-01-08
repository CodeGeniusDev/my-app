import React from "react";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-14" id="contact">
      <div className="w-full">
        <div className="absolute left-0 bottom-0 w-full h-full">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 object-cover -z-80"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center relative">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple-300">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos; s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:contact@abdullahabbad916.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="px-8"
            >
              Let's get in touch
            </MagicButton>
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <div className="flex items-center">
            <p className="text-white md:mt-10 my-5 text-center font-semibold">
              Copyright © {new Date().getFullYear()} Abdullah Abbad
            </p>
          </div>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <Link 
                key={profile.id}
                href={profile.link} 
                target="_blank"
                className="w-10 h-10 flex justify-center items-center"
              >
                <div
                  className="w-full h-full cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-gray-900 border border-gray-700 bg-opacity-20 rounded-lg"
                >
                  <img
                    src={profile.img}
                    alt={profile.id.toString()}
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
