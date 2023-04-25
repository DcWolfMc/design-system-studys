import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Data display/Avatar",

  component: Avatar,

  args: { src : 'https://github.com/DcWolfMc.png', alt: "Daniel Colares"
 
},
 } as Meta<AvatarProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<AvatarProps> = {
  args: {
  },
};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,

    },
  };
