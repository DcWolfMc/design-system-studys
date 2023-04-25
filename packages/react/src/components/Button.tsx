import { styled } from "../styles";
import { ComponentProps } from "react";
export const Button = styled("button", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$ignite500",
  border: "1px solid $ignite500",
});

export interface ButtonProps extends ComponentProps<typeof Button> {}
