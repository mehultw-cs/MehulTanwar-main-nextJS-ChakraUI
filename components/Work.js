import {
  Box,
  Flex,
  Container,
  Image,
  Center,
  Grid,
  GridItem,
  Link,
  LinkOverlay,
  useColorModeValue,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

import workData from './Work.data';

import Tree1ObjectBg from './layouts/SVG';

// framer motion hooks

//to check if div is in view

import { useInView } from 'react-intersection-observer';

//use animation from framer motion, trigger animation given view status

import { useAnimation, motion } from 'framer-motion';

//useEffect from react, to use animate effect on trigger of in-view

import { useEffect } from 'react';

const glassColor = {
  light: '#ffffff87',
  dark: '#22222257',
};

const Work = () => {
  const sectionGlassColor = useColorModeValue(
    glassColor.light,
    glassColor.dark
  );

  //motionBox for button animation

  const MotionBox = motion(Box);

  //ref inView hook

  const [workContainerRef, workContainerInView] = useInView();
  const [workAreaRef, workAreaInView] = useInView();

  //animation hook from framer motion

  const slideNegYAnimation = useAnimation();
  const slidePosYAnimation = useAnimation();

  // useEffect does something

  useEffect(() => {
    console.log('use effect hook, containerInView=', workContainerInView);

    if (workContainerInView) {
      slideNegYAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'string',
          duration: 0.785,
          bounce: 0.3,
          delay: 0.2,
        },
      });
    }

    if (!workContainerInView) {
      slideNegYAnimation.start({
        y: '-2vw',
        opacity: 0,
      });
    }
  }, [workContainerInView]);

  useEffect(() => {
    console.log('use effect hook, headingInView=', workAreaInView);

    if (workAreaInView) {
      slidePosYAnimation.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          duration: 0.785,
          bounce: 0.3,
          delay: 0.2,
        },
      });
    }

    if (!workAreaInView) {
      slidePosYAnimation.start({
        y: '1.25rem',
        opacity: 0,
      });
    }
  }, [workAreaInView]);

  return (
    <>
      <Box pt="5rem" id="work">
        <Box
          bgImage="/tree1.png"
          bgRepeat="no-repeat"
          bgSize={['300%', '200%', '100%', '100%']}
          bgPosition={['center', '', '', '']}
          p="2rem"
          borderRadius="lg"
          my="3.5rem"
        >
          <motion.div animate={slideNegYAnimation}>
            <Container
              ref={workContainerRef}
              backdropFilter="auto"
              backdropBlur="4px"
              boxShadow="lg"
              bgColor={sectionGlassColor}
              borderRadius="xl"
              p="2rem"
              mb="3.5rem"
            >
              <Center>
                <Heading
                  d="block"
                  p={['2rem', '2rem', '2rem', '2rem']}
                  className="trgrBgTxt"
                >
                  Work
                </Heading>
              </Center>
              <Center align="center">
                <Text
                  lineHeight={['2rem', '2rem', '2rem', '2rem']}
                  p={['2rem', '2rem', '2rem', '2rem']}
                >
                  Over the past years I have been working in the technology
                  industry. I love to be in the tech sector, the opportunities
                  are amazing and from all sectors.
                  <Text>
                    I have been working on web applications, particularly in
                    front-end over the last few years. I would love to engage in
                    the same or anything in the Computer Science realm for
                    future projects.{' '}
                  </Text>
                  <Text>
                    Following are the work positions I have had since I came to
                    Canada in 2015.
                  </Text>
                  <Text>
                    It describes the &nbsp;
                    <Text d="inline" color="#23922E">
                      Position &nbsp;
                    </Text>
                    I had , the &nbsp;
                    <Text d="inline" color="#9d002d">
                      Organization &nbsp;
                    </Text>
                    I worked for,{' '}
                    <Text d="inline" color="#ECB543">
                      where &nbsp;
                    </Text>
                    I Worked and &nbsp;
                    <Text d="inline" color="#007EE9">
                      when &nbsp;
                    </Text>
                    I worked.
                  </Text>
                </Text>
              </Center>
            </Container>
          </motion.div>
          <motion.div animate={slidePosYAnimation}>
            <Grid
              ref={workAreaRef}
              width="98vw"
              
              p="2rem"
              mb="1.5rem"
              templateColumns={[
                'repeat(11,75%)',
                'repeat(11,55%)',
                'repeat(11,55%)',
                'repeat(11,55%)',
              ]}
              justify="space-between"
              align="center"
              gap="4rem"
              className="workarea"
            >
              {workData.map((workData, i) => (
                <GridItem
                  as="workCard"
                  align="center"
                  display={['flex']}
                  flexWrap={['', 'wrap']}
                  backdropFilter="auto"
                  backdropBlur="8px"
                  boxShadow="lg"
                  bgColor={sectionGlassColor}
                  borderRadius="xl"
                  m={['', '', '', '2rem']}
                  p={['1.25rem', '2rem', '2rem', '2rem']}
                  mx="auto"
                  mb="3rem"
                  mt="4rem"
                  maxW={['', '', '', '100%']}
                  maxH={['', '', '', '100%']}
                  key={i}
                >
                  <Box>
                    <Center>
                      <Heading
                        as="h5"
                        fontSize="lg"
                        fontWeight="semibold"
                        p={['1rem', '1rem', '1rem', '1rem']}
                        color="#ecb543"
                      >
                        {workData.label}
                      </Heading>
                    </Center>
                    <Heading
                      as="h5"
                      fontSize="lg"
                      fontWeight="semibold"
                      p={['0.75rem', '0.75rem', '0.75rem', '1rem']}
                      color="#9d002d"
                    >
                      {workData.org}
                    </Heading>
                    <Center>
                      <Heading
                        as="h5"
                        fontSize="md"
                        fontWeight="semibold"
                        p={['0.75rem', '0.75rem', '0.75rem', '1rem']}
                        color="#23922E"
                      >
                        {workData.role}
                      </Heading>
                    </Center>
                    <Text
                      fontSize="lg"
                      d="inline"
                      fontWeight="semibold"
                      color="#007ee9"
                    >
                      When:
                    </Text>
                    <Text d="inline" color="#007ee9">
                      {' '}
                      {workData.when}
                    </Text>
                    <Text
                      lineHeight="1.5"
                      p={['0.75rem', '', '0.75rem', '1.75rem']}
                      pt={['1.25rem', '1.5rem', '1.5rem', '1.75rem']}
                    >
                      {workData.data}
                    </Text>
                    {/* <Box
                      w="100%"
                      d="flex"
                      gap="2.5rem"
                      direction={['column', 'column', 'row', 'row']}
                      justify={['', '', '', 'flex-end']}
                      h="100%"
                      p="1rem"
                    >
                      <Image
                        src={workData.img1}
                        boxSize={['', '', '', '25%']}
                        objectFit="cover"
                      />
                      <Image
                        src={workData.img2}
                        boxSize={['', '', '', '25%']}
                        objectFit="cover"
                      />
                      <Image
                        src={workData.img3}
                        boxSize={['', '', '', '25%']}
                        objectFit="cover"
                      />
                    </Box> */}
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </motion.div>
        </Box>{' '}
      </Box>
      {/* Click will open up a div with overlay in background, full page would show 1 photo(or more), title, a description of what you did, maybe some screenshots.  */}
    </>
  );
};

export default Work;
