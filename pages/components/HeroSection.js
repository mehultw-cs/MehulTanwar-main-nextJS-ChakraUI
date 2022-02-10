import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import { WavesLayeredDivider, TriangleMidDivider } from './layouts/SVG';

const glassColor = {
  light: '#cfcfcf57',
  dark: '#32323257',
};

const nextDividerColor = {
  light: '#f4f4f4',
  dark: '#202020',
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
  return (
    <>
      <Box
        as="heroSection"
        width="100%"
        py="4rem"
        bgImage="/hero-min.jpeg"
        d="flex"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition={['center']}
        justify={['center']}
      >
        <Box m="0 auto" maxW={['auto', 'auto', 'auto', '75rem']}>
          <Box
            as="heroContainer"
            display="flex"
            flexDirection="column"
            height={['33vh', '35vh', '30vh', '30vh', '30vh']}
            width={['95vw', '53vw', '53vw', '39vw', '42vw']}
            py={['2.5rem', '2.5rem']}
            px={['1.5rem', '2rem', '2rem', '2.5rem']}
            mt={['22rem', '20rem', '18rem', '18rem']}
            mb={['8rem', '10rem', '10rem', '18rem']}
            ml={['0.25rem', '14rem', '19rem', '29rem', '35rem']}
            bgColor={pageGlassColor}
            styles={{ 'backdrop-Filter': 'blur(1.5rem)' }}
            borderRadius="3rem"
            backdropFilter="auto"
            backdropBlur="4.5px"
            boxShadow="xl"
          >
            <Heading as="h2" fontSize="3xl" mt=".75rem">
              Hi, I&apos;m{' '}
              <Heading
                as="h2"
                fontSize="3xl"
                display="inline"
                bgGradient="linear(to-tr,#3ac6e4, #225df4)"
                bgSize="400%"
                bgClip="text"
                style={{ animation: 'bg-animation 10s infinite alternate;' }}
              >
                Mehul Tanwar
              </Heading>
              ,
            </Heading>
            <Heading as="h5" fontSize="xl" my="2rem">
              Welcome to my Website
            </Heading>
            <Text>
              This is a personal portfolio website which gives you a glimpse of
              me. I created this project for potential employers and showcase my
              passion for problem solving and photography.
            </Text>
            <Text> &nbsp;</Text>
            <Text>This website is being developed while deployed..</Text>
          </Box>
        </Box>
      </Box>

      {/* Bottom Divider */}

      <Box w="150%" height="50%" mt="-25vh">
        <svg
          width="100%"
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
