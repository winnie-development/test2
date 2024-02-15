import { Button } from "@chakra-ui/react";
import CustomTooltip from ".";

const ExampleTooltips = () => {
  return (
    <CustomTooltip label="This is a tooltip" aria-label="Tooltip">
      <Button>Hover me</Button>
    </CustomTooltip>
  );
};

export default ExampleTooltips;
