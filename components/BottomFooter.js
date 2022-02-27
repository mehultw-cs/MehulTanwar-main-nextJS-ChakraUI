import {
  useColorModeValue,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Button,
  Container,
  Link,
  Menu,
  MenuItem,
  menuList,
  menuButton,
  IconButton,
  useColorMode,
  Center,
  Spacer,
  Icon,
  Circle,
} from '@chakra-ui/react';

import ContactFooter from './ContactFooter';

const BottomFooter = () => {
  const copyRightBg = useColorModeValue('#fcfcfc67', '#32323267');
  return (
    <>
      <ContactFooter />
      <Box w="100%" bgColor={copyRightBg}>
        <Center py="0.75rem">
          <Text fontSize="sm">
            Copyright &copy; 2022 Mehul Tanwar. All rights reserved.{' '}
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default BottomFooter;
