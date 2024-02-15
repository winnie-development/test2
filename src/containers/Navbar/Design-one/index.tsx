import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import FlatButton from '../../../components/Buttons/FlatButton';
import SearchBar from '../../../components/SearchBar';
import HoverUnderlineButton from '../../../components/Buttons/HoverButton';
import Collapsible from '../../../components/Collapse';
import ColumnTextDisplay from '../../../components/Columns/Text-Column';
import { columns } from '../../../example-texts/navbar/navbar-column-text';

interface INavbarProps {
  spacing: number
}

const Navbar: React.FC<INavbarProps> = ({ spacing }) => {
  return (
    <>
      <Flex as={'header'} position={'fixed'} w={'100%'}>
        <HStack spacing={10} w={'100%'} justifyContent={'space-around'}>
          <FlatButton h={105}>Logo Here</FlatButton>
          <HStack spacing={4}>
            <Collapsible title='New & Featured'>
              <ColumnTextDisplay columns={columns} />
            </Collapsible>
          </HStack>
          <HStack spacing={4}>
            <Collapsible title='Search'>
              <SearchBar placeholder='' onSearch={(value: any) => console.log(value, 'working')} />
            </Collapsible>
            <HoverUnderlineButton>Account</HoverUnderlineButton>
            <HoverUnderlineButton>Bag</HoverUnderlineButton>
          </HStack>
        </HStack >
      </Flex>
    </>
  );
};

export default Navbar;
