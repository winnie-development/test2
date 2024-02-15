import React from 'react';
import { Box, Text, VStack, Divider } from '@chakra-ui/react';

interface Column {
  header: string;
  values: string[];
}

interface ColumnTextDisplayProps {
  columns: Column[];
}

const ColumnTextDisplay: React.FC<ColumnTextDisplayProps> = ({ columns }) => {
  return (
    <Box>
      <VStack spacing={4} align="flex-start">
        {columns.map(({ header, values }, columnIndex) => (
          <VStack key={columnIndex} spacing={1}>
            <Text fontWeight="bold">{header}</Text>
            {values.map((value, valueIndex) => (
              <React.Fragment key={valueIndex}>
                <Text>{value}</Text>
                {valueIndex < values.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </VStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ColumnTextDisplay;
