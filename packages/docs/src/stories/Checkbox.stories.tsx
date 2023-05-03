import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    placeholder: "Type your thoughts",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={"label"}
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size={"sm"}>Accept Terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<CheckboxProps> = {
  args: {

  },
};