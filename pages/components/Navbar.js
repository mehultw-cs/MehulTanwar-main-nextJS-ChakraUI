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
import NextLink from 'next/link';
import ColorSwitch from './ColorModeSwitch';
import styled from '@emotion/styled';
import mtTheme1 from '../../styles/theme';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';
import { RiMenu5Fill } from 'react-icons/ri';
import { useState } from 'react';
import { CloseIcon } from 'react-icons';

const navBg = {
  light: '#fafafaa8',
  dark: '#171717db',
};

const textColor = {
  light: '#272727',
  dark: '#fafafa',
};

const NavBar = () => {
  const navBgColor = useColorModeValue(navBg.light, navBg.dark);
  const astextColor = useColorModeValue(textColor.light, textColor.dark);
  const [display, changeDisplay] = useState('none');
  return (
    <>
      <Flex
        as="navBar"
        bgColor={navBgColor}
        color={astextColor}
        backdropFilter="auto"
        backdropBlur="4.65px"
        borderRadius="4rem"
        height="4rem"
        width={['0', '0', '100vw', '98vw']}
        px="1.75rem"
        boxShadow="lg"
        alignItems="center"
        justifyContent="center"
        position="fixed"
        d={['none', 'none', 'none', 'flex']}
        mx="1rem"
        mt="0.01rem"
        top="1rem"
        z-index="30"
        overflow="hidden"
      >
        {/* Logo/ Name        */}
        <Flex>
          <Center>
            <NextLink href="/" passHref>
              <Text
                as="a"
                bgGradient="radial( #3ac6e4, #225df4)"
                bgClip="text"
                fontSize={['2xl', '2xl', '3xl', '3xl']}
                fontWeight="bold"
                _hover={{
                  bgGradient: 'radial( #225df4,#3ac6e4)',
                  bgClip: 'text',

                  fontWeight: 'bold',
                }}
              >
                &#60;&#123;.MT/&#125;&#62;
              </Text>
            </NextLink>
          </Center>
        </Flex>

        <Spacer />

        {/* Links */}
        <Flex justifyContent="space-between">
          <NextLink href="/life" passHref>
            <Box
              as="a"
              p={[1, 2, 4, 5]}
              fontWeight="semibold"
              _hover={{ color: 'red.500' }}
              _active={{
                color: 'red.500',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Life
            </Box>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Box
              as="a"
              p={[1, 2, 4, 5]}
              fontWeight="semibold"
              _hover={{ color: useColorModeValue('#D95F02', '#ECB543') }}
              _active={{
                color: useColorModeValue('#D95F02', '#ECB543'),
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Blog
            </Box>
          </NextLink>
          <NextLink href="/photography" passHref>
            <Box
              as="a"
              p={[1, 2, 4, 5]}
              fontWeight="semibold"
              _hover={{ color: useColorModeValue('#13BB35', '#23922E') }}
              _active={{
                color: 'green.400',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Photoraphy
            </Box>
          </NextLink>
          <NextLink href="/academics" passHref>
            <Box
              as="a"
              p={[1, 2, 4, 5]}
              fontWeight="semibold"
              _hover={{ color: useColorModeValue('#7D18CD', '#6929F0') }}
              _active={{
                color: useColorModeValue('#7D18CD', '#6929F0'),
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Academics
            </Box>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Box
              as="a"
              p={[1, 2, 4, 5]}
              fontWeight="semibold"
              _hover={{ color: '#007EE9' }}
              _active={{
                color: '#007EE9',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Projects
            </Box>
          </NextLink>
          <NextLink href="/work" passHref>
            <Box
              as="a"
              p={[1, 2, 4, 5]}
              fontWeight="semibold"
              _hover={{ color: 'blue.600' }}
              _active={{
                color: 'blue.600',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Work
            </Box>
          </NextLink>
        </Flex>

        <Spacer />

        {/* Buttons, switches, media links */}
        <Flex>
          <NextLink href="mailto:mehultw.work@gmail.com">
            <Center
              cursor="pointer"
              p={[2, 2.5, 4, 4]}
              bgColor={useColorModeValue('#fafafa45', '#171717a9')}
              backdropFilter="auto"
              borderRadius="3xl"
              ml="0.75rem"
            >
              <Icon as={MdEmail} _hover={{ color: 'whatsapp.500' }}></Icon>
            </Center>
          </NextLink>
          <NextLink href="https://linkedin.com/mehultwdi">
            <Center
              cursor="pointer"
              p={[2, 2.5, 4, 4]}
              bgColor={useColorModeValue('#fafafa45', '#171717a9')}
              backdropFilter="auto"
              borderRadius="3xl"
              ml="0.75rem"
            >
              <Icon as={FaLinkedinIn} _hover={{ color: 'linkedin.500' }}></Icon>
            </Center>
          </NextLink>
          <NextLink href="https://github.com/mehultwdi">
            <Center
              cursor="pointer"
              p={[2, 2.5, 4, 4]}
              bgColor={useColorModeValue('#fafafa45', '#171717a9')}
              backdropFilter="auto"
              borderRadius="3xl"
              ml="0.75rem"
            >
              <Icon
                as={FaGithub}
                _hover={{ color: 'whatsapp.500', scale: '2' }}
              ></Icon>
            </Center>
          </NextLink>
          <Center
            cursor="pointer"
            ml={['0.5rem', '0.5rem', '0.5rem', '0.25rem']}
          >
            <ColorSwitch />
          </Center>
          <Center>
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
            >
              Résumé
            </Box>
          </Center>
        </Flex>
      </Flex>

      {/* Mobile Home Link */}
      <NextLink href="/" passHref>
        <Flex
          bgColor={navBgColor}
          color={astextColor}
          backdropFilter="auto"
          backdropBlur="4.65px"
          borderRadius="4rem"
          top="89vh"
          
          d={['flex', 'flex', 'flex', 'none']}
          z-index="10"
          left={'40vw'}
          position="fixed"
          justifyContent="center"
          alignItems="center"
          width="8rem"
          height="8rem"
          cursor="pointer"
          boxShadow="lg"
        >
          <Center>
            <Text
              as="a"
              bgGradient="radial( #3ac6e4, #225df4)"
              bgClip="text"
              fontSize={['2xl', '2xl', '3xl', '3xl']}
              fontWeight="bold"
              _hover={{
                bgGradient: 'radial( #225df4,#3ac6e4)',
                bgClip: 'text',

                fontWeight: 'bold',
              }}
            >
              &#60;&#123;.MT/&#125;&#62;
            </Text>
          </Center>
        </Flex>
      </NextLink>

      {/* Menu button */}
      <Flex
        bgColor={navBgColor}
        color={astextColor}
        backdropFilter="auto"
        backdropBlur="4.65px"
        borderRadius="4rem"
        d={['flex', 'flex', 'flex', 'none']}
        z-index="10"
        left="90vw"
        position="fixed"
        justifyContent="center"
        alignItems="center"
        width="2.5rem"
        height="2.5rem"
        cursor="pointer"
        boxShadow="2xl"
        top="94.5vh"
        scale="2.5"
        aria-label="Menu Toggle"
        onClick={() => changeDisplay('flex')}
      >
        <RiMenu5Fill />
      </Flex>

      {/* Mobile Menu */}
      <Flex>
        <Flex
          bgColor={navBgColor}
          color={astextColor}
          backdropFilter="auto"
          backdropBlur="8px"
          borderRadius="sm"
          px="1.75rem"
          boxShadow="lg"
          alignItems="center"
          justifyContent="space-around"
          width={['100vw', '100vw', '100vw', '98vw']}
          height={['100vh', '100vh', '100vh', '100vh']}
          top="0"
          left="0"
          position="fixed"
          mx="auto"
          d={display}
          z-index="20"
          overflow="auto"
          flexDirection="column"
        >
          <Spacer />
          <IconButton
            aria-label="Close Menu"
            size="xl"
            icon={<MdClose />}
            variant="link"
            left="40vw"
            mb="2rem"
            onClick={() => changeDisplay('none')}
          />

          {/* Logo/ Name        */}
          <Flex>
            <Center>
              <NextLink href="/" passHref>
                <Text
                  as="a"
                  bgGradient="radial( #3ac6e4, #225df4)"
                  bgClip="text"
                  fontSize={['2xl', '2xl', '3xl', '3xl']}
                  fontWeight="bold"
                  _hover={{
                    bgGradient: 'radial( #225df4,#3ac6e4)',
                    bgClip: 'text',

                    fontWeight: 'bold',
                  }}
                >
                  &#60;&#123;.MT/&#125;&#62;
                </Text>
              </NextLink>
            </Center>
          </Flex>

          <Spacer />

          {/* Links */}
          <Flex justifyContent="space-between" flexDirection="column">
            <NextLink href="/life" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _hover={{ color: 'red.500' }}
                _active={{
                  color: 'red.500',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Life
              </Box>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _hover={{ color: useColorModeValue('#D95F02', '#ECB543') }}
                _active={{
                  color: useColorModeValue('#D95F02', '#ECB543'),
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Blog
              </Box>
            </NextLink>
            <NextLink href="/photography" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _hover={{ color: useColorModeValue('#13BB35', '#23922E') }}
                _active={{
                  color: 'green.400',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Photoraphy
              </Box>
            </NextLink>
            <NextLink href="/academics" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _hover={{ color: useColorModeValue('#7D18CD', '#6929F0') }}
                _active={{
                  color: useColorModeValue('#7D18CD', '#6929F0'),
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Academics
              </Box>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _hover={{ color: '#007EE9' }}
                _active={{
                  color: '#007EE9',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Projects
              </Box>
            </NextLink>
            <NextLink href="/work" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _hover={{ color: 'blue.600' }}
                _active={{
                  color: 'blue.600',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Work
              </Box>
            </NextLink>
          </Flex>

          <Spacer />

          {/* Buttons, switches, media links */}
          <Flex>
            <NextLink href="mailto:mehultw.work@gmail.com">
              <Center
                cursor="pointer"
                p={[2, 2.5, 4, 4]}
                bgColor={useColorModeValue('#fafafa45', '#171717a9')}
                backdropFilter="auto"
                borderRadius="3xl"
                ml="0.75rem"
              >
                <Icon as={MdEmail} _hover={{ color: 'whatsapp.500' }}></Icon>
              </Center>
            </NextLink>
            <NextLink href="https://linkedin.com/mehultwdi">
              <Center
                cursor="pointer"
                p={[2, 2.5, 4, 4]}
                bgColor={useColorModeValue('#fafafa45', '#171717a9')}
                backdropFilter="auto"
                borderRadius="3xl"
                ml="0.75rem"
              >
                <Icon
                  as={FaLinkedinIn}
                  _hover={{ color: 'linkedin.500' }}
                ></Icon>
              </Center>
            </NextLink>
            <NextLink href="https://github.com/mehultwdi">
              <Center
                cursor="pointer"
                p={[2, 2.5, 4, 4]}
                bgColor={useColorModeValue('#fafafa45', '#171717a9')}
                backdropFilter="auto"
                borderRadius="3xl"
                ml="0.75rem"
              >
                <Icon
                  as={FaGithub}
                  _hover={{ color: 'whatsapp.500', scale: '2' }}
                ></Icon>
              </Center>
            </NextLink>
            <Center
              cursor="pointer"
              ml={['0.5rem', '0.5rem', '0.5rem', '0.25rem']}
            >
              <ColorSwitch />
            </Center>
            <Center>
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
              >
                Résumé
              </Box>
            </Center>
          </Flex>
          <Spacer />
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
