import { useIntlayer } from 'react-intlayer';

const License = ({ className }: { className?: string }) => {
  const content = useIntlayer('license');
  return (
    <a
      className={`flex flex-col gap-2 font-semibold text-sm ${className}`}
      href={content.url.value}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>{content.text}</span>
    </a>
  );
};

export default License;
