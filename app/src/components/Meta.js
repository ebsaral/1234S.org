import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';

const Meta = () => {
 const { t } = useLanguage()

  return (
    <>
    <title>{t('home')}</title>
    </>
  );
};

export default Meta;