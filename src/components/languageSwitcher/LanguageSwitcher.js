import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;

{
  /* <div>
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
</div>; */
}
