import '@/styles/global.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
