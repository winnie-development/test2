import { CheckBoxGroup } from ".";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export const App = () => {
  const handleSelectedValues = (values: string[]) => {
    console.log("Selected values:", values);
  };

  return (
    <div>
      <CheckBoxGroup
        label="Choose options"
        options={options}
        defaultValue={["option1"]}
        onChange={handleSelectedValues}
      />
    </div>
  );
};
