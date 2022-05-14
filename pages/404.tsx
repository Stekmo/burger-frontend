import { Container, Text } from '@chakra-ui/react';
import React from 'react';

const Page404 = () => {
  return (
    <Container height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="3xl" fontWeight="bold">404 - Burger Not found :(</Text>
    </Container>
  )
};

export default Page404;
