import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Dev.log" />
          <meta name="keywords" content="blog,react,antd,webpack,css,javascript" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
