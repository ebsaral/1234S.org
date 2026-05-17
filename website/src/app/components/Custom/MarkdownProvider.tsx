import { MarkdownProvider } from 'react-intlayer/markdown';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkAttrs from 'remark-attrs';
import remarkGfm from 'remark-gfm';
import CustomMarkdownLink from '../Custom/CustomMarkdownLink';

const MP = ({ children }: React.PropsWithChildren) => {
  const components = {
    a: CustomMarkdownLink,
  };

  return (
    <MarkdownProvider
      renderMarkdown={(markdown) => (
        <Markdown remarkPlugins={[remarkGfm, remarkAttrs]} rehypePlugins={[rehypeRaw]} components={components}>
          {markdown}
        </Markdown>
      )}
    >
      {children}
    </MarkdownProvider>
  );
};

export default MP;
