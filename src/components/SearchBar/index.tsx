import React, { useEffect, useState } from 'react';
import { Flex, InputGroup, InputRightElement, IconButton, Input, Text, ButtonGroupProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface SearchBarProps extends ButtonGroupProps {
  introText?: string;
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, introText, onSearch, ...props }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const check = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
      return false;
    }
    return true;
  }

  useEffect(() => {
    window.addEventListener('keydown', check)

    return () => {
      window.removeEventListener('keydown', check)
    }
  });



  return (
    <>
      {introText && <Text fontSize="sm">{introText}</Text>}
      <Flex alignItems="center" justifyContent="center" my={4} mt={0}>
        <InputGroup>
          <Input
            type="text"
            variant='flushed'
            focusBorderColor='gray.700'
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            mx={2}
            {...props}
          />
          {/* 20 character limit before overscroll currently */}
          <InputRightElement>
            <IconButton onClick={handleSearch} aria-label='search' bg='none' color='gray.300' _hover={{ bg: 'none', color: 'gray.700' }} icon={<ArrowForwardIcon />} />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default SearchBar;
