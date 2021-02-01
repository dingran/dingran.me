import Image from 'next/image';
import {
  Avatar,
  Box,
  Heading,
  Tag,
  Divider,
  Grid,
  GridItem,
  Link,
  Flex,
  Text,
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

import PageSkeleton from '@/components/PageSkeleton';
// import Subscribe from '@/components/subscribe';
// import ViewCounter from '@/components/ViewCounter';

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/master/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <PageSkeleton
      title={`${frontMatter.title} – Lee Robinson`}
      description={frontMatter.summary}
      image={`https://leerob.io${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type='article'
    >
      <article>
        <Box as='header' px='11vw' py='55px'>
          <Link
            color='blue.400'
            fontWeight='600'
            fontSize='13px'
            textTransform='uppercase'
          >
            Test
          </Link>
          <Box mb='.2em'>
            <Heading as='h1' size='2xl'>
              {frontMatter.title}
            </Heading>
          </Box>
          <Box mt='20px'>
            <Heading
              color='gray.500'
              size='md'
              fontWeight='300'
              fontFamily='Georgia, serif'
            >
              {frontMatter.summary}
            </Heading>
          </Box>
          <Flex
            justifyContent='space-between'
            pt='15px'
            mt='35px'
            borderTopWidth='1px'
            borderTopColor='rgb(228, 234, 237)'
          >
            <Flex flexGrow='1' alignItems='center'>
              <Box ml='4px' pr='12px'>
                <Box m='0 auto'>
                  <Avatar size='sm'></Avatar>
                </Box>
              </Box>
              <Box mt='2px'>
                <Heading as='h4' size='xs' mb='3px'>
                  Ran Ding
                </Heading>
                <Text
                  fontSize='xs'
                  color='gray.400'
                  style={{ textTransform: 'uppercase' }}
                >
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                  {` • `} {frontMatter.readingTime.text}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box className='post-full-content'>
          <div>{children}</div>
        </Box>
        <div>{/* <Subscribe /> */}</div>
        <div>
          <a
            href={discussUrl(frontMatter.slug)}
            target='_blank'
            rel='noopener noreferrer'
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target='_blank'
            rel='noopener noreferrer'
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </PageSkeleton>
  );
}
