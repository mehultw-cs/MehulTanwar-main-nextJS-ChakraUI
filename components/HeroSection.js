import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import { WavesLayeredDivider, TriangleMidDivider } from './layouts/SVG';
import Typical from 'react-typical';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

// framer motion hooks

//to check if div is in view

import { useInView } from 'react-intersection-observer';

//use animation from framer motion, trigger animation given view status

import { useAnimation } from 'framer-motion';

//useEffect from react, to use animate effect on trigger of in-view

import { useEffect } from 'react';

const glassColor = {
  light: '#cfcfcf57',
  dark: '#32323257',
};

const nextDividerColor = {
  light: '#fafafa',
  dark: '#171717',
};

const HeroSection = () => {
  const pageGlassColor = useColorModeValue(glassColor.light, glassColor.dark);
  const nextDivColor = useColorModeValue(
    nextDividerColor.light,
    nextDividerColor.dark
  );
  const divPrevColor = useColorModeValue(
    nextDividerColor.light,
    nextDividerColor.dark
  );

  // animation motion Box
  const MotionBox = motion(Box);

  //animation

  // useInView

  const { refHeroContainer, inViewHeroContainer } = useInView();
  const { refHeroButton, inViewHeroButton } = useInView();

  //useEffect

  // motionbox

  return (
    <>
      <Box
        as="herosection"
        id="herosection"
        width="100vw"
        py="4rem"
        bgImage="/hero-min.jpeg"
        d="flex"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition={['center']}
        justify={['center']}
      >
        <Box m="0 auto" maxW={['auto', 'auto', 'auto', '75rem']}>
          <motion.div
            ref={refHeroContainer}
            initial={{ opacity: 0, y: '-2vh', x: '-2vw' }}
            animate={{ opacity: 1, y: '0', x: '0' }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: 'spring',
              bounce: '0.3',
            }}
          >
            <Box
              as="herocontainer"
              display="flex"
              flexDirection="column"
              height={['50vh', '42vh', '38vh', '44vh', '40vh']}
              width={['95vw', '64vw', '53vw', '39vw']}
              py={['2.5rem', '2.5rem']}
              px={['1.5rem', '2rem', '2rem', '2.5rem']}
              mt={['22rem', '18rem', '18rem', '18rem']}
              mb={['8rem', '10rem', '10rem', '18rem']}
              ml={['0.25rem', '14rem', '19rem', '29rem', '35rem']}
              bgColor={pageGlassColor}
              styles={{ 'backdrop-Filter': 'blur(1.5rem)' }}
              borderRadius="3rem"
              backdropFilter="auto"
              backdropBlur="4.5px"
              boxShadow="xl"
            >
              <Heading fontSize="3xl" mt=".75rem">
                Hi, I&apos;m&nbsp;
                <Text fontSize="3xl" display="inline" className="trgrBgTxt">
                  Mehul Tanwar
                </Text>
              </Heading>
              <Box className="typical">
                I&apos;m a &nbsp;
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'Software Engineer 👨🏽‍💻',
                    1500,
                    'Web Application Developer 💻',
                    1750,
                    'Computer Scientist 🖥',
                    1650,
                    'Front-end Architect 🏛',
                    1500,
                    'UI / UX Designer 🎨',
                    1750,
                    'Interested Photographer 📷',
                    1500,
                    'Keen Stargazer 🌌',
                    1600,
                    'PC Gamer 🎮',
                    1500,
                  ]}
                ></Typical>
              </Box>
              <Text>
                This is a personal portfolio website which gives you a glimpse
                of me. I created this project for potential employers, future
                colleagues and friends. This is mostly verbose and 100%
                authentic.
              </Text>
              <Text> &nbsp;</Text>
              <Text>This website is being developed while deployed..</Text>

              <Center>
                <Box
                  p={['1.75rem', '1.74rem', '2rem', '2rem']}
                  pt={['', '', '', '2.5rem']}
                >
                  <motion.div
                    initial={{ opacity: 0, y: '0', x: '-2vw' }}
                    animate={{ opacity: 1, y: '0', x: '0' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9,
                      type: 'spring',
                      bounce: '0.3',
                    }}
                  >
                    <NextLink href="#about" passHref>
                      <MotionBox
                        as="a"
                        px={['1.75rem', '2.25rem', '2.5rem', '2.75rem']}
                        py={['0.8rem', '0.9rem', '0.8rem', '1rem']}
                        borderRadius={['4rem', '4rem', '4rem', '4rem']}
                        fontWeight="bold"
                        fontSize="lg"
                        bgGradient="linear(to-tr,#23922e,#13BB35)"
                        boxShadow="lg"
                        mx={['0.02rem', '0.02rem', '0.02rem', '0.25rem']}
                        transition="all 0.25s ease-in"
                        font="Montserrat"
                        _active={{
                          color: 'white',
                          textDecoration: 'underline',
                          fontWeight: 'bold',
                        }}
                        _visited={{
                          color: 'white',
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Learn More
                      </MotionBox>
                    </NextLink>
                  </motion.div>
                </Box>
              </Center>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Bottom Divider */}

      <Box height="50%" mt="-25vh">
        <svg
          width="200%"
          height="30vh"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.28 2.17"
          preserveAspectRatio="none"
        >
          <path
            d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z"
            fill={nextDivColor}
          />
          <path
            d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z"
            opacity={0.5}
            fill={nextDivColor}
          />
          <path
            d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z"
            opacity={0.5}
            fill={nextDivColor}
          />
        </svg>
      </Box>
    </>
  );
};

export default HeroSection;
