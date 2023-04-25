import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Typography/Text",

  component: Text,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nam eius modi consequatur quam perspiciatis rerum dolores laborum ipsa. Eius corrupti exercitationem natus, rem voluptas adipisci eos reiciendis dolorum excepturi.",
  },
} as Meta<TextProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<TextProps> = {
  args: {
  },
};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children:"Strong Text",
        as: "strong",
    },
  };
  