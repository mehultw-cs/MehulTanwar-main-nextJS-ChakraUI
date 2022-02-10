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

// Sections
import NavigatingWebsiteSection from './components/NavigatingWebsiteSection'
import HeroSection from './components/HeroSection'
import AboutMeSection from './components/AboutMeSection'
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

        <HeroSection />
        <NavigatingWebsiteSection />
        <AboutMeSection />
          
        
        <Navbar />
      </Box>
    </>
  );
};

export default Page;
