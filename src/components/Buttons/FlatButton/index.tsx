import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { ElementType } from 'react';

interface FlatButtonProps extends ButtonProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: ElementType;
  children: React.ReactNode
  style?: any
}

const FlatButton: React.FC<FlatButtonProps> = ({
  children,
  color = 'gray',
  size = 'md',
  icon,
  variant = "ghost",
  style,
  ...rest
}) => {
  return (
    <Button
      colorScheme={color}
      size={size}
      variant={variant}
      leftIcon={icon ? <Icon as={icon} /> : undefined}
      style={style}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default FlatButton;
