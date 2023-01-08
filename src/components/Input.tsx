import { IInputProps, Input } from "native-base";

type Props = IInputProps & {
    errorMessage?: string | null;
}

export default function InputNumber( { errorMessage = null ,isInvalid ,...rest}: Props){

    const invalid = !!errorMessage || isInvalid;

    return (
        <Input 
              bg="trasnparent"
              placeholderTextColor={"#585779"}
              color="gray.400"
              fontSize="20"
              fontFamily="Montserrat_500Medium"
              h={12}
              w={100}
              borderWidth = {3}
              borderColor= "rgba(0, 0, 0, 0.25)"
              _invalid={{
                borderColor: 'red.500'
              }}
              {...rest}
            />
    );
}