import { TR, US } from 'country-flag-icons/react/3x2';
import { Locales, LocalesValues } from 'intlayer';

export const getFlagIcon = (locale: LocalesValues) => {
  switch (locale) {
    case Locales.TURKISH:
      return <TR className='' />;
    case Locales.ENGLISH:
      return <US className='' />;
    default:
      return null;
  }
};
