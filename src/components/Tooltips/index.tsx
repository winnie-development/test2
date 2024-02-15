import { Tooltip, TooltipProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends TooltipProps {
  children: ReactNode;
  label: string;
}

const CustomTooltip = ({ children, label, ...rest }: Props) => {
  return (
    <Tooltip label={label} {...rest}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
