import { Flex, Heading } from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { IconType } from 'react-icons';

interface CSidebarNavigationItem {
  title?: string;
  routeTo?: string;
  icon?: IconProp | IconType;
}

interface CSidebarProps {
  sidebarNavigationItems: CSidebarNavigationItem[];
}

const CSidebar: React.FC<CSidebarProps> = ({ sidebarNavigationItems }) => {
  return (
    <Flex
      left="2"
      w="400px"
      top="0.5"
      mt="1.5vh"
      align="start"
      pos="absolute"
      bg="ghostwhite"
      flexDir="column"
      justifyContent="space-between"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0,05"
      borderRadius={5}
    >
      <Flex p="5%" flex="column" align="flex-start" as="nav">
        {sidebarNavigationItems.map((navItem) => {
          if (navItem && !navItem.icon && !navItem.routeTo) {
            return (
              <Heading key={navItem.title} size="sm" mt={6} mb={2}>
                {navItem.title}
              </Heading>
            )
          } else if (!navItem) {
            return null;
          }
          return <h1>{navItem.title}-{navItem.routeTo}</h1>
        })}
      </Flex>
      <Flex p="3%" flex="column" align="flex-start" mb={4}>
        {/* User panel to go here */}
      </Flex>
    </Flex>
  )
}

export default CSidebar