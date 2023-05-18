import {
  ComponentProps,
  ElementRef,
  FunctionComponent,
  forwardRef,
} from "react";
import { Prefix, TextInputContainer, Input } from "./styled";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput: FunctionComponent<TextInputProps> = forwardRef<
  ElementRef<typeof Input>,
  TextInputProps
>(({ prefix, ...props }, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  );
});

TextInput.displayName = "TextInput";
