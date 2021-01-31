import Head from 'next/head';
import HomeNav from '@/components/HomeNav';

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeNav />
    </>
  );
}
