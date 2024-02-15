import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Center, Collapse, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import CSidebar from './sidebar';


const CollapsibleSidebar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex as="header" pos="fixed" justifyContent="space-evenly">
      <Center
        pos="relative"
        w={isOpen ? '238px' : '50px'}
      >
        <IconButton
          aria-label="collapsible siderbar"
          zIndex="1"
          m="5px"
          top="16px"
          onClick={onToggle}
          icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          {... (isOpen ? { right: "10px" } : { left: "0px" })}
        />
        <Collapse in={isOpen} animateOpacity>
          <CSidebar sidebarNavigationItems={[
            {
              title: "test 1",
              routeTo: "test/1"
            },
            {
              title: "test 2",
              routeTo: "test/2"
            },
            {
              title: "test 3",
              routeTo: "test/3"
            },
            {
              title: "test 4",
              routeTo: "test/4"
            },
            {
              title: "test 5",
              routeTo: "test/5"
            },
            {
              title: "test 6",
              routeTo: "test/6"
            },
            {
              title: "test 7",
              routeTo: "test/7"
            },

          ]} />
        </Collapse>
      </Center>
    </Flex>
  );
};

export default CollapsibleSidebar;