import { Flex } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import FlatButton from '.';

const ButtonExample = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <FlatButton color="blue" size="lg">
        Click me!
      </FlatButton>
      <FlatButton color="green" size="md" icon={FaUser}>
        Login
      </FlatButton>
      <FlatButton color="red" size="sm">
        Delete
      </FlatButton>
    </Flex>
  );
};

export default ButtonExample;
