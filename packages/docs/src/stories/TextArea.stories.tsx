import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {
    placeholder: "Type your thoughts",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={"label"}
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Observation</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<TextAreaProps> = {
  args: {

  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};