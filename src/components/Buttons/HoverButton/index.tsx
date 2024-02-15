import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface HoverUnderlineButtonProps extends ButtonProps { }

const HoverUnderlineButton: React.FC<HoverUnderlineButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Button
      bg='none'
      sx={{
        position: 'relative',
        _hover: {
          _after: {
            transform: 'scaleX(1)',
          },
        },
        _after: {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',
          background: 'gray.700',
          transform: 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease-out',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default HoverUnderlineButton;
