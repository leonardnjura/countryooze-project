import '@fortawesome/fontawesome-svg-core/styles.css';
import { SessionProvider } from 'next-auth/react';
import { SSRProvider } from '@react-aria/ssr';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import { DataStoreProvider } from '../context/app/DataStore';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  session: any;
}

function MyApp({ Component, pageProps, session }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <SSRProvider>
        <NextNProgress color="#1d4ed8" options={{ showSpinner: false }} />
        <DataStoreProvider>
          {getLayout(<Component {...pageProps} />)}
        </DataStoreProvider>
      </SSRProvider>
    </SessionProvider>
  );
}

export default MyApp;