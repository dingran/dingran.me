import Head from 'next/head';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Text,
  Icon,
  Link,
  Stack,
  Avatar,
  HStack,
  Spacer,
} from '@chakra-ui/react';

import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home({ children }) {
  return (
    <Box
      id='outer-header'
      bg='#0a0b0c'
      color='white'
      zIndex='1000'
      position='fixed'
      p={5}
      w='100%'
    >
      <Box id='inner' padding='0' margin='0 auto' width='100%' maxW='1040px'>
        <Box id='left'>
          <HStack spacing={8}>
            <Box id='logo' fontWeight='bold'>
              Ran Ding
            </Box>
            <HStack
              spacing={6}
              textTransform='uppercase'
              opacity={0.8}
              fontSize='sm'
            >
              <Box>About</Box>
              <Box>Using Ghost</Box>
              <Box>Machine Learning</Box>
              <Box>Career</Box>
              <Box>Projects</Box>
            </HStack>

            <Spacer></Spacer>
            <HStack
              spacing={6}
              textTransform='uppercase'
              opacity={0.8}
              fontSize='sm'
            ></HStack>
            <Link color='white' opacity={0.8}>
              <FaTwitter />
            </Link>
            <Link color='white' opacity={0.8}>
              <FaLinkedin />
            </Link>
            <Button size='xs' variant='outline' opacity={0.8}>
              Subscribe
            </Button>
          </HStack>
          {/* <Box id='primary-nav'>
            <ul class='nav'>
              <li class='nav-about'>
                <a href='https://www.dingran.me/about/'>About</a>
              </li>
              <li class='nav-using-ghost'>
                <a href='https://www.dingran.me/tag/using-ghost/'>
                  Using Ghost
                </a>
              </li>
              <li class='nav-machine-learning'>
                <a href='https://www.dingran.me/tag/machine-learning/'>
                  Machine Learning
                </a>
              </li>
              <li class='nav-career'>
                <a href='https://www.dingran.me/tag/career/'>Career</a>
              </li>
              <li class='nav-projects'>
                <a href='https://www.dingran.me/tag/projects/'>Projects</a>
              </li>
            </ul>
          </Box> */}
        </Box>

        <Box id='right'></Box>
      </Box>
    </Box>
  );
}
