import { ComponentProps } from 'react';
import { ExtraProps } from 'react-markdown';

type AnchorProps = ComponentProps<'a'> & ExtraProps;

const CustomMarkdownLink = ({ href, children, node }: AnchorProps) => {
  const tooltip = (node?.properties as any)?.['data-tooltip-id'];
  const content = (node?.properties as any)?.['data-tooltip-content'];
  const place = (node?.properties as any)?.['data-tooltip-place'] || 'top';

  if (tooltip && content) {
    return (
      <a className='tooltip-link' data-tooltip-id={tooltip} data-tooltip-content={content} data-tooltip-place={place}>
        {children}
      </a>
    );
  }

  return <a href={href}>{children}</a>;
};

export default CustomMarkdownLink;
