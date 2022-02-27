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
} from '@chakra-ui/react';
import {
  TriangleMidDivider,
  PatternCirc,
  HexPointLayeredDivider,
  PatternSplashShapes,
} from './layouts/SVG';

import NextLink from 'next/link';

// framer motion hooks

//to check if div is in view

import { useInView } from 'react-intersection-observer';

//use animation from framer motion, trigger animation given view status

import { useAnimation, motion } from 'framer-motion';

//useEffect from react, to use animate effect on trigger of in-view

import { useEffect } from 'react';

const Education = () => {
  const sectionGlassColor = useColorModeValue('#efefef67', '#22222287');
  const divPrevColor = useColorModeValue('#fafafa', '#181818');
  const divNextColor = useColorModeValue('#fefefe', '#121212');

  // ref triggers inView

  const [containerRef, containerInView] = useInView();
  const [headingRef, headingInView] = useInView();

  //animation hook from framer motion

  const growAnimation = useAnimation();

  const slideXAnimation = useAnimation();

  // useEffect does something

  useEffect(() => {
    console.log('use effect hook, containerInView=', containerInView);

    if (containerInView) {
      slideXAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'string',
          duration: 0.785,
          bounce: 0.3,
          delay: 0.2,
        },
      });
    }

    if (!containerInView) {
      slideXAnimation.start({
        x: '-2vw',
        opacity: 0,
      });
    }
  }, [containerInView]);

  useEffect(() => {
    console.log('use effect hook, headingInView=', headingInView);

    if (headingInView) {
      growAnimation.start({
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

    if (!headingInView) {
      growAnimation.start({
        y: '0.25rem',
        opacity: 0,
        scale: 0.8,
      });
    }
  }, [headingInView]);

  return (
    <>
      {/* <Box pt="-1rem"><TriangleMidDivider
            fill={divPrevColor}
            width="100vw" mt="-2rem"
          ></TriangleMidDivider></Box> */}

      <PatternCirc fill={divPrevColor} width="100vw" height="8rem" />
      <Box
        mt={['-10rem', '-10rem', '-10rem', '-13rem']}
        bgImage={'/IMG_0102.jpg'}
        bgPosition={[
          'center -100px',
          'center -100px',
          'center -100px',
          'center -250px',
        ]}
        bgRepeat="no-repeat"
        height="100%"
        id="education"
      >
        <motion.div animate={slideXAnimation}>
          <Container
            ref={containerRef}
            lineHeight="2"
            pt={['8rem', '8rem', '8rem', '8rem']}
            maxW={['95vw', '95vw', 'container.md', 'container.lg']}
            mb={['2rem', '2rem', '2rem', '6rem']}
            mt={['2rem', '2rem', '2rem', '5.5rem']}
            maxHeight="98%"
          >
            <Box
              bgColor={sectionGlassColor}
              borderRadius="2.5rem"
              boxShadow="xl"
              backdropFilter="auto"
              backdropBlur="6px"
              px={['1.75rem', '2rem', '3rem', '4rem']}
              py={['3rem', '', '', '']}
              align="center"
            >
              <motion.div animate={growAnimation}>
                <Heading
                  ref={headingRef}
                  justify="center"
                  align="center"
                  pb={['2.2rem']}
                  m={['2rem']}
                  className="srgrBgTxt"
                >
                  Education
                </Heading>
              </motion.div>
              <Text>
                I recently graduated with a B.Sc. Computer Science, with
                Co-Operative Education (3 Work terms) from Saint Mary&apos;s
                University (SMU), Canada. I love Canada and what it has to
                offer. My education over the past years had led me to questions
                and answers that I didn&apos;t even know existed. I started my
                University journey with Astrophysics in mind since that was the
                reason for me to persue higher education, SMU was a great fit
                since it offered exceptional Astrophysics faculty and tools
                along with having a highly respected Computer Science
                Department.
              </Text>
              <Text>
                My interest in Computer Science originated in 11<sup>th</sup>
                grade in an introductory to CS class. I instantly fell in love
                with CS and knew it is a great tool to make this world a better
                place. Since then I knew I would work with CS in some form.
              </Text>
              <Text>
                After switching to Computer Science in my 2<sup>nd</sup> year, I
                was led into a world of realizing how interconnected everything
                is. The computers on which our modern world works are based on
                biological-machines (us) and whoever interacts with this
                technology also happens to be a biological machine. So in CS we
                learned how to build systems that are optimal to be used by
                humans. To understand how to present information / predict human
                actions, potential interactions, some knowledge of human
                psychology was required. It turns out it was also useful to
                learn psychology if you are to design Artificial Intelligence
                systems or to market products to consumers.
              </Text>
              <Text>
                My Education ultimately led me to a breadth of varied courses
                all the way from History, Politics, Marketing and
                Entrepreneurship to Neuroscience, Artificial Intelligence, Data
                Mining and finding Extraterrestrial planets on distant stars.
              </Text>
              <Text>
                I also happened to get certified to be a Teacher of English as a
                second language and can teach English internationally to those
                who natively do not know English.
              </Text>
              {/* <Center pt={['2rem', '', '', '']}>
              <Link
                href="/life"
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
                _visited={{ 'text-decoration': 'none', color: 'white' }}
              >
                Learn More About my Life
              </Link>
            </Center> */}

              <NextLink href="http://smu.ca">
                <Image
                  pt="1.5rem"
                  src="/smu_logo.png"
                  cursor="pointer"
                  borderRadius="2.5rem"
                  boxShadow="xl"
                  backdropFilter="auto"
                  backdropBlur="30px"
                  px={['.25rem', '2.5rem', '2.5rem', '2.5rem']}
                  py="0.75rem"
                  mt={['1rem', '1.5rem', '1.5rem', '1.5rem']}
                  alt="Saint Mary's University old clickable logo"
                ></Image>
              </NextLink>
            </Box>
          </Container>
        </motion.div>
        <PatternSplashShapes fill={divPrevColor} width="100vw" height="8rem" />
      </Box>
    </>
  );
};

export default Education;
