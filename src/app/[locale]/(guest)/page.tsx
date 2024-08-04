import React from "react";
import Image from "next/image";
import logoLightImg from "@/images/hero.jpg";
import { Link } from "@/lib/router-events";
import { Route } from "@/types";

import BackgroundSection from "@/shared/BackgroundSection";
import Button from "@/components/Button";

const KEY_FEATURES = [
  "Book appointments that fit your schedule.",
  " therapy from home",
  "Available in Arabic, French, and English",
];

export default async function Home() {
  return (
    <main className="min-h-[50vh] px-4 md:px-14 2xl:container">
      <div className=" py-16  mt-6">
        <BackgroundSection className="bg-primary-50 isolate hero-wrapper md:h-[46rem] dark:bg-black/20 !max-w-[100vw] !top-0 !rounded-none" />
        <div className=" flex flex-col-reverse md:flex-row gap-10 md:gap-18 justify-between  mb-80">
          <div className="flex-1 relative  md:mt-4">
            <p className="text-center md:hidden md:text-left pr-4 text-lg text-primary-900 ">
              You deserve to be happy.
            </p>
            <h1 className="nc-heading-1 text-center md:text-left  mt-4">
              Elevate Your Well being with Online Therapy
            </h1>
            <p className="text-center md:text-left pr-4 md:text-lg text-primary-900 mt-4">
              Connect with licensed Moroccan therapists from the comfort of your
              home!
            </p>
            <ul className="py-6 md:py-9">
              {KEY_FEATURES.map((item, index) => (
                <li
                  className=" flex  leading-tight mb-4 font-light text-primary-900"
                  key={index}
                >
                  <svg
                    className="nc-check mt-[2px] w-6 mr-4 align-top leading-tight stroke-2 fill-current stroke-current text-secondary-800"
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                  >
                    <path d="M0.5,10.265L8.719,18.5L24.5,2.734L22.234,0.5L8.719,13.999L2.734,8.015L0.5,10.265Z"></path>
                  </svg>
                  <span>
                    {index === 1 && (
                      <marker className="mark-longer mark-green-longer ">
                        Private and secure
                      </marker>
                    )}
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 w-auto md:w-2/3">
              <Link href={"/survey" as Route} className="w-1/2">
                <Button
                  className="self-center w-full max-w-full"
                  size={"spaced"}
                  intent="accent"
                >
                  Get Started Today
                </Button>
              </Link>
              <Link href={"/find-therapist" as Route} className="w-1/2">
                <Button
                  className="self-center w-full max-w-full"
                  size={"spaced"}
                  intent="lightAccent"
                >
                  Find Therapist
                </Button>
              </Link>
            </div>
          </div>
          <div className="heroImg flex-1 md:relative hidden md:block">
            <Image
              src={logoLightImg}
              alt="hero"
              width={600}
              height={600}
              className="h-80 md:h-auto w-screen object-cover object-center md:rounded-xl md:float-right md:w-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
