import React from 'react';
import { FormattedMessage } from 'react-intl';

const LanguageSwitcher = ({ onChangeLanguage }) => {
  return (
    <div>
      <button onClick={() => onChangeLanguage('en')}>
        <FormattedMessage id="english" />
      </button>
      <button onClick={() => onChangeLanguage('es')}>
        <FormattedMessage id="spanish" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;