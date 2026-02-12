"use client";
import React from "react";
import { TypewriterEffectSmoothDemo } from "@/components/custom/Typing";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FaGooglePlay } from "react-icons/fa";
import MockUp from "@/../public/mockup.png";
import Link from "next/link";
import Image from "next/image";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Hero = () => {
  const shadowColor = "#95BF74";
  return (
    <>
      <HeroGeometric />
      <Image
        src={MockUp}
        alt="mockup"
        className="absolute z-[2] hidden sm:hidden md:hidden lg:block top-[150px] right-[50px] w-[800px] h-[700px] object-cover float-pulse"
      />
      <div className="w-full h-screen px-5">
        <div className="flex relative flex-wrap container mx-auto h-full items-center justify-between">
          <div className="flex flex-[7] flex-col">
            <h1 className="text-white text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Earn
              <LineShadowText
                className="italic bg-gradient-to-r from-teal-500 to-emerald-700 bg-clip-text text-transparent pr-5"
                shadowColor={shadowColor}
              >
                Charge
              </LineShadowText>
            </h1>
            <div>
              <TypewriterEffectSmoothDemo />
            </div>
            <div className="max-w-[500px] ubuntu-regular text-white">
              <p>
                Recharge is fast and easy to use. So, a user can look for a
                suitable recharge plan and complete the recharge in just a few
                clicks.
              </p>
            </div>
            <div>
              <Link
                href="https://play.google.com/store/apps/details?id=com.earnchargemobile.earncharge"
                className="inline-block"
                target="_blank"
              >
                <span className="text-black items-center gap-4 py-2 px-6 rounded-xl text-lg ubuntu-regular mt-8 flex flex-gap-2 bg-white">
                  <FaGooglePlay /> <span>Google Play</span>
                </span>
              </Link>
            </div>
            <div className="flex flex-row absolute bottom-[120px] px-5 left-0">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[500px] hidden sm:hidden md:hidden lg:flex h-screen meshGradient rounded-l-4xl absolute right-0 top-0 overflow-hidden"></div>
    </>
  );
};

export default Hero;
