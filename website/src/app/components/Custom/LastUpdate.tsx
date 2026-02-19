import { MarkdownProvider, useIntlayer, useLocale } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const LastUpdate = ({ className }: { className?: string }) => {
  const { locale } = useLocale();
  const content = useIntlayer('last-update');
  const date = new Date(content.date.value);
  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
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
