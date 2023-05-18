import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {
    placeholder: "Type your name",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={"label"}
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Github Adress:</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<TextInputProps> = {
  args: {},
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "github.com/",
    placeholder: "your-username"
  },
};
