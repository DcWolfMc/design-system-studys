import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, MultiStep, MultiStepProps } from "@igniteds-ui/react";

// configuração global do componente do Stories
export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={"label"}
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

// configuração do tipo do componente do Stories
export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep:4
    },
  };
  