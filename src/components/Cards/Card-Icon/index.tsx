import React, { useState } from 'react';
import { Box, Image, IconButton, useColorModeValue, Button } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import CustomModal from '../../Modal';

interface ContainerProps {
  imageSrc: string;
  hasModal?: boolean;
  onSearchIconClick: () => void;
  additionalHover: (value: boolean) => void;
}

const CardImage: React.FC<ContainerProps> = ({ imageSrc, hasModal, onSearchIconClick, additionalHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchIconColor = useColorModeValue('gray.500', 'white');

  return (
    <Box
      position="relative"
      borderRadius="8px"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageSrc} alt="Image" width="100%" height="auto" objectFit="cover" />

      {(hasModal && isHovered) ? (
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => { setIsModalOpen(false); setIsHovered(false); additionalHover(false); }}
          modalTitle="Example Modal"
          triggerButton={
            <IconButton
              icon={<FaSearch />}
              aria-label="Search"
              position="absolute"
              top="3"
              right="3"
              bg="transparent"
              color={searchIconColor}
              _hover={{ color: 'gray.700' }}
              onClick={() => setIsModalOpen(true)}
            />
          }
          modalBody={<p>This is the content of the modal.</p>}
          onSave={() => {
            console.log('Save operation completed successfully!');
          }}
          customFooterButtons={[
            <Button key="customButton1">Custom Button 1</Button>,
            <Button key="customButton2">Custom Button 2</Button>,
          ]}
          size="md"
        />
      )
        : (!hasModal && !isHovered) && (
          <IconButton
            icon={<FaSearch />}
            aria-label="Search"
            position="absolute"
            top="3"
            right="3"
            bg="transparent"
            color={searchIconColor}
            _hover={{ color: 'gray.700' }}
            onClick={onSearchIconClick}
          />
        )
      }

    </Box>
  );
};

export default CardImage;
