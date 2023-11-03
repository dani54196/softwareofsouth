import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher.js";
import enTranslation from "./lang/en.json";
import esTranslation from "./lang/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <LanguageSwitcher />
          <h1>{i18n.t("header.index")}</h1>
          <h1>{i18n.t("header.education")}</h1>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
