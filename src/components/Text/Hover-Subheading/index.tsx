import { ButtonProps, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface TitleHoverProps extends ButtonProps {
  title: string
}

const TitleHover: React.FC<TitleHoverProps> = ({ title }) => {
  const [titleHovered, setTitleHovered] = useState(false);
  return (
    <Link style={{ textDecoration: 'none' }}>
      <Text
        size='md'
        color={titleHovered ? 'gray.500' : 'gray.700'}
        onMouseEnter={() => setTitleHovered(true)}
        onMouseLeave={() => setTitleHovered(false)}
      >
        {title}
      </Text>
    </Link>
  );
};

export default TitleHover;