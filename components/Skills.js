import {
  Box,
  Flex,
  Container,
  Image,
  Center,
  Link,
  LinkOverlay,
  useColorModeValue,
  Button,
  Heading,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

import skillsData from './Skills.data';

// framer motion hooks

//to check if div is in view

import { useInView } from 'react-intersection-observer';

//use animation from framer motion, trigger animation given view status

import { useAnimation, motion } from 'framer-motion';

//useEffect from react, to use animate effect on trigger of in-view

import { useEffect } from 'react';

const sectionBg = {
  light: '#fefefe',
  dark: '#121212',
};
const glassColor = {
  light: '#efefef57',
  dark: '#22222287',
};

const Skills = () => {
  const sectionBgColor = useColorModeValue(sectionBg.light, sectionBg.dark);
  const sectionGlassColor = useColorModeValue(
    glassColor.light,
    glassColor.dark
  );

  // ref triggers inView

  const [containerRef, skillsContainerInView] = useInView();
  const [skillsAreaRef, skillsAreaInView] = useInView();
  const [skillsCardRef, skillsCardInView] = useInView();

  //animation hook from framer motion

  const growAnimation = useAnimation();

  const slideNegYAnimation = useAnimation();
  const slidePosYAnimation = useAnimation();

  // useEffect does something

  useEffect(() => {
    console.log('use effect hook, containerInView=', skillsContainerInView);

    if (skillsContainerInView) {
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

    if (!skillsContainerInView) {
      slideNegYAnimation.start({
        y: '-2vw',
        opacity: 0,
      });
    }
  }, [skillsContainerInView]);

  useEffect(() => {
    console.log('use effect hook, headingInView=', skillsAreaInView);

    if (skillsAreaInView) {
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

    if (!skillsAreaInView) {
      slidePosYAnimation.start({
        y: '1.25rem',
        opacity: 0,
      });
    }
  }, [skillsAreaInView]);

  return (
    <>
      <Box p="5rem" id="skills">
        <Box
          bgImage="/graph_gradient.png"
          bgRepeat="no-repeat"
          bgSize="100%"
          my="10em"
        >
          <Box
            as="skillsection"
            width={'100vw'}
            align="center"
            py={['', '', '2rem', '2rem']}
            // bgImage={'/hexagons.svg'}
            my={['', '', '2rem', '2rem']}
            mb={['', '', '2rem', '5rem']}
            pb={['', '', '2rem', '5rem']}
          >
            <motion.div animate={slideNegYAnimation}>
              <Container
                ref={containerRef}
                backdropFilter={'auto'}
                backdropBlur={'4.5px'}
                boxShadow="lg"
                bgColor={sectionGlassColor}
                p="2rem"
                borderRadius="lg"
                my="3.5rem"
              >
                <Heading
                  p={['2rem', '2rem', '2rem', '2rem']}
                  className="prgrBgTxt"
                >
                  Skills
                </Heading>
                <Center>
                  <Text
                    lineHeight={['2rem', '2rem', '2rem', '2rem']}
                    p={['2rem', '2rem', '2rem', '2rem']}
                  >
                    Here are the development languages I have been using over
                    the past years. I have added progress bars that show you 3
                    things in this order: &nbsp;
                    <Text d="inline" color="#007EE9">
                      Proficiency
                    </Text>
                    ( How well do I know the language) ,{' '}
                    <Text d="inline" color="#ECB543">
                      Experience
                    </Text>
                    (How much have I used it, do I have experience with it), and{' '}
                    <Text d="inline" color="#00F130">
                      Joy
                    </Text>
                    (Do enjoy working with this technology)
                  </Text>
                </Center>
              </Container>
            </motion.div>

            <motion.div animate={slidePosYAnimation}>
              <Box
                as="skillsarea"
                ref={skillsAreaRef}
                display={['flex']}
                flexWrap={['', '']}
                justify="space-between"
                align="center"
                w="98vw"
                
                p="2rem"
                mb="1.5rem"
                className="skillsarea"
              >
                {skillsData.map((skillsData, i) => (
                  <Box
                    id="tile"
                    ref={skillsCardRef}
                    position="relative"
                    width={['12rem', '', '15.5rem', '18rem']}
                    height={['15rem', '', '16.5rem', '20.625rem']}
                    mx={['0.8rem', '', '', '0.8rem']}
                    my={['0.8rem', '', '', '0.8rem']}
                    p={['.85rem', '', '', '3.25rem']}
                    justify="center"
                    align="center"
                    display={['flex']}
                    flexWrap="wrap"
                    backdropFilter={'auto'}
                    backdropBlur={'4.5px'}
                    boxShadow="lg"
                    bgColor={sectionGlassColor}
                    key={i}
                  >
                    <Box justify="center" align="center">
                      <Center>
                        <Image
                          src={skillsData.image}
                          maxWidth="4rem"
                          key={i}
                          preserveAspectRatio="true"
                          m="1.25rem"
                          alt={skillsData.label}
                        ></Image>
                      </Center>
                      <Center>
                        <Heading
                          as="h5"
                          fontSize="md"
                          p={['0.5rem', '0.75rem', '2rem', '0.5rem']}
                          py={['', '0.5rem', '0.75rem', '1rem']}
                          d="block"
                        >
                          {skillsData.label}
                        </Heading>
                      </Center>
                      <Center>
                        <Box
                          d="flex"
                          direction="row"
                          justify="space-between"
                          pt={['1rem', '', '1.5rem', '']}
                        >
                          <CircularProgress
                            value={skillsData.proficiency}
                            color="#007EE9"
                            px="0.25rem"
                          >
                            <CircularProgressLabel>
                              {skillsData.proficiency}
                            </CircularProgressLabel>
                          </CircularProgress>

                          <CircularProgress
                            value={skillsData.experience}
                            color="#ECB543"
                            px="0.25rem"
                          >
                            <CircularProgressLabel>
                              {skillsData.experience}
                            </CircularProgressLabel>
                          </CircularProgress>

                          <CircularProgress
                            value={skillsData.joy}
                            color="#00F130"
                            px="0.25rem"
                          >
                            <CircularProgressLabel>
                              {skillsData.joy}
                            </CircularProgressLabel>
                          </CircularProgress>
                        </Box>
                      </Center>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
