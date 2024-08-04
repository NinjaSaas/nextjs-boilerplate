"use client";

import React from "react";
import Image from "next/image";

import NewsletterSubscribe from "@/shared/NewsletterSubscribe";

function PageHome() {
  return (
    <>
      <main className=" container dark:bg-neutral-900 mt-4 ">
        <section className=" dark:bg-neutral-900 flex flex-col-reverse items-center md:block">
          <Image
            width={500}
            height={500}
            src="/images/xera.svg"
            alt="Themeptation "
            className="md:absolute h-96 bottom-20 -right-16 lg:right-5 lg:top-40 w-2/3	 md:w-auto  md:block md:animate-blob "
          />
          <Image
            width={500}
            height={500}
            src="/images/shapes.svg"
            alt="hero"
            className="absolute  md:w-full left-24 bottom-80 md:bottom-24 animate-blob2"
          />
          <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900 content">
            <div className="text-center space-y-10">
              <h3 className="text-lg uppercase tracking-wider text-neutral-500">
                Wellness Awaits: Your Journey to Mental Health Begins Soon!
              </h3>
              <h1 className="font-display text-4xl lg:text-6xl text-primary-900 font-medium font-test">
                Elevate Your Well being with Online Therapy
              </h1>
              <p className="text-lg  tracking-wide mx-12 lg:max-w-3xl lg:mx-auto text-neutral-800">
                Embark on a path to mental well-being with ninjasaas.
                <br />
                We`re under construction. Check back for an update soon. Stay in
                touch!
              </p>
            </div>
            <NewsletterSubscribe />
          </div>
        </section>
      </main>
    </>
  );
}

export default PageHome;
