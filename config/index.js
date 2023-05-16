export const isDevMode = process.env.NODE_ENV !== 'production';
export const isStorybookMode = process.env.STORYBOOK === 'on'; //$ STORYBOOK=on yarn storybook
export const isTestMode = process.env.NODE_ENV === 'test';

// we want mocked data either on Storybook or tests
export const isMockedEnvironment = isStorybookMode || isTestMode;

export const server = isDevMode
  ? 'http://localhost:3000'
  : 'https://www.countryooze.com';

// export const logo = `/sample-logo.png`;
export const logo = `/logo-oozey.png`;
export const logo_ghosted = `/logo-oozey-ghosted.png`;
export const favicon = logo;
export const defaultFlag = `https://flagcdn.com/w640/ke.png`;

export const generateOgFlagUrl = (iso2Code) =>
  `https://flagcdn.com/w640/${iso2Code.toLowerCase()}.png`;
export const generateOgCoatOfArmsUrl = (iso2Code) =>
  `https://mainfacts.com/media/images/coats_of_arms/${iso2Code.toLowerCase()}.png`;

export const oozeVerb = `ooze`;
export const oozedVerb = `oozed`;
export const siteAbout = `An aggregator site dedicated to you if you derive pleasure moderately oozing or
discovering facts, feed or aura about countries/territories from one squishy world book.`;
export const siteAboutVariant = `An aggregator site to discover facts and feed about countries or to do your homework before travel.`;
export const territoryNotFoundMessage = `Not found. Use a valid uppercase alpha-2 country code`;
export const restCountriesApi = 'https://restcountries.com/v3.1';
