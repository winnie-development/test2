import { useState } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

interface CheckBoxGroupProps {
  label: string;
  options: any[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
}

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  label,
  options,
  defaultValue = [],
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);

  const handleSelectedValues = (values: string[]) => {
    setSelectedValues(values);
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <CheckboxGroup onChange={handleSelectedValues} value={selectedValues}>
      {label && <label>{label}</label>}
      {options.map((option) => (
        <Checkbox key={option.value} {...option}>
          {option.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};
