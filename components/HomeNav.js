import NextLink from 'next/link';
import { Box, Button, Flex, Link, HStack, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

import styles from '@/styles/HomeNav.module.css';

const WrappedLink = ({ url, children }) => {
  return (
    <NextLink href={url} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

export default function HomeNav({ children }) {
  const [largeScreen] = useMediaQuery('(min-width: 800px)');

  return (
    <Box
      bg='rgba(10,11,12)' // based on Casper, #0a0b0c
      color='white' // text color
      zIndex='1000' // stay in front
      position='fixed' // fixed at top
      w='100%' // fill the whole screen
      className={styles.nav}
    >
      <Flex
        id='inner' // is using id the righ way to note to myself what's what?
        maxW='1040px' // Chakra's shorthabd for max-width
        m='auto' // centering
        px={10} // leave some room left and right
        whiteSpace='nowrap' // ensure signle line
        height='64px' // specify height, in combination with overflow='hidden' for hiding scroll bar...
        overflowY='hidden' // hide the ugly x scroll bar, see below
        alignItems='flex-start' //alignt at the start on the cross axis, i.e. align at top
      >
        <HStack
          id='left'
          spacing={8}
          overflowX='auto' // scrollable when screen is narrow
          pb='80px' // so the the x scrollbar is outside of the 64px height
          pt='20px' // padding from top to center this
        >
          <Box id='logo' fontWeight='bold'>
            <WrappedLink url='/'>Ran Ding</WrappedLink>
          </Box>
          <HStack
            id='nav-links'
            spacing={6}
            textTransform='uppercase'
            fontSize='13px'
            fontWeight='semibold'
            className={styles.navLeft} // adding the :before:hover directly here isn't straigtforward, thus using css module
          >
            <WrappedLink url='/about'>About</WrappedLink>
            <WrappedLink url='/blog'>Blog</WrappedLink>
            <WrappedLink url='/projects'>Projects</WrappedLink>
          </HStack>
        </HStack>
        <Spacer /> {/* fill in the horizontal space between the two HStacks*/}
        <HStack
          spacing={6}
          height='64px' // specify a height makes children element centerned correctly
          _before={{
            content: "''",
            width: '40px',
            position: 'relative',
            left: '-40px', // place this to overlap with the previous element
            height: '100%', // fill in the 64px height
            zIndex: 1000,
            bgGradient: 'linear( to-r, rgba(10,11,12,0),  rgba(10,11,12))', // Chakra's syntax for making an gradient background
          }}
          className={styles.navRight} // adding the :before:hover directly here isn't straigtforward, thus using css module
        >
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
          <Button
            size='xs'
            variant='outline'
            _hover={{ opacity: 1 }} //this overwrites the default hover effect which is ugly for outline style button on dark background
          >
            Subscribe
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
