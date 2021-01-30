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
import { useMediaQuery } from '@chakra-ui/react';

import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home({ children }) {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

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
      <Box
        id='inner'
        padding='0'
        margin='0 auto'
        width='100%'
        maxW='1040px'
        overflow='hidden'
        whiteSpace='nowrap'
      >
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
              isTruncated
            >
              <NextLink href='/about'>About</NextLink>
              <NextLink href='/about'>Using Ghost</NextLink>
              <NextLink href='/about'>Machine Learning</NextLink>
              <NextLink href='/about'>Career</NextLink>
              <NextLink href='/about'>Projects</NextLink>
            </HStack>
            <Spacer />
            <HStack spacing={6}></HStack>
            <Link color='white' opacity={0.8}>
              <FaTwitter />
            </Link>
            <Link color='white' opacity={0.8}>
              <FaLinkedin />
            </Link>
            {isLargerThan900 ? (
              <Button size='xs' variant='outline' opacity={0.8}>
                Subscribe
              </Button>
            ) : (
              <></>
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
