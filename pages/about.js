import PageSkeleton from '@/components/PageSkeleton';
import Latex from '@/components/Latex';
import { Text, Heading } from '@chakra-ui/react';
export default function About() {
  return (
    <PageSkeleton>
      <Heading> About </Heading>
      <Latex>x</Latex>
    </PageSkeleton>
  );
}
