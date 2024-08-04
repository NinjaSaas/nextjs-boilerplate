import React from "react";
import {
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { Globe2Icon, HeadsetIcon } from "lucide-react";

import Card from "@/components/Card";

export default async function Home() {
  return (
    <main className="min-h-screen container space-x-1 md:space-x-2 mt-4 md:mt-8 pb-12 md:pb-0">
      <Card
        icon={
          <CalendarDaysIcon className="h-12 w-12 mb-2 mr-2 min-w-10 md:min-w-12  " />
        }
        title="At this moment you don't have any more appointments planned."
        buttonText="Make an appointment"
        intent="primary"
      />
      <Card
        icon={
          <DevicePhoneMobileIcon className="h-12 w-12 rotate-12 min-w-10 md:min-w-12" />
        }
        title="How can we contact you?"
        description="Do you have all your contact filled out? If anything happens, our customer support will be able to help you faster."
        buttonText="Fill in the profile"
        intent="secondary"
      />
      <div className="flex flex-col md:flex-row md:gap-10">
        <Card
          title="At this moment you don't have any more appointments planned."
          intent="purple"
          className="md:w-1/2"
          buttonText="Test devices"
        >
          <div className="flex my-4 gap-2">
            <div className="w-auto h-fit p-2 rounded-full bg-white">
              <Globe2Icon className="w-8 h-8 p-1 text-mainRed-6000" />
            </div>
            <p className="font-thin text-primary-6000">
              You don't have to install anything, connect online from your
              browser, or even phone.
            </p>
          </div>
          <div className="flex mt-3 gap-2">
            <div className="w-auto h-fit p-2 rounded-full bg-white">
              <HeadsetIcon className="w-8 h-8 p-1 text-mainRed-6000" />
            </div>
            <p className="font-thin text-primary-6000">
              Most sessions don't have any technical problems. If technology
              makes your session impossible to carry out, we will pay for it.
            </p>
          </div>
        </Card>
        <Card
          title="Want to discover more?"
          description="Do you have all your contact filled out? If anything happens, our customer support will be able to help you faster."
          intent="red"
          className="md:w-1/2 h-fit"
          buttonText="Discover more"
        />
      </div>
    </main>
  );
}
