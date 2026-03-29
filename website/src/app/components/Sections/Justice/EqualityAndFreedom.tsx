import { LuFerrisWheel, LuLoaderPinwheel } from 'react-icons/lu';
import { useIntlayer } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';
import { Card, CardContent } from '../../ui/card';

const EqualityAndFreedom = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer(`justice-section`);

  return (
    <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 relative ${className}`}>
      {/* LEFT */}
      <Card className='bg-white/90 bg-gradient-to-b sm:bg-gradient-to-t from-green-100 to-green-50 backdrop-blur-sm shadow-xl border-0'>
        <CardContent className='px-8 pt-0 pb-2'>
          <article className='prose-custom-all'>
            <div className='text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3'>
              <LuFerrisWheel size={40} className='text-purple-600 mt-7' />
              <MarkdownRenderer>{content.equality.title.value}</MarkdownRenderer>
            </div>

            <MarkdownRenderer>{content.equality.subtitle.value}</MarkdownRenderer>

            <MarkdownRenderer>{content.equality.description.value}</MarkdownRenderer>
          </article>
        </CardContent>
      </Card>

      {/* RIGHT */}
      <Card className='bg-white/90 backdrop-blur-sm bg-gradient-to-t sm:bg-gradient-to-t from-green-100 to-green-50 shadow-xl border-0'>
        <CardContent className='px-8 pt-0 pb-2'>
          <article className='prose-custom-all'>
            <div className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3'>
              <LuLoaderPinwheel size={40} className='text-blue-600 mt-6 animate-spinSlow' />
              <MarkdownRenderer>{content.freedom.title.value}</MarkdownRenderer>
            </div>

            <MarkdownRenderer>{content.freedom.subtitle.value}</MarkdownRenderer>

            <MarkdownRenderer>{content.freedom.description.value}</MarkdownRenderer>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default EqualityAndFreedom;
