import { Tooltip, useDisclosure } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaIconButtonProps } from '.';

interface FaIconButtonWTooltipProps extends FaIconButtonProps {
  tooltipLabel?: string
}

const FaIconButtonWTooltip: React.FC<FaIconButtonWTooltipProps> = ({
  tooltipLabel,
  icon,
  size = "lg",
  cursor,
  colour,
  hoverColour = "#319795",
  onClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Tooltip label={tooltipLabel}>
      <FontAwesomeIcon
        icon={icon}
        size={size}
        color={colour}
        cursor={cursor}
        aria-label={tooltipLabel}
        style={isOpen ? { color: hoverColour } : {}}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default FaIconButtonWTooltip;