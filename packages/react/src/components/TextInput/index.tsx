import { ComponentProps, FunctionComponent } from "react";
import { Prefix, TextInputContainer, Input } from "./styled";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  prefix,
  ...props
}) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
};
