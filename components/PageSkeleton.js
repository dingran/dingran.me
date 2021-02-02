/* this component should take care of header, nav and footer for all/most pages */
import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';
import { Box, Flex } from '@chakra-ui/react';
import useScript from '@/components/useScript';

/*global MathJax*/

export default function PageSkeleton(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Ran Ding – Personal Blog', //TODO: fix
    description: `Blah blah`, //TODO: fix
    image: 'https://dingran.me/static/images/banner.png', //TODO: fix
    type: 'website',
    ...customMeta,
  };

  useScript(
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',
    'mathjax-id',
    () => {
      return 1;
    }
  );

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://dingran.me${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Lee Robinson' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@leeerob' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
        <script>
          {`(MathJax = {
              tex: {
                inlineMath: [
                  ['$', '$'],
                  ['\\(', '\\)'],
                ],
                tags: 'ams',
              },
              svg: {
                fontCache: 'global',
              },
            });`}
        </script>

        {/*<script
          type='text/javascript'
          id='MathJax-script'
          async
          src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js'
        ></script> */}
      </Head>
      <Box className='site-wrapper'>
        <Nav />
        <Box as='main' mt='64px' className='site-main outer'>
          <Box className='inner'>{children}</Box>
        </Box>
        {/* TODO: add footer */}
      </Box>
    </>
  );
}
