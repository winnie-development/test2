import { useState } from "react";
import RadioGroupComponent, { Option } from ".";

const ExampleRadioGroup = () => {
    const options: Option[] = [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
      { id: 'option3', label: 'Option 3' },
    ];
  
    const [selectedOption, setSelectedOption] = useState('option1');
  
    const handleSelectOption = (optionId: string) => {
      setSelectedOption(optionId);
    };
  
    return (
      <RadioGroupComponent options={options} value={selectedOption} onChange={handleSelectOption} />
    );
  };
  
  export default ExampleRadioGroup;