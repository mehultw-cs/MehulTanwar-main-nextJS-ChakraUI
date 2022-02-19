import {
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Container from './layouts/Container';
import styled from '@emotion/styled';

const sectionBg = {
  light: '#f4f4f4',
  dark: '#202020',
};

const LinksFlag = styled.div`
  width: 22.18vw;
  background: linear-gradient(to top right, #23982f66, #2bb23e55);
  color: #249c31;
  font-weight: bold;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
  margin: 0 auto;
  padding: 1.5rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border-color: #2bb23e55;
  border-width: 0.25rem;
  backdrop-filter: blur(4.5px);
  a {
    color: #23972f;
    font-weight: normal;
    &:hover {
      color: #000000;
    }
  }
`;

// Add grid for mobile,
// Add background and shapes

//svg divider file with dynamic colors

const NavigatingWebsiteSection = () => {
  const sectionBgColor = useColorModeValue(sectionBg.light, sectionBg.dark);

  return (
    <>
      <Box as="navigationSection" width="100vw" height="55vh">
        <Flex bgColor={sectionBgColor} py="10rem">
          <Container>
            <Heading pb="5rem"> Navigating the website</Heading>
            <Heading as="h3" pb="2.5rem" fontSize="2xl" fontWeight="400">
              These links will help you find what you are looking for
            </Heading>

            <Flex
              as="flagBox_Desktop"
              flexDirection={['column', 'column', 'row', 'row']}
              display={['none', 'none', 'flex', 'flex']}
              gap="1.75rem"
              pt="2.5rem"
            >
              <LinksFlag>
                <Heading
                  as="h5"
                  pb="1.75rem"
                  pt="2.25rem"
                  fontSize="xl"
                  fontWeight="600"
                >
                  Extracurricular
                </Heading>
                <Link href="/">Enactus</Link>
                <Link href="/">Math & CS Society</Link>
                <Link href="/">Developer Student Club (Google)</Link>
                <Link pb="3.5rem" href="/">
                  Competitions
                </Link>
              </LinksFlag>
              <LinksFlag>
                <Heading
                  as="h5"
                  pb="1.75rem"
                  pt="1.75rem"
                  fontSize="xl"
                  fontWeight="600"
                >
                  Academics
                </Heading>
                <Link href="/">Degrees</Link>
                <Link href="/">University/School</Link>
                <Link href="/">Classes</Link>
                <Link pb="3.5rem" href="/">
                  Work
                </Link>
              </LinksFlag>
              <LinksFlag>
                <Heading
                  as="h5"
                  pb="1.00rem"
                  pt="2.55rem"
                  fontSize="xl"
                  fontWeight="600"
                >
                  Life
                </Heading>
                <Link href="/">Photography</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Accomplishments</Link>

                <Link href="/">Beliefs</Link>
                <Link pb="3.5rem" href="/">
                  Contact
                </Link>
              </LinksFlag>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
};

export default NavigatingWebsiteSection;
