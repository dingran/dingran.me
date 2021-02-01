import '@/styles/global.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      fonts: {
        heading: 'Georgia, serif',
        mono: 'Menlo, monospace',
      },
      'h1, h2, h3, h4, h5, h6': {
        mt: '1.5em',
        mb: '0.8em',
      },
      'ol, ul': {
        pl: '1.0em',
        pr: '1.0em',
        listStylePosition: 'inside',
      },
      'p, ul, ol, dl, blockquote': {
        mb: '1.0em',
      },
      blockquote: {
        px: '1.0em',
        borderLeftColor: 'blue.200',
        borderLeftWidth: '3px',
        textColor: 'gray.400',
      },
      ':focus': {
        boxShadow: 'none !important',
        // remove blue border https://github.com/chakra-ui/chakra-ui/issues/708#issuecomment-638963019
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
