import { Button, ButtonProps, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

interface WithImageBackgroundProps {
  text: string;
  buttonText: string;
  buttonProps: ButtonProps;
  image: string; // Assume image is a URL for simplicity
}

const WithImageBackground: React.FC<WithImageBackgroundProps> = ({
  text,
  buttonText,
  buttonProps,
  image,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '300px', // Set a minimum height based on your design
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <Flex style={containerStyle}>
      <Heading mb={4}>{text}</Heading>
      <Flex align="center" justify="center">
        <Button {...buttonProps}>{buttonText}</Button>
      </Flex>
    </Flex>
  );
};

export default WithImageBackground;
