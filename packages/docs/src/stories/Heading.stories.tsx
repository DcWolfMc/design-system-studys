import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Typography/Heading",

  component: Heading,

  args: {
    children: "Custom Heading",
  },
} as Meta<HeadingProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<HeadingProps> = {
  args: {},
};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão, o Heading sempre vai ser um `h2`,mas podemos alterá-lo com o comando `as`.",
      },
    },
  },
};
