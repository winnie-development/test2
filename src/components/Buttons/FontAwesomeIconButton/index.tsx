import { useDisclosure } from '@chakra-ui/react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface FaIconButtonProps {
  arialabel: string
  icon: IconProp
  size?: SizeProp
  cursor?: string
  colour?: string
  hoverColour?: string
  onClick: () => void
}

const FaIconButton: React.FC<FaIconButtonProps> = ({
  arialabel,
  icon,
  size = "lg",
  cursor,
  colour,
  hoverColour = "#319795",
  onClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      color={colour}
      cursor={cursor}
      aria-label={arialabel}
      style={isOpen ? { color: hoverColour } : {}}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onClick={onClick}
    />
  );
};

export default FaIconButton;