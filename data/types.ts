import { Schema } from './my-schemas';

/*ICustomData*/
export interface ICustomData {
  success?: boolean;
  message: string;
  verbose?: any;
  data?: any;
}

/*ICountryData*/
export interface ICountryData {
  name: string;
  officialName: string;
  nativeName: string;
  portugueseNameTranslation: string;
  russianNameTranslation: string;
  altSpellings: string[];
  iso2Code: string;
  iso3Code: string;
  numericCode: number;
  callingCode: string;
  tld: string;
  capitals: string[];
  subregion: string;
  region: string;
  population: IPopulation;
  latlng: string[];
  capitalLatLng: string[];
  area: string[];
  googleMaps: string;
  demonym: IDemonym;
  gini: IGini;
  timezones: string[];
  continents: string[];
  borders: string[];
  flag: string;
  coatOfArms: string;
  currencies: ICurrency[];
  languages: ILanguage[];
  startOfWeek: string;
  drivingSide: string;
  postalCode: IPostalCode;
  independent: boolean;
  landlocked: boolean;
  unMember: boolean;
}

/*Others*/
export interface ILocationData {
  ip: string;
  country: string;
  iso2: string;
  city: string;
  timezone: string;
  continent: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguage {
  code: string;
  name: string;
}

export interface IDemonym {
  m: string;
  f: string;
}

export interface IGini {
  year: number;
  index: number;
}

export interface IPopulation {
  year: number;
  total: number;
  source: number;
}

export interface IPostalCode {
  format: string;
  regex: string;
}

export type ICountryDataOrCustomData =
  | ICountryData[]
  | ICountryData
  | ICustomData;
