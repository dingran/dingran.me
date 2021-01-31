import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from '@/components/CodeBlock';
import { Code } from '@chakra-ui/react';

// import ProsCard from '@/components/ProsCard';
// import ConsCard from '@/components/ConsCard';
// import Gumroad from '@/components/metrics/Gumroad';
// import Unsplash from '@/components/metrics/Unsplash';
// import Analytics from '@/components/metrics/Analytics';
// import YouTube from '@/components/metrics/Youtube';
// import Step from '@/components/Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  inlineCode: Code,
  // Analytics,
  // ConsCard,
  // Gumroad,
  // ProsCard,
  // Step,
  // Tweet,
  // Unsplash,
  // YouTube
};

export default MDXComponents;
