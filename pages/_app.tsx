import { Provider } from 'mobx-react';
import Head from 'next/head';
import '../styles/globals.scss';
import MainLayout from '../layout/MainLayout/MainLayout';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
};

export default MyApp;
