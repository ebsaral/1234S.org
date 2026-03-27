import { useIntlayer, useLocale } from 'react-intlayer';
import MarkdownProvider from './MarkdownProvider';

const LastUpdate = ({ className }: { className?: string }) => {
  const { locale } = useLocale();
  const content = useIntlayer('last-update');
  const date = new Date(content.date.value);
  return (
    <MarkdownProvider>
      <div className={`flex flex-col gap-2 text-sm ${className}`}>
        <div>
          {content.update({ date: date.toLocaleString(locale, { year: 'numeric', month: 'long', day: '2-digit' }) })}
        </div>
        <div className='text-xs'>
          <em>{content.reason}</em>
        </div>
      </div>
    </MarkdownProvider>
  );
};

export default LastUpdate;
