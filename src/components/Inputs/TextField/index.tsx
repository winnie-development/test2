import React from 'react';
import { FormControl, FormLabel, Input, InputProps, FormErrorMessage } from '@chakra-ui/react';

interface InputBoxProps extends InputProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  isRequired?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ label, helperText, error, isRequired, ...rest }) => {
  return (
    <FormControl isInvalid={error} isRequired={isRequired}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input {...rest} />
      {helperText && <FormErrorMessage>{helperText}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputBox;