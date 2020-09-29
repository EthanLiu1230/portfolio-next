import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import Head from 'next/head';
import { defaultTheme } from '../styles/utils';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Mulish:wght@400;700;900&family=Nunito+Sans:wght@700&display=swap"
          rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
