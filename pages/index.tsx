import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>졸업프로젝트🏠</title>
      </Head>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
