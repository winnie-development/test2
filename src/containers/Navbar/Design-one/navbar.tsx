import React from 'react';
import { Box, HStack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import HoverUnderlineButton from '../../../components/Buttons/HoverButton';
import SearchBar from '../../../components/SearchBar';

interface NavigationBarButton {
  label: string;
  onClick: () => void;
}

interface NavigationBarProps {
  buttons: NavigationBarButton[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ buttons }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
      pl={8}
      pr={8}
      pt={6}
      pb={6}
      borderRadius="md"
      transition="all 0.35s"
      position="relative"
      zIndex={1}
      width="100%"
    >
      <HStack spacing={3} align="stretch" justify="flex-end">
        {buttons.map((button, index) => (
          <HoverUnderlineButton key={index} onClick={isOpen ? onClose : onOpen}>
            {button.label}
          </HoverUnderlineButton>
        ))}
      </HStack>

      {isOpen && (
        <Box
          bg={'white'}
          boxShadow="md"
          p={4}
          borderRadius="md"
          position="absolute"
          top="100%"
          left={0}
          right={0}
          transition="all 0.3s"
          width="100%" // Set width to 100
        >
          <Box>
            <SearchBar autoFocus placeholder='' onSearch={(value: any) => console.log(value, 'working')} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavigationBar;
