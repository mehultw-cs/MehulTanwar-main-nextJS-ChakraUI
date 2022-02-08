import {
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Container from './components/layouts/Container';
// import { heroImage } from '../public/IMG_0803-min.jpeg';

const Headin = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mehul Tanwar - Homepage</title>
      </Head>
    </>
  );
};

const mainBgColor = {
  light: '#fafafa',
  dark: '#171717',
};
const textColor = {
  light: '#272727',
  dark: '#e0e0e0',
};
const glassColor = {
  light: '#cfcfcf57',
  dark: '#32323257',
};
const Page = () => {
  const pageBgColor = useColorModeValue(mainBgColor.light, mainBgColor.dark);
  const pageTextColor = useColorModeValue(textColor.light, textColor.dark);
  const pageGlassColor = useColorModeValue(glassColor.light, glassColor.dark);
  return (
    <>
      <Box
        as="main"
        bgColor={pageBgColor}
        color={pageTextColor}
        my="0"
        mx="auto"
        px="auto"
        justifyContent="center"
      >
        <Headin />

        <Box
          as="heroSection"
          width="100vw"
          py="4rem"
          bgImage="/hero-min.jpeg"
          d="flex"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition={['center']}
          justify={['center']}
        >
          {/* <Image alt="Hero Image Holder" src="/hero-min.jpeg"></Image> */}
          <Box
            as="Flex"
            display="flex"
            flexDirection="column"
            height={['30vh', '40vh', '30vh', '30vh', '30vh']}
            width={['95vw', '53vw', '53vw', '39vw', '42vw']}
            py={['5rem', '2.5rem']}
            px={['1.5rem', '2rem']}
            mt={['20rem']}
            ml={['0.25rem', '14rem', '19rem', '29rem', '35rem']}
            bgColor={pageGlassColor}
            styles={{ 'backdrop-Filter': 'blur(1.5rem)' }}
            borderRadius="3rem"
            backdropFilter="auto"
            backdropBlur="4.5px"
          >
            <Heading as="h2" fontSize="3xl">
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
        
        <Navbar />
      </Box>
    </>
  );
};

export default Page;
