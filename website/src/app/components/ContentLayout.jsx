'use client';

import { useIntlayer } from 'next-intlayer';

import { useIntersectionObserver } from '../hooks/useScrollEffects';
import Description from './Custom/Description';
import Quote from './Custom/Quote';

const ContentLayout = ({
  id,
  className,
  sectionKey,
  icon,
  iconColor,
  backgroundColor,
  backgroundOpacity,
  accentColor,
  titleColor,
  descriptionClassName,
  descriptionColor,
  descriptionBoldColor,
  descriptionItalicColor,
  children,
}) => {
  const [sectionRef] = useIntersectionObserver();
  const content = useIntlayer(`${sectionKey}-section`);

  const Icon = icon;

  const getIconColor = () => {
    if (iconColor) {
      return iconColor;
    }
    return 'text-gray-600';
  };

  const getBackgroundColor = () => {
    if (backgroundColor) {
      return backgroundColor;
    }
    return 'bg-gray-50';
  };

  const getAccentColor = () => {
    if (accentColor) {
      return accentColor;
    }
    return 'from-gray-50 to-slate-50';
  };

  return (
    <section id={id} ref={sectionRef} className={`relative py-24 px-2 overflow-hidden ${className || ''}`}>
      {/* Background Color */}
      <div className={`absolute inset-0 ${getBackgroundColor()}`} />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getAccentColor()} opacity-${backgroundOpacity || '80'}`} />

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 ${getIconColor()} transition-all duration-300 hover:scale-110`}
            >
              <Icon size={40} />
            </div>

            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${titleColor || 'text-gray-900'} mb-12 leading-tight whitespace-pre-line`}
            >
              {content.title}
            </h2>

            {/* Quote */}
            {content.quote && <Quote text={content.quote.value} />}

            {/* Description */}
            {content.description && (
              <Description
                text={content.description.value}
                className={descriptionClassName}
                color={descriptionColor}
                boldColor={descriptionBoldColor}
                italicColor={descriptionItalicColor}
              />
            )}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentLayout;
