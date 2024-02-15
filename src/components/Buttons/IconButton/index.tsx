import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconButtonProps extends ButtonProps {
  icon: IconType;
  label: string;
}

const IconButton = ({ icon, label, ...rest }: IconButtonProps) => {
  return (
    <Button leftIcon={<Icon as={icon} />} {...rest}>
      {label}
    </Button>
  );
};

export default IconButton;
