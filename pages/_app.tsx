import { Provider } from 'mobx-react';
import Head from 'next/head';
import '../styles/globals.css';
import MainLayout from '../components/layout/MainLayout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>졸업프로젝트</title>
      </Head>
      <Provider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}

export default MyApp;
