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
        <Navbar />
        <Box
          as="heroSection"
          height="85vh"
          width="100vw"
          pos="relative"
          py="4rem"
          _hover={{
            content: '""',
            bgImage: "url('/hero-min.jpeg')",
            bgSize: 'cover',
            pos: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
          }}
        >
          {/* <Image alt="Hero Image Holder" src="/hero-min.jpeg"></Image> */}
          <Box
            height="30vh"
            width="45vw"
            my="20rem"
            marginLeft="35rem"
            px="3.5rem"
            py="3.5rem"
            bgColor={pageGlassColor}
            backdropFilter="auto"
            backdropBlur="4.65px"
            borderRadius="4rem"
            z-index="2"
          >
            <Heading as="h2" fontSize="3xl">
              Hi, I&apos;m Mehul Tanwar,
            </Heading>
            <Heading as="h5" fontSize="xl" my="2rem">
              Welcome to my Website
            </Heading>
            <Text>
              This is a personal portfolio website which gives you a glimpse of
              me. I created this project for potential employers and showcase my
              passion for problem solving and photography. This website is being
              developed while deployed..
            </Text>
          </Box>
        </Box>
        <Box
          height="150vh"
          bgGradient="linear(to-r, green.400,green.600)"
          overflow="hidden"
        >
          <Text fontSize="6xl"> You fnnudvabni</Text>
          <Text fontSize="6xl"> You fnnudvabni</Text>
          <Text fontSize="6xl">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            mollitia tempora quos laborum cupiditate provident sequi! Alias
            fugit repudiandae temporibus a, vitae perspiciatis officiis libero.{' '}
          </Text>
          <Text fontSize="6xl"> You fnnudvabni</Text>
          <Text fontSize="6xl"> You fnnudvabni</Text>
          <Heading fontSize="6xl">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus
            possimus odio, beatae sed consectetur, officia repellat, rerum
            tenetur facilis neque architecto cupiditate dolorum quam
            consequuntur dolores impedit ab recusandae.
          </Heading>
          <Button variant="solid" colorScheme="#226878">
            {' '}
            LEts goo
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Page;
