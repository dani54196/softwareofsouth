import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            openSource: "Open Source",
            contactMe: "Contact Me",
          },
          greeting: {
            subTitle:
              "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
          },
          footer: {
            madeBy: "Made by",
          },
        },
      },
      es: {
        translation: {
          navbar: {
            home: "Inicio",
            education: "Educación",
            experience: "Experiencia",
            projects: "Proyectos",
            openSource: "Codigo Abierto",
            contactMe: "Contacto",
          },
          greeting: {
            subTitle:
              "Un apasionado que siempre se esfuerza por trabajar en productos de extremo a extremo que desarrollan sistemas sociales y técnicos sostenibles y escalables para crear impacto.",
          },
          footer: {
            madeBy: "Hecho por",
          },
        },
      },
    },
  });

export default i18n;
