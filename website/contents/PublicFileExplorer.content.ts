import { t, type Dictionary } from 'intlayer';

const publicFileExplorerContent = {
  key: 'public-file-explorer',
  content: {
    title: t({
      en: 'File Explorer',
      tr: 'Dosya Gezgini',
    }),
    columnsHeader: t({
      en: 'Name / Size / Last Modified',
      tr: 'Ad / Boyut / Son Değiştirilme',
    }),
    loading: t({
      en: 'Loading files and metadata...',
      tr: 'Dosyalar ve meta veriler yükleniyor...',
    }),
    empty: t({
      en: 'No files found.',
      tr: 'Dosya bulunamadı.',
    }),
    fetchError: t({
      en: 'Failed to fetch file directory.',
      tr: 'Dosya dizini alınamadı.',
    }),
    unknownError: t({
      en: 'An unexpected error occurred.',
      tr: 'Beklenmeyen bir hata oluştu.',
    }),
  },
} satisfies Dictionary;

export default publicFileExplorerContent;
