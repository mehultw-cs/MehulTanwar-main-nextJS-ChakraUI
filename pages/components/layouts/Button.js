import {
  Box,
  Flex,
  Container,
  Image,
  Center,
  Link,
  LinkOverlay,
  useColorModeValue,
  Heading,
  Text,
} from '@chakra-ui/react';

const Button1 = (props) => {
  <Box
    as="button"
    color={astextColor}
    fontWeight="bold"
    fontSize="lg"
    bgGradient="linear(to-tr,#23922e,#13BB35)"
    px="1.33rem"
    py="1.5"
    borderRadius="3xl"
    boxShadow="lg"
    mx={['0.02rem', '0.02rem', '0.02rem', '0.25rem']}
    transition="all 0.25s ease-in"
    font="Montserrat"
    {...props}
  ></Box>;
};
