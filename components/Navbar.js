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
import mtTheme1 from '../styles/theme';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';
import { RiMenu5Fill } from 'react-icons/ri';
import { useState } from 'react';
import { CloseIcon } from 'react-icons';

// framer motion hooks

//to check if div is in view

import { useInView } from 'react-intersection-observer';

//use animation from framer motion, trigger animation given view status

import { useAnimation, motion } from 'framer-motion';

//useEffect from react, to use animate effect on trigger of in-view

import { useEffect } from 'react';

const navBg = {
  light: '#fafafaa8',
  dark: '#171717db',
};

const textColor = {
  light: '#272727',
  dark: '#fafafa',
};

// animation motion Box
const MotionBox = motion(Box);

const NavBar = () => {
  const navBgColor = useColorModeValue(navBg.light, navBg.dark);
  const astextColor = useColorModeValue(textColor.light, textColor.dark);
  const [display, changeDisplay] = useState('none');

  const [deskNavRef, deskNavInView] = useInView();

  //animation hook from framer motion

  const growAnimation = useAnimation();

  // useEffect does something

  useEffect(() => {
    console.log('use effect hook, containerInView=', deskNavInView);

    if (deskNavInView) {
      growAnimation.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: 'string',
          duration: 0.785,
          bounce: 0.3,
          delay: 0.2,
        },
      });
    }

    if (!deskNavInView) {
      growAnimation.start({
        scale: 0.65,
        opacity: 0,
      });
    }
  }, [deskNavInView]);

  return (
    <>
      {/* Desktop Nav bar  */}

      <Box id="navwrapper" ref={deskNavRef}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            },
          }}
        >
          <Flex
            as="navbar"
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
                    fontSize={['2xl', '2xl', '3xl', '3xl']}
                    fontWeight="bold"
                    className="trgrBgTxt"
                  >
                    &#60;&#123;.MT/&#125;&#62;
                  </Text>
                </NextLink>
              </Center>
            </Flex>

            <Spacer />

            {/* Links */}
            <Flex justifyContent="space-between">
              {/* <NextLink href="/life" passHref>
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
          </NextLink> */}
              <NextLink href="#education" passHref>
                <Box
                  as="a"
                  ml="5rem"
                  p={[1, 2, 4, 5]}
                  fontWeight="semibold"
                  _active={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                  }}
                  _visited={{
                    fontWeight: 'semibold',
                  }}
                  className="srgrBgTxt"
                >
                  Education
                </Box>
              </NextLink>

              <NextLink href="#skills" passHref>
                <Box
                  as="a"
                  p={[1, 2, 4, 5]}
                  fontWeight="semibold"
                  _active={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                  }}
                  _visited={{}}
                  className="prgrBgTxt"
                >
                  Skills
                </Box>
              </NextLink>
              <NextLink href="#work" passHref>
                <Box
                  as="a"
                  p={[1, 2, 4, 5]}
                  fontWeight="semibold"
                  _hover={{ color: '#13BB35' }}
                  _active={{
                    color: '#13BB35',

                    textDecoration: 'underline',
                    fontWeight: 'bold',
                  }}
                  _visited={{
                    color: '#13BB35',
                  }}
                  className="trgrBgTxt"
                >
                  Work
                </Box>
              </NextLink>
            </Flex>

            <Spacer />

            {/* Buttons, switches, media links */}
            <Flex>
              <NextLink href="mailto:mehultw.work@gmail.com">
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Center
                    cursor="pointer"
                    p={[2, 2.5, 4, 4]}
                    bgColor={useColorModeValue('#fafafa45', '#171717a9')}
                    backdropFilter="auto"
                    borderRadius="3xl"
                    ml="0.75rem"
                  >
                    <Icon
                      as={MdEmail}
                      _hover={{ color: 'whatsapp.500' }}
                    ></Icon>
                  </Center>
                </MotionBox>
              </NextLink>
              <NextLink href="https://www.linkedin.com/in/mehultw/">
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
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
                </MotionBox>
              </NextLink>
              <NextLink href="https://github.com/mehultw-cs">
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
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
                </MotionBox>
              </NextLink>
              <Center
                cursor="pointer"
                ml={['0.5rem', '0.5rem', '0.5rem', '0.25rem']}
              >
                <ColorSwitch />
              </Center>
              <Center>
                <MotionBox
                  as="a"
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
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  _hover={{ color: 'white' }}
                  _active={{ color: 'white' }}
                  _visited={{ color: 'white' }}
                  href="/Mehul's Résumé Oct22_2.pdf"
                  alt="Mehul Tanwar Extended Résumé"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                </MotionBox>
              </Center>
            </Flex>
          </Flex>{' '}
        </motion.div>
      </Box>

      {/* Mobile Home Link */}

      <NextLink href="/" passHref>
        <Flex
          bgColor={navBgColor}
          color={astextColor}
          backdropFilter="auto"
          backdropBlur="4.65px"
          borderRadius="4rem"
          bottom={['-1.5rem', '-1.5rem', '-1rem', '1rem']}
          d={['flex', 'flex', 'flex', 'none']}
          z-index="10"
          position="fixed"
          justifyContent="center"
          left="0.75rem"
          alignItems="center"
          width="8rem"
          height="8rem"
          cursor="pointer"
          boxShadow="lg"
        >
          <Center>
            <Text
              as="a"
              fontSize={['2xl', '2xl', '3xl', '3xl']}
              fontWeight="bold"
              className="trgrBgTxt"
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
            width="2rem"
            icon={<MdClose />}
            variant="link"
            left="40vw"
            isRound="true"
            height="2.5rem"
            bgColor={navBg}
            boxShadow="xl"
            mb="2rem"
            onClick={() => changeDisplay('none')}
          />

          {/* Logo/ Name        */}
          <Flex>
            <Center>
              <NextLink href="/" passHref>
                <Text
                  as="a"
                  bgClip="text"
                  fontSize={['2xl', '2xl', '3xl', '3xl']}
                  fontWeight="bold"
                  className="trgrBgTxt"
                >
                  &#60;&#123;.MT/&#125;&#62;
                </Text>
              </NextLink>
            </Center>
          </Flex>

          <Spacer />

          {/* Links */}
          <Flex justifyContent="space-between" flexDirection="column">
            {/* <NextLink href="/life" passHref>
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
            </NextLink> */}
            <NextLink href="#education" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _active={{
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
                className="srgrBgTxt"
              >
                Education
              </Box>
            </NextLink>
            <NextLink href="#skills" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _active={{
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
                className="prgrBgTxt"
              >
                Skills
              </Box>
            </NextLink>
            <NextLink href="#work" passHref>
              <Box
                as="a"
                p={[1, 2, 4, 5]}
                fontWeight="semibold"
                _active={{
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
                className="trgrBgTxt"
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
            <NextLink href="https://www.linkedin.com/in/mehultw/">
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
            <NextLink href="https://github.com/mehultw-cs">
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
                as="a"
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
                _hover={{ color: 'white' }}
                _active={{ color: 'white' }}
                _visited={{ color: 'white' }}
                href="/Mehul's Résumé Oct22_2.pdf"
                alt="Mehul Tanwar Extended Résumé"
                target="_blank"
                rel="noopener noreferrer"
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
