/** @format */

"use client";

import Link from "next/link";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter";
import { text } from "stream/consumers";

const Heroes = () => {
  const words = [
    {
      text: `I'm`,
      className: "font-black text-4xl md:text-6xl",
    },
    {
      text: "Ervan",
      className: "text-primaryText",
    },
    {
      text: "Chodry",
      className: "text-primaryText",
    },
  ];

  return (
    <section
      id="hero"
      className="flex h-dvh items-center justify-center overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.3}
          maxSize={1.0}
          particleDensity={150}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="z-10 flex h-full w-full justify-center md:justify-between">
        <div className="my-auto text-center md:text-start">
          <p className="w-full text-lg font-medium text-primaryText md:text-xl">
            Hello!
          </p>
          <TypewriterEffectSmooth
            words={words}
            className="text-4xl font-black md:text-6xl"
          />
          {/* <h1 className="font-black text-4xl md:text-6xl">
						I&apos;m{' '}
						<span className="text-primaryText">
							Ervan Chodry
						</span>
					</h1> */}
          <h2 className="my-2 text-lg font-medium md:my-5 md:text-3xl">
            A Software Engineer
          </h2>
          <div className="*:animation-all mt-5 flex justify-center gap-2 *:duration-150 md:justify-start">
            <Link
              href="#"
              className="h-fit w-fit rounded-lg border-2 border-primaryText bg-primaryText px-3 py-2 text-sm font-medium text-white active:ring-2 active:ring-secondaryText md:text-base"
            >
              Contact Me
            </Link>
            <Link
              href="#"
              className="h-fit w-fit rounded-lg border-2 border-primaryText px-3 py-2 text-sm font-semibold text-primaryText hover:text-white active:ring-2 active:ring-secondaryText md:text-base hover:md:bg-primaryText"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="hidden h-full items-center md:flex">
          <Image
            className=""
            src="/heroes.png"
            width={500}
            height={100}
            alt="Ervan Chodry"
          />
        </div>
      </div>
    </section>
  );
};

export default Heroes;
