import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import LoggedBase from '../components/layout/loggedBase';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Minha Defensoria</title>
      </Head>
      <ThemeProvider theme={theme}>
        <LoggedBase>
          <GlobalStyle />
          <Component {...pageProps} />
        </LoggedBase>
      </ThemeProvider>
    </>
  );
}
