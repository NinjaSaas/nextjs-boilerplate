import type { Meta, StoryObj } from "@storybook/react";

import CustomSelect from "./index";

const meta: Meta<typeof CustomSelect> = {
  title: "CustomSelect",
  component: CustomSelect,
  args: {
    className: "",
    sizeType: "md",
    intent: "primary",
    options: [
      {
        id: "1",
        label: "Option 1",
        value: "1",
        defaultChecked: true,
      },

      {
        id: "2",
        label: "Option 2",
        value: "2",
        defaultChecked: false,
      },
    ],
  },
  argTypes: {
    intent: {
      options: ["primary"],
      control: { type: "select" },
    },
    sizeType: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    className: {
      control: { type: "text" },
    },
  },
};

type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {
  render: (args) => <CustomSelect {...args} />,
};

export default meta;
