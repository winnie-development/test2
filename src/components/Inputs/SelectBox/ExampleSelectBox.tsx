import { useState } from "react";
import { Select } from "@chakra-ui/react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const ExampleSelectComponent = ({
  options,
  label,
  placeholder,
  value,
  onChange,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select
      value={selectedValue}
      onChange={handleOnChange}
      placeholder={placeholder}
    >
      {label && <option disabled value="">{label}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default ExampleSelectComponent;
