import React, { useState } from 'react';
import { Collapse } from '@chakra-ui/react';
import HoverUnderlineButton from '../Buttons/HoverButton';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <HoverUnderlineButton onClick={handleToggle}>
        {title}
      </HoverUnderlineButton>
      <Collapse in={isOpen}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

export default Collapsible;
