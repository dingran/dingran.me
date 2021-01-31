import '@/styles/global.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      h2: {
        color: 'red.400',
      },
      'ol, ul': {
        pl: '1.0em',
        pr: '1.0em',
        listStylePosition: 'inside',
      },
      'p, ul, ol, dl, blockquote': {
        mb: '1.5em',
      },
      p: {
        textAlign: 'justify',
      },
      blockquote: {
        px: '1.0em',
        borderLeftColor: 'blue.200',
        borderLeftWidth: '3px',
        textColor: 'gray.400',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
