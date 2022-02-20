// Wraps content of the page in the Inxex.js file, all the page stuff can be built under this Container component.

import react from 'react';
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled'

import ColorModeSwitch from '../ColorModeSwitch'

const Container = ({  children, props  }) => {
return (
  <>
    <Flex
      as="container"
      direction="column"
      alignItems="center"
      m="0 auto"
      maxW={['auto', 'auto', 'auto', '75rem']}
      {...props}
      >
      
      {children}
    </Flex>
  </>
);
}

export default Container;

