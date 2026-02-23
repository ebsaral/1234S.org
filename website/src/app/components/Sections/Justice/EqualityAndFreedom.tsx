import { FerrisWheel, LoaderPinwheel } from 'lucide-react';
import { MarkdownProvider, useIntlayer } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent } from '../../ui/card';

const EqualityAndFreedom = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer(`justice-section`);

  return (
    <MarkdownProvider renderMarkdown={(md) => <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>}>
      <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 relative ${className}`}>
        {/* LEFT */}
        <Card className='bg-white/90 bg-gradient-to-b sm:bg-gradient-to-t from-green-100 to-green-50 backdrop-blur-sm shadow-xl border-0'>
          <CardContent className='px-8 pt-0 pb-2'>
            <article className='prose-custom-all'>
              <div className='text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3'>
                <FerrisWheel size={40} className='text-blue-600 mt-7' />
                {content.equality.title}
              </div>

              <strong>
                <em>{content.equality.subtitle}</em>
              </strong>

              {content.equality.description}
            </article>
          </CardContent>
        </Card>

        {/* RIGHT */}
        <Card className='bg-white/90 backdrop-blur-sm bg-gradient-to-t sm:bg-gradient-to-t from-green-100 to-green-50 shadow-xl border-0'>
          <CardContent className='px-8 pt-0 pb-2'>
            <article className='prose-custom-all'>
              <div className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3'>
                <LoaderPinwheel size={40} className='text-purple-600 mt-6' />
                {content.freedom.title}
              </div>

              <strong>
                <em>{content.freedom.subtitle}</em>
              </strong>

              {content.freedom.description}
            </article>
          </CardContent>
        </Card>
      </div>
    </MarkdownProvider>
  );
};

export default EqualityAndFreedom;
