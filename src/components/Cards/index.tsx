import React, { useState } from 'react';
import { Text, CardBody, Stack, Card, } from '@chakra-ui/react';
import CardImage from './Card-Icon';
import TitleHover from '../Text/Hover-Title';

interface CardProps {
  imageSrc: string;
  heading: string;
  hasModal?: boolean;
}

const CardW: React.FC<CardProps> = ({ imageSrc, hasModal, heading }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card maxW='md'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          top: isHovered ? '-10px' : '0px',
          transition: 'top ease 0.5s',
          boxShadow: 'none'
        }}
      >
        <CardBody>
          <CardImage additionalHover={() => setIsHovered(false)} onSearchIconClick={() => console.log('ayyy')} hasModal={hasModal} imageSrc='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
          <Stack mt='6' spacing='2'>
            <TitleHover title="Living room sofa" />
            <Text>
              You want one line here that can stretch onto possibly a second but I wouldn't go crazy
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>

  );
};

export default CardW;
