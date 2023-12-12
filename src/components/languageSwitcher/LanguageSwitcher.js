import React from "react"; // { useState }
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "EN" },
  es: { nativeName: "ES" },
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}
