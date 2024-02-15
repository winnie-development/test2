import React, { ReactNode } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import FaIconButton from '../Buttons/FontAwesomeIconButton';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  customButton?: React.ReactElement;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onClose?: () => void;
  onOpen?: () => void;
  customContent?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  customButton,
  placement = 'left',
  size = 'xs',
  onClose,
  onOpen,
  customContent,
}) => {
  const { isOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  const handleOnOpen = () => {
    if (onOpen) {
      onOpen();
    }
    onDrawerOpen();
  };

  const handleOnClose = () => {
    if (onClose) {
      onClose();
    }
    onDrawerClose();
  };

  const responsiveSize = useBreakpointValue({ base: 'full', md: size });
  return (
    <>
      {customButton ? (
        React.cloneElement(customButton, { onClick: handleOnOpen })
      ) : (
        <FaIconButton onClick={handleOnOpen} icon={faBars} arialabel="hamburger-menu-icon-button" />
      )}

      <Drawer isOpen={isOpen} placement={placement} onClose={handleOnClose} size={responsiveSize}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer Header</DrawerHeader>
          <DrawerBody>
            {customContent || <p>Default Drawer Content</p>}
            {/* Your drawer content goes here */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;

