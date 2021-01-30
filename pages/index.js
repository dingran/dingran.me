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

const FancyLink = ({ url, children }) => {
  return (
    <NextLink href={url} passHref>
      <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
        {children}
      </Link>
    </NextLink>
  );
};

export default function Home({ children }) {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  return (
    <Box
      id='outer-header'
      bg='#0a0b0c'
      color='white'
      zIndex='1000'
      position='fixed'
      py={5}
      px={10}
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
              fontSize='13px'
              fontWeight='semibold'
              isTruncated
            >
              <FancyLink url='/about'>About</FancyLink>
              <FancyLink url='/about'>Using Ghost</FancyLink>
              <FancyLink url='/about'>Machine Learning</FancyLink>
              <FancyLink url='/about'>Career</FancyLink>
              <FancyLink url='/about'>Project</FancyLink>
            </HStack>
            <Spacer />
            <HStack spacing={6}></HStack>

            <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
              <FaTwitter />
            </Link>

            <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
              <FaLinkedin />
            </Link>
            {isLargerThan900 ? (
              <Button
                size='xs'
                variant='outline'
                opacity={0.8}
                _hover={{ opacity: 1.0 }}
              >
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
