import React, { createContext, useContext, useState } from 'react';
import { t } from './translations';

const LangContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const d = t[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, d }}>
        {children}
    </LangContext.Provider>
  );
};
