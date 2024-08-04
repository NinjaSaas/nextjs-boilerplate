import React from "react";
import {
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card"; // Adjust the import path as necessary

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    icon: <CalendarDaysIcon className="h-12 w-12 mb-2 mr-1" />,
    title: "Sample Card Title",
    description: "This is a sample description for the card.",
    buttonText: "Click me",
    intent: "primary",
    size: "default",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["calendar", "phone"],
      mapping: {
        calendar: <CalendarDaysIcon className="h-12 w-12 mb-2 mr-1" />,
        phone: <DevicePhoneMobileIcon className="h-12 w-12 rotate-12" />,
      },
    },
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "large"],
      control: { type: "select" },
    },
    title: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => <Card {...args} />,
};

export const PrimaryCard: Story = {
  args: {
    intent: "primary",
    icon: <CalendarDaysIcon className="h-12 w-12 mb-2 mr-1" />,
    title: "Upcoming Appointments",
    description: "You don't have any appointments scheduled.",
    buttonText: "Schedule Now",
  },
};

export const SecondaryCard: Story = {
  args: {
    intent: "secondary",
    icon: <DevicePhoneMobileIcon className="h-12 w-12 rotate-12" />,
    title: "Contact Information",
    description: "Please ensure your contact details are up to date.",
    buttonText: "Update Profile",
  },
};

export const LargeCard: Story = {
  args: {
    ...PrimaryCard.args,
    size: "large",
  },
};

export const NoDescription: Story = {
  args: {
    ...PrimaryCard.args,
    description: undefined,
  },
};
