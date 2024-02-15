import React from 'react';
import { Box, Center, Divider, Flex, Heading, Image, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import SearchBar from '../../SearchBar';


interface WithSignUpProps {
  title: string;
  subtext: string;
  imageUrl: string;
  showDivider?: boolean;
}

const WithSignUp: React.FC<WithSignUpProps> = ({
  title,
  subtext,
  imageUrl,
  showDivider = true,
}) => {

  const dividerColor = useColorModeValue('gray.800', 'gray.700');

  return (
    <Flex align="center" justify="space-evenly" p="5%">
      <SimpleGrid columns={1} spacing={3}>
        <Heading mb={2}>
          {title}
        </Heading>
        <Text fontSize="lg">{subtext}</Text>
        <SearchBar placeholder='Enter your email' onSearch={(e) => console.log(e)} />
      </SimpleGrid>
      <Center height='200px'>
        <Divider orientation='vertical' />
      </Center>
      {showDivider && <Box width="1px" height="80%" bg={dividerColor} />}
      <Box maxW="45%">
        <Image src={imageUrl} alt="Hero Image" borderRadius="md" />
      </Box>
    </Flex>
  );
};

export default WithSignUp;


