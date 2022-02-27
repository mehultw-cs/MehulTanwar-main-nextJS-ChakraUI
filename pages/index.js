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
import Navbar from '../components/Navbar';
import Container from '../components/layouts/Container';

// Sections
import NavigatingWebsiteSection from '../components/NavigatingWebsiteSection';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Stack from '../components/Stack';
import BottomFooter from '../components/BottomFooter';
// import { heroImage } from '../public/IMG_0803-min.jpeg';

const Headin = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mehul Tanwar - Homepage</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#111111" />
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
        overflow="hidden"
      >
        <Headin />

        <HeroSection />
        {/* <NavigatingWebsiteSection /> */}
        <AboutMeSection />
        <Education />
        <Skills />
        <Work />
        {/* <Stack /> */}
        <BottomFooter as="footer" />
        <Navbar />
      </Box>
    </>
  );
};

export default Page;
