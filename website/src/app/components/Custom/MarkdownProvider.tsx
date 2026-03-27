import { MarkdownProvider } from 'react-intlayer/markdown';
import Markdown from 'react-markdown';
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
        <Markdown remarkPlugins={[remarkGfm, remarkAttrs]} components={components}>
          {markdown}
        </Markdown>
      )}
    >
      {children}
    </MarkdownProvider>
  );
};

export default MP;
