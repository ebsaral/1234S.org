import Image from 'next/image';
import { ComponentProps } from 'react';
import { ExtraProps } from 'react-markdown';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type ImageProps = ComponentProps<'img'> & ExtraProps;

const CustomMarkdownImage = ({ src, alt, title }: ImageProps) => {
  return (
    <figure className='mx-auto my-8 flex w-full flex-col items-center px-4 sm:px-6'>
      <div className='relative w-full h-auto p-0 max-w-[600px] aspect-[3/2]'>
        <Zoom>
          <Image
            className='mt-0 rounded-lg object-cover hover:scale-105 transition-all duration-300'
            src={src as string}
            alt={alt as string | ''}
            title={alt as string | ''}
            fill
          />
        </Zoom>
      </div>
      {title && <figcaption className='text-center text-sm text-muted-foreground mt-4'>{title} </figcaption>}
    </figure>
  );
};

export default CustomMarkdownImage;
