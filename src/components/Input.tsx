import { FormControl, IInputProps, Input } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";

type Props = IInputProps & {
    errorMessage?: string | null;
}

export default function InputNumber( { errorMessage,isInvalid ,...rest}: Props){

    const invalid = !!errorMessage || isInvalid;

    return (
      <FormControl isInvalid={invalid}>
        <Input 
          isInvalid={invalid}
          bg="trasnparent"
          placeholderTextColor={"coolGray.500"}
          color="#121313"
          fontSize="20"
          borderWidth = {3}
          borderColor= "#121313"
          _invalid={{
            borderColor: 'red.500',
            color: 'red.500',
            size: '20',
          }}
          {...rest}
        />
        <FormControl.ErrorMessage>
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    );
}