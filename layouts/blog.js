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
              Automatically add preview / teaser content for Member-Only posts
              in Ghost.
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
                  24 Jan 2021 {` • `} 6 Min Read
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <div>
          <div>
            <Image
              alt='Lee Robinson'
              height={24}
              width={24}
              src='/avatar.jpg'
              className='rounded-full'
            />
            <p>
              {frontMatter.by}
              {'Lee Robinson / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p>
            {frontMatter.readingTime.text}
            {` • `}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div>{children}</div>
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
