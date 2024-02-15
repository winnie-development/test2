import React, { useState } from 'react';
import InputBox from '.';
import { Box } from '@chakra-ui/react';

const ExampleForm: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box p={4}>
      <InputBox label="Name" placeholder="Enter your name" value={value} onChange={handleChange} />
      <InputBox type="email" label="Email" placeholder="Enter your email" isRequired />
      <InputBox type="password" label="Password" placeholder="Enter your password" helperText="Must be at least 8 characters" />
    </Box>
  );
};

export default ExampleForm;