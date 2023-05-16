import { createContext, ReactNode, useState } from 'react';
import {
  ICountryData,
} from '../../data/types';


interface IContext {
  theme: string;
  setTheme: (str: string) => void;
  authenticated: boolean;
  setAuthenticated: (data: boolean) => void;
  surferCountryData: ICountryData;
  setSurferCountryData: (data: ICountryData) => void;
  validIsoCodes: string[];
  setValidIsoCodes: (data: string[]) => void;
}

const defaultContextData: IContext = {
  theme: 'light',
  setTheme: () => undefined,
  authenticated: false,
  setAuthenticated: () => undefined,
  surferCountryData: {} as ICountryData,
  setSurferCountryData: () => undefined,
    validIsoCodes: [],
  setValidIsoCodes: () => undefined,
};

const DataStore = createContext<IContext>(defaultContextData);

export const DataStoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, _setTheme] = useState(defaultContextData.theme);
  const [authenticated, _setAuthenticated] = useState(
    defaultContextData.authenticated
  );
  const [surferCountryData, _setSurferCountryData] = useState(
    defaultContextData.surferCountryData
  );
  const [validIsoCodes, _setValidIsoCodes] = useState(
    defaultContextData.validIsoCodes
  );
  

  const setTheme = (data: string) => _setTheme(data);
  const setAuthenticated = (data: boolean) => _setAuthenticated(data);
  const setSurferCountryData = (data: ICountryData) =>
    _setSurferCountryData(data);
  const setValidIsoCodes = (data: string[]) => _setValidIsoCodes(data);
  

  return (
    <DataStore.Provider
      value={{
        theme,
        setTheme,
        authenticated,
        setAuthenticated,
        surferCountryData,
        setSurferCountryData,
        validIsoCodes,
        setValidIsoCodes,
      }}
    >
      {children}
    </DataStore.Provider>
  );
};

export default DataStore;
