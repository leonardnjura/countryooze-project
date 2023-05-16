import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { favicon } from '../../../config';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import DataStore from '../../../context/app/DataStore';


export interface IPrimaryLayout {
  children: React.ReactNode;
  justify?: 'items-start' | 'items-center' | 'items-end';
  titleBar: string;
  description?: string;
  pageUrl?: string;
  pageImage?: string;
  hideNavbar?: boolean;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  titleBar,
  description,
  pageUrl,
  pageImage,
  hideNavbar,
}) => {

  const {
    surferCountryData,
  } = useContext(DataStore);

  const { data: session } = useSession(); //google session

  useEffect(() => {
    
  }, [session]); //<====NOTE: dont listen to anything else in this hook.. run once

  // const crawlPage = titleBar == 'Home' ? false : true;
  const crawlPage = true;

  const determineFullTitleBar = `${
    titleBar == 'Home' ? 'Welcome to Countryooze' : `${titleBar} • Countryooze` //•//·
  }`;

  const determineDescription = `${
    description ??
    'Ooze coolness about countries or do your homework here before travel'
  }`;

  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
        <title>{determineFullTitleBar}</title>
        <meta name="description" content={determineDescription} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${titleBar}`} />
        <meta property="og:url" content={`${pageUrl}`} />
        <meta property="og:description" content={determineDescription} />
        <meta property="og:image" content={`${pageImage}`} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        {/*todo:company handle-- <meta name="twitter:site" content="@cccxxx" />*/}
        {/*todo:author handle-- <meta name="twitter:creator" content="@aaaxxx" />  */}

        {/* Facebook */}
        <meta property="fb:app_id" content="1138339653718156" />

        {/* VALIDATE (or COMPOSE MSG TO PREVIEW) */}
        {/* https://cards-dev.twitter.com/validator */}
        {/* https://developers.facebook.com/tools/debug/ */}

        {/* No index */}
        {!crawlPage && <meta name="robots" content="noindex"></meta>}

        {/* Others */}
        <meta
          name="google-site-verification"
          content="3mH6hzH6B9NTS4_dlIoLTiUS4Bua6pJkPc_E3GxLPsw"
        />
      </Head>
      <div
        className={`min-h-screen flex flex-col ${justify} dark:bg-zinc-900 dark:text-white`}
      >
        {!hideNavbar && <Header />}
        <main className="px-5">{children}</main>
        <div className="m-auto" />

        <Footer surferCountryData={surferCountryData} />
      </div>
    </>
  );
};

export default PrimaryLayout;
