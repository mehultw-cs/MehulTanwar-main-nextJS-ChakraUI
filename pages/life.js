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

import Navbar from './components/Navbar';

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

const Life = () => {
  const pageBgColor = useColorModeValue(mainBgColor.light, mainBgColor.dark);
  const pageTextColor = useColorModeValue(textColor.light, textColor.dark);
  const pageGlassColor = useColorModeValue(glassColor.light, glassColor.dark);

  return (
    <>
      <Box as="heroSection" w="100vw" height="35vh" bgColor="black"></Box>
      <Box
        as="main"
        bgColor={pageBgColor}
        color={pageTextColor}
        justifyContent="center"
        overflow="hidden"
      >
        <Container pt={['', '', '', '10rem']} my="10rem" lineHeight="2">
          <Heading justify="center" align="center" p={['', '', '', '2.5rem']}>
            Life
          </Heading>
          <Box as="content" mt="5rem">
            <Text mt="5rem" mb="2rem">
              My love for Astrophysics stems from a deeper inclination that I
              have had since childhood, to make sense of the world we live in,
              how it works, functions, what constitutes it and why are the
              things the way they are. This gave me the drive to look for
              answers and learn as much as I can. After realizing what astronomy
              is in 4th grade, I was hooked to know more about how stars work,
              how energy is transformed from one form to another, which later
              led me to realize what we are made out of
              <i>(literal stardust)</i> and what we are doing now (almost 13.8
              billion years after the Big Bang ). Since then I knew I wanted to
              persue Astrophysics or Science at least in some form.
            </Text>
            <Text mt="2rem" mb="2rem">
              I grew up in New Delhi, India. My schooling was at Ryan
              International School till 10th grade and Richmondd Global School
              from 11th grade. Since middle school I have been very active in
              extracurricular activities which caught my interest.
            </Text>
            <Text mt="2rem" mb="2rem">
              I joined the astronomy club at school in 6th grade and continued
              it the next year. When there were no more Astronomy Club modules
              at the school, I reached out to the institute offering the
              modules, SPACE (Science Popularization Association of
              Communicators and Educators) and joined them at their amateur
              branch for astronomy: Astronomica. This helped inculcate a value
              of educating others in me, since most Public Outreach with
              Astronomica resulted in us teaching general population about
              astrophysical events scientifically by practically doing the
              experiments in front of them (such as calculating the
              circumference of the Earth) While being the youngest member of the
              group for a few years, I started to work on some different
              projects related to my field at school. I learned that my school
              started to participate in NASA Space Settlement program, while in
              an earlier grade I partnered with a 12th grader to construct
              theoretical space stations capable of transport humans for
              generations on long space journey. I was also a member of the only
              school band as a bassist, and went for multiple competitions for
              the school. Along with all this, I went for many school related
              competitions.
            </Text>
            <Text mt="2rem" mb="2rem">
              At this point of time, my time outside school was sent either with
              Astronomica, Studies, Gaming or with Photography
            </Text>
            <Text mt="2rem" mb="2rem">
              After Ryan International School, I joined Richmondd Global School
              as a Non-Medical Science Student. Here, even though I was new to
              the school, my interest in extracurricular had not vanished, so
              against odds, I attempted to get into school parliament. Since it
              was a newer school, I knew it needed some aspects to
              modernize/mature, and I thought my experience at the other school
              would help build this one stronger. I was elected the Vice
              President that year and promoted to President the next year. With
              this position I tried to initiate an astronomy program at this
              school, which did not work. However with my fellow students we
              were able to make policy changes in school, start new traditions
              that were not there in school along with setting new standards for
              students and school which were followed on later. I also
              participated and won various competitions related to Science,
              Computer Science, English, Debate and Gaming. I continued to play
              bass, again in the only band in school.{' '}
            </Text>
          </Box>
        </Container>
      </Box>
      <Navbar />
    </>
  );
};

export default Life;
