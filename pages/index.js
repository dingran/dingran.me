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
      py={5}
      px={10}
      w='100%'
    >
      <Flex
        id='inner'
        p='0'
        m='auto'
        maxW='1040px'
        width='100%'
        overflow='hidden'
        whiteSpace='nowrap'
      >
        <Box
          flexGrow={1}
          flexShrink={0}
          flexBasis='auto'
          id='left'
          spacing={8}
          _after={{
            content: "''",
            top: 0,
            right: 0,
            zIndex: 1000,
            width: '40px',
            height: '140px',
            background: 'white',
            // background:
            // 'linear-gradient( to right, color-mod(var(--darkgrey) l(-5%) a(0)) 0%, color-mod(var(--darkgrey) l(-5%)) 100%)',
          }}
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
        </Box>
        {/* <Spacer /> */}
        <HStack spacing={6} pl={5} flexGrow={0} flexShrink={1} flexBasis='auto'>
          <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
            <FaTwitter />
          </Link>

          <Link opacity={0.8} _hover={{ opacity: '1.0' }}>
            <FaLinkedin />
          </Link>
          {largeScreen ? (
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
      </Flex>
    </Box>
  );
}
