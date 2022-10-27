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
  HStack,
  menuButton,
  IconButton,
  useColorMode,
  Center,
  Spacer,
  Icon,
  Circle,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useAnimation, motion } from 'framer-motion';
import {
  FaLinkedinIn,
  FaGithub,
  FaTruck,
  FaCanadianMapleLeaf,
} from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';

import { BsLaptop } from 'react-icons/bs';

import Stack from './Stack';

const glassColor = {
  light: '#fefefecc',
  dark: '#20202077',
};

// animation motion Box
const MotionBox = motion(Box);

const ContactFooter = () => {
  const sectionGlassColor = useColorModeValue(
    glassColor.light,
    glassColor.dark
  );

  return (
    <>
      <Box
        w="100%"
        bgImage="/green_gear.jpg"
        bgPosition={['100%', '40%', '40%', '30%']}
        bgSize={['600%', '480%', '220%', '170%']}
        bgRepeat="no-repeat"
      >
        <Box py={['2.5rem', '2.5rem', '2.5rem', '2.5rem']}>
          <Container
            maxW={['90vw', '85vw', 'container.md', 'container.lg']}
            bgColor={sectionGlassColor}
            borderRadius="2.5rem"
            boxShadow="xl"
            backdropFilter="auto"
            backdropBlur="6px"
            d="flex"
            flexDirection={['column', 'column', 'row', 'row']}
            p={['1.5rem', '1.5rem', '2rem', '2.5rem']}
            py={['4.5rem']}
          >
            <Box p={['.75rem', '1rem', '1.25rem', '1.5rem']}>
              <Center>
                <Heading
                  p={['.75rem', '1rem', '1.25rem', '1.5rem']}
                  className="crgrBgTxt"
                >
                  Contact
                </Heading>
              </Center>

              <Text pt={['.75rem', '1rem', '1.25rem', '1.5rem']}>
                Feel free to contact me for more information regarding what I
                do.
              </Text>
              <Text py={['.75rem', '1rem', '1rem', '1.5rem']}>
                Shoot me an email if you are interested in working with me.
              </Text>
              <Text
                d="inline"
                pt={['.75rem', '1rem', '1rem', '1.5rem']}
                pb={['.75rem', '1rem', '1rem', '1.5rem']}
                className="crgrBgTxt"
              >
                Email: &nbsp;
              </Text>
              <NextLink href="mailto:mehultw.work@gmail.com">
                <Text d="inline" cursor="pointer" className="prgrBgTxt">
                  mehultw.work@gmail.com
                </Text>
              </NextLink>
              <Box
                d="flex"
                flexDirection={['column', 'column', 'column', 'row']}
                gap="0.75rem"
                py="1.75rem"
              >
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NextLink href="https://www.linkedin.com/in/mehultw/">
                    <Box
                      bgColor={sectionGlassColor}
                      borderRadius="xl"
                      boxShadow="xl"
                      backdropFilter="auto"
                      backdropBlur="6px"
                      py={['0.25rem', '0.5rem', '0.75rem', '0.5rem']}
                      maxH="2.75rem"
                      minW="9rem"
                      px={['', '', '0.75rem', '1rem']}
                      _hover={{ color: 'linkedin.500' }}
                      cursor="pointer"
                    >
                      <Center>
                        <Box d="inline">
                          <Icon as={FaLinkedinIn} />
                        </Box>
                        <Box d="inline" px="1rem">
                          <Text d="inline">LinkedIn</Text>
                        </Box>
                      </Center>
                    </Box>
                  </NextLink>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NextLink href="https://github.com/mehultw-cs">
                    <Box
                      bgColor={sectionGlassColor}
                      borderRadius="xl"
                      boxShadow="xl"
                      backdropFilter="auto"
                      backdropBlur="6px"
                      px={['', '', '0.75rem', '1rem']}
                      py={['0.25rem', '0.5rem', '0.75rem', '0.5rem']}
                      maxH="2.75rem"
                      minW="9rem"
                      _hover={{ color: 'whatsapp.500' }}
                      cursor="pointer"
                    >
                      <Center>
                        <Box d="inline">
                          <Icon as={FaGithub} />
                        </Box>
                        <Box d="inline" px="1rem">
                          <Text d="inline">Github 1</Text>
                        </Box>
                      </Center>
                    </Box>
                  </NextLink>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NextLink href="https://github.com/mehultw">
                    <Box
                      bgColor={sectionGlassColor}
                      borderRadius="xl"
                      boxShadow="xl"
                      backdropFilter="auto"
                      backdropBlur="6px"
                      py={['0.25rem', '0.5rem', '0.75rem', '0.5rem']}
                      maxH="2.75rem"
                      px={['', '', '0.75rem', '1rem']}
                      _hover={{ color: 'whatsapp.500' }}
                      minW="9rem"
                      cursor="pointer"
                    >
                      <Center>
                        <Box d="inline">
                          <Icon as={FaGithub} />
                        </Box>
                        <Box d="inline" px="1rem">
                          <Text d="inline">Github 2</Text>
                        </Box>
                      </Center>
                    </Box>
                  </NextLink>
                </MotionBox>
              </Box>
              <Box>
                <HStack gap="0.75rem" justify="space-around" w="100%">
                  <Box>
                    <Icon
                      d="inline"
                      ml={['1rem', '', '', '']}
                      as={IoIosPin}
                      boxSize="2rem"
                    />
                    <Text d="inline" px="0.5rem" pt="0.25rem">
                      SW Ontario
                    </Text>
                  </Box>
                  <Box>
                    <Icon
                      d="inline"
                      ml={['1.25rem', '', '', '']}
                      as={BsLaptop}
                      boxSize="2rem"
                    />

                    <Text d="inline" px="0.5rem" pt="0.25rem">
                      Remote
                    </Text>
                  </Box>

                  <Box>
                    <Icon
                      d="inline"
                      ml={['1.3rem', '', '', '']}
                      as={FaCanadianMapleLeaf}
                      boxSize="2rem"
                    />

                    <Text d="inline" px="0.5rem" pt="0.25rem">
                      Canada
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box>
              <Center>
                <Image
                  borderRadius="2xl"
                  boxShadow="xl"
                  alt="Mehul Tanwar headshot from Bloxo Inc. time."
                  m="1rem"
                  mx={['1.5rem', '1.5rem', '1.5rem', '1.5rem']}
                  my={['1.5rem', '1.5rem', '50%', '15%']}
                  src="/BloxoHeadshotSq.jpg"
                  maxW={['70vw', '70%', '30vw', '22rem', '22rem']}
                />
              </Center>
            </Box>
          </Container>

          <Center my="2.5rem">
            <Box
              w="88%"
              bgColor={sectionGlassColor}
              borderRadius="xl"
              boxShadow="xl"
              backdropFilter="auto"
              backdropBlur="6px"
              py={['', '', '', '1.5rem']}
            >
              <Stack />
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default ContactFooter;
