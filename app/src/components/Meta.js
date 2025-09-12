import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const Meta = () => {
 const { t } = useLanguage()

  return (
    <Helmet>
      <title>{t('navigation.home')}</title>
      <meta name="title" content={t('navigation.home')} />
      <meta name="description" content="A philosophical movement project." />
    </Helmet>
  );
};

export default Meta;