import { ComponentProps } from 'react';
import { ExtraProps } from 'react-markdown';
import { PlacesType } from 'react-tooltip';

type AnchorProps = ComponentProps<'a'> & ExtraProps;

const CustomMarkdownLink = ({ href, children, node }: AnchorProps) => {
  const tooltip = node?.properties?.['data-tooltip-id'];
  const content = node?.properties?.['data-tooltip-content'];
  const place = node?.properties?.['data-tooltip-place'] || 'top';

  if (tooltip && content) {
    return (
      <a
        className='tooltip-link'
        data-tooltip-id={tooltip as string}
        data-tooltip-content={content as string}
        data-tooltip-place={place as PlacesType}
      >
        {children}
      </a>
    );
  }

  return <a href={href}>{children}</a>;
};

export default CustomMarkdownLink;
