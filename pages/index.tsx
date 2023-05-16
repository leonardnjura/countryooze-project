import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import {
  logo,
  oozeVerb,
  oozedVerb,
  server,
  siteAboutVariant,
} from '../config';
import DataStore from '../context/app/DataStore';
import { NextPageWithLayout } from './page';
import { titleCasePlease } from '../utils/preops';

interface IPageProps {
  redirectPage: string | null;
  isValidRedirectPage: boolean;
  og_pageUrl: string;
  og_description: string;
  og_pageImage: string;
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  let redirectPage = context.query.continue as string | null;

  if (redirectPage) {
    redirectPage = redirectPage;
  } else {
    redirectPage = null; //to help serialize
  }

  let isValidRedirectPage: boolean = redirectPage != null; //todo: validate path

  ///meta
  let og_pageUrl = `${server}/`;
  let og_description = `${siteAboutVariant}`;
  let og_pageImage = `${logo}`;

  return {
    props: {
      redirectPage,
      isValidRedirectPage,
      og_pageUrl,
      og_description,
      og_pageImage,
    },
  };
};

// const TravelTips: NextPageWithLayout<IPageProps> = (context) => {

const Home: NextPageWithLayout<IPageProps> = ({
  redirectPage,
  isValidRedirectPage,
  og_description,
  og_pageImage,
  og_pageUrl,
}) => {
  // const defaultSortedCountries: ICountryData[] = [];

  const nilEntryText = `None ${oozedVerb}`;
  const defaultNotes = `Tap button to discover all world countries or territories`;

  const [buttonText, setButtonText] = useState('..');
  const [surferWelcomed, setSurferWelcomed] = useState(false);
  const [surferHasOozedBefore, setSurferHasOozedBefore] = useState(false);
  const [globePreferred, setGlobePreferred] = useState(false);

  const { data: session } = useSession(); //google session

  const router = useRouter();

  const {
    theme,
    setTheme,
    surferCountryData,
    authenticated,
  } = useContext(DataStore);

  //**Effect ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  useEffect(() => {
   
  }, [buttonText, authenticated, session]);
  //**Effect ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  const gotoPage = (pg: string) => {
    //put any pg preops in pg, trigger 'em with hook listener..
    router.push(`${pg}`);
  };

  return (
    <section className="my-page-full mx-auto text-center">
       <h1 className="my-text-high-contrast-xl pt-0 mx-auto text-center">
       <img
            src={logo}
            onClick={()=>{}}
            alt="Logo"
            width="90"
            height="auto"
            className={` ${!surferWelcomed ? 'mt-16' : 'mt-6'} cursor-text`}
          />

      </h1>
      <div
                className={`text-center ${surferWelcomed ? 'mt-0' : 'mt-16'}`}
              >
                <p className="">{siteAboutVariant}</p>
              </div>

              <div className="text-center">
                <p className="nil">{`${titleCasePlease(
                  oozeVerb
                )} nothing but cool places`}</p>
                <button
                  className={`my-btn w-36 sm:w-72`}
                  onClick={async () => { }}
                >
                  Start
                </button>
              </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout
      titleBar="Home"
      pageUrl={page.props['og_pageUrl']}
      description={page.props['og_description']}
      pageImage={page.props['og_pageImage']}
      hideNavbar={true}
    >
      {page}
    </PrimaryLayout>
  );
};
