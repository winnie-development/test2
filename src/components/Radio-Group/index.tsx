import { useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

export type Option = {
  id: string;
  label: string;
};

type RadioGroupProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

const RadioGroupComponent = ({ options, value, onChange }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <RadioGroup value={selectedValue} onChange={handleChange}>
      <Stack spacing={4}>
        {options.map((option) => (
          <Radio key={option.id} value={option.id}>
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default RadioGroupComponent;