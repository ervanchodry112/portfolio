/** @format */
"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex w-full justify-evenly bg-[#1d1e1e] px-4 py-10 text-base text-white *:w-1/5 *:space-y-10 *:p-3 lg:px-72">
      <div>
        <h2 className="text-xl font-bold">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          porro.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Links</h2>
        <ul className="space-y-3 *:flex *:items-center *:gap-1">
          <li className="">
            <Icon icon={"teenyicons:arrow-right-solid"} />
            <Link href="#hero">Home</Link>
          </li>
          <li>
            <Icon icon={"teenyicons:arrow-right-solid"} />
            <Link href="#about-me">About Me</Link>
          </li>

          <li>
            <Icon icon={"teenyicons:arrow-right-solid"} />
            <Link href="#services">Resume</Link>
          </li>
          <li>
            <Icon icon={"teenyicons:arrow-right-solid"} />
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Icon icon={"teenyicons:arrow-right-solid"} />
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="space-y-5">
          <h2 className="text-xl font-bold">Develop with</h2>
          <div className="flex justify-start gap-5 text-4xl">
            <Icon icon={"skill-icons:nextjs-dark"} />
            <Icon icon={"skill-icons:tailwindcss-dark"} />
            <Icon icon={"skill-icons:typescript"} />
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl font-bold">Social Media</h2>
          <div className="flex flex-wrap gap-5 text-4xl">
            <Link href="https://www.linkedin.com/in/ervan-chodry-21b4b31a6/">
              <Icon icon={"mdi:linkedin"} />
            </Link>
            <Link href="https://instagram.com/ervan_chodry">
              <Icon icon={"mdi:instagram"} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCNGhzQWsHAqDLdwgbRjANew">
              <Icon icon={"mdi:youtube"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
