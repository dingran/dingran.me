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
  const [largeScreen] = useMediaQuery('(min-width: 800px)');

  return (
    <Box
      id='outer-header'
      bg='#0a0b0c'
      color='white'
      zIndex='1000'
      position='fixed'
      w='100%'
    >
      <Flex
        id='inner'
        maxW='1040px'
        width='100%'
        overflow='hidden'
        m='auto'
        height='64px'
        px={10}
        whiteSpace='nowrap'
        alignItems='flex-start'
      >
        <HStack
          id='left'
          spacing={8}
          isTruncated
          overflowX='auto'
          overflowY='hidden'
          pb='80px'
          pt='20px'
        >
          <Box id='logo' fontWeight='bold'>
            Ran Ding
          </Box>
          <HStack
            spacing={6}
            textTransform='uppercase'
            fontSize='13px'
            fontWeight='semibold'
          >
            <FancyLink url='/about'>About</FancyLink>
            <FancyLink url='/about'>Using Ghost</FancyLink>
            <FancyLink url='/about'>Machine Learning</FancyLink>
            <FancyLink url='/about'>Career</FancyLink>
            <FancyLink url='/about'>Project</FancyLink>
          </HStack>
        </HStack>
        <Spacer id='spacer' />
        <HStack
          spacing={6}
          flexGrow={0}
          flexShrink={1}
          flexBasis='auto'
          height='64px'
          _before={{
            content: "''",
            position: 'relative',
            left: '-40px',
            zIndex: 100,
            width: '40px',
            height: '100%',
            bgGradient: 'linear( to-r, rgba(10,11,12, 0),  rgba(10,11,12))',
          }}
        >
          <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
            <FaTwitter />
          </Link>
          <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
            <FaLinkedin />
          </Link>
          <Button
            size='xs'
            variant='outline'
            opacity={0.8}
            _hover={{ opacity: 1.0 }}
          >
            Subscribe
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
