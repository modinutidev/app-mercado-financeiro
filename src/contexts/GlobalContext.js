import {createContext} from 'react';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
