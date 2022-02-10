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
        <Box mt="-45rem" mb="2.7rem" z="-1">
          <svg
            width="100vw"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 900"
          >
            <rect fill={sectionBgColor} width="1600" height="900" />
            <defs>
              <linearGradient
                id="a"
                x1="0"
                x2="0"
                y1="1"
                y2="0"
                gradientTransform="rotate(86,0.5,0.5)"
              >
                <stop offset="0" stop-color="#66B8EB" />
                <stop offset="1" stop-color="#00F130" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
                gradientTransform="rotate(138,0.5,0.5)"
              >
                <stop offset="0" stop-color="#9D002D" />
                <stop offset="1" stop-color="#ECB543" />
              </linearGradient>
            </defs>
            <g fill="#FFF" fill-opacity="0" stroke-miterlimit="10">
              <g stroke="url(#a)" stroke-width="7.589999999999999">
                <path
                  transform="translate(-129.5 7.199999999999999) rotate(-1.5 1409 581) scale(0.9310400000000001)"
                  d="M1409 581 1450.35 511 1490 581z"
                />
                <circle
                  stroke-width="2.53"
                  transform="translate(-158 98) rotate(9.399999999999999 800 450) scale(1.0084199999999999)"
                  cx="500"
                  cy="100"
                  r="40"
                />
                <path
                  transform="translate(24.200000000000003 -114) rotate(74 401 736) scale(1.0084199999999999)"
                  d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
                />
              </g>
              <g stroke="url(#b)" stroke-width="2.3">
                <path
                  transform="translate(588 0.8000000000000007) rotate(-0.20000000000000018 150 345) scale(0.97968)"
                  d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
                />
                <rect
                  stroke-width="5.06"
                  transform="translate(-172 -265) rotate(64.80000000000001 1089 759)"
                  x="1039"
                  y="709"
                  width="100"
                  height="100"
                />
                <path
                  transform="translate(-364 100) rotate(10.799999999999997 1400 132) scale(0.8)"
                  d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
                />
              </g>
            </g>
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default NavigatingWebsiteSection;
