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
      <motion.div ref={stackContainerRef} animate={fullSlideNegXAnimation}>
        <Center>
          <Heading as="h4" fontSize="xl" pb="2rem">
            Tech Stack
          </Heading>
        </Center>
        <Center>
          <Box
            as="techstackbox"
            w="98vw"
            height={['10vh', '10vh', '10vh', '10vh']}
            p={['0.75rem', '', '', '0.75rem']}
            py={['', '', '', '0.5rem']}
            mb={['7vh', '', '', '0rem']}
            
            borderRadius="lg"
            className="techstackbox"
          >
            <HStack as="techstack" gap="1.75rem" justify="space-between">
              {stackItems.map((stackItem, i) => (
                <Image
                  src={stackItem.image}
                  maxWidth="5rem"
                  key={i}
                  preserveAspectRatio="true"
                  alt={"Name of the tool used in stack, which is: " + stackItem.label}
                ></Image>
              ))}
            </HStack>
          </Box>
        </Center>
      </motion.div>
    </>
  );
};

export default Stack;
