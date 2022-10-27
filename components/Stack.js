import {
  Box,
  Flex,
  Container,
  Image,
  Center,
  HStack,
  Link,
  LinkOverlay,
  useColorModeValue,
  Button,
  Heading,
  Divider,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import stackItems from './Stack.data';

// framer motion hooks

//to check if div is in view

import { useInView } from 'react-intersection-observer';

//use animation from framer motion, trigger animation given view status

import { useAnimation, motion } from 'framer-motion';

//useEffect from react, to use animate effect on trigger of in-view

import { useEffect } from 'react';

const Stack = () => {
  const [stackContainerRef, stackContainerInView] = useInView();

  //animation hook from framer motion

  const fullSlideNegXAnimation = useAnimation();

  // useEffect does something

  useEffect(() => {
    console.log('use effect hook, containerInView=', stackContainerInView);

    if (stackContainerInView) {
      fullSlideNegXAnimation.start({
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

    if (!stackContainerInView) {
      fullSlideNegXAnimation.start({
        x: '-100%',
        opacity: 0,
      });
    }
  }, [stackContainerInView]);

  return (
    <>
      <Box>
        <motion.div ref={stackContainerRef} animate={fullSlideNegXAnimation}>
          <Center>
            <Heading
              as="h4"
              fontSize="2xl"
              py="2rem"
              pb="0.35rem"
              className="crgrBgTxt"
            >
              Tech Stack
            </Heading>
          </Center>
          <Center>
            <Box
              as="techstackbox"
              w="100%"
              height={['32vh', '28.75vh', '30vh', '30vh']}
              p={['0.75rem', '', '', '0.75rem']}
              py={['', '', '0.75rem', '0.5rem']}
              mb={['1rem', '1rem', '0.5rem', '0rem']}
              borderRadius="lg"
              className="techstackbox"
              px={['', '', '', '2rem']}
            >
              <HStack
                as="techstack"
                gap="1.75rem"
                justify="space-between"
                w="100%"
                px="0.75rem"
              >
                {stackItems.map((stackItem, i) => (
                  <>
                    <Box d="flex" flexDirection="column" gap="0.5em">
                      <NextLink href={stackItem.link}>
                        <Image
                          cursor="pointer"
                          src={stackItem.image}
                          maxWidth="8rem"
                          key={i}
                          preserveAspectRatio="true"
                          alt={
                            'Name of the tool used in stack, which is: ' +
                            stackItem.label
                          }
                        ></Image>
                      </NextLink>
                      <NextLink href={stackItem.link}>
                        <Text
                          align="center"
                          fontSize="xl"
                          pt={['', '', '', '']}
                          cursor="pointer"
                        >
                          {stackItem.label}
                        </Text>
                      </NextLink>
                    </Box>
                  </>
                ))}
              </HStack>
            </Box>
          </Center>
        </motion.div>
      </Box>
    </>
  );
};

export default Stack;
