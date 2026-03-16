'use client';

import { getLocalizedUrl } from 'intlayer';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocale } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type BeatStyle = {
  borderColor: string;
  glowColor: string;
  scale: number;
  duration: number;
  delay: number;
};

const JAM_CONFIG = {
  colors: ['#ff2e63', '#08d9d6', '#ff9f1c', '#ffe66d', '#6a5acd', '#c77dff', '#00f5d4', '#ff66c4'],

  minScale: 1.03,
  maxScale: 1.1,

  minDuration: 0.5,
  maxDuration: 1.6,

  glowMin: 12,
  glowMax: 30,

  reshuffleInterval: 4000, // ms

  borderWidth: 2,
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStyles(count: number): BeatStyle[] {
  return Array.from({ length: count }).map(() => ({
    borderColor: pick(JAM_CONFIG.colors),
    glowColor: pick(JAM_CONFIG.colors),
    scale: randomBetween(JAM_CONFIG.minScale, JAM_CONFIG.maxScale),
    duration: randomBetween(JAM_CONFIG.minDuration, JAM_CONFIG.maxDuration),
    delay: randomBetween(0, 1),
  }));
}

const Research = () => {
  const content = useIntlayer('home-page');
  const { locale } = useLocale();

  const [jamMode, setJamMode] = useState(false);
  const [styles, setStyles] = useState<BeatStyle[]>([]);

  useEffect(() => {
    if (!jamMode) {
      setStyles([]);
      return;
    }

    setStyles(generateStyles(content.projects.items.length));

    const interval = setInterval(() => {
      setStyles(generateStyles(content.projects.items.length));
    }, JAM_CONFIG.reshuffleInterval);

    return () => clearInterval(interval);
  }, [jamMode, content.projects.items.length]);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <div className='max-w-5xl mx-auto w-full pt-10 research'>
        <div className='max-w-4xl mx-auto flex flex-col gap-5'>
          {content.projects.title}
          {content.projects.description}
        </div>

        {/* JAM BUTTON */}
        <div className='flex justify-center mt-8'>
          <button
            hidden={jamMode}
            onClick={() => setJamMode((v) => !v)}
            className='px-6 py-3 rounded-lg bg-purple-800 hover:bg-purple-700 transition-all duration-300 font-semibold shadow-lg'
          >
            {jamMode ? content.jamButton.disable.value : content.jamButton.enable.value}
          </button>

          <Link hidden={!jamMode} href={getLocalizedUrl('/mission', locale)} prefetch>
            <Image
              className='relative -mt-6'
              src='/images/dance.png'
              title={content.jamButton.disable.value}
              alt={content.jamButton.disable.value}
              height={150}
              width={150}
              preload
            />
          </Link>
        </div>

        <div className='research max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {content.projects.items.map((item, index) => {
            const style = styles[index];

            const glow = style && randomBetween(JAM_CONFIG.glowMin, JAM_CONFIG.glowMax);

            return (
              <div
                key={index}
                className={`item flex flex-col gap-6 bg-gray-700 rounded-lg p-6 text-left ${
                  jamMode ? 'jam-card' : 'hover:scale-105 transition-transform duration-300'
                }`}
                style={
                  jamMode && style
                    ? {
                        border: `${JAM_CONFIG.borderWidth}px solid ${style.borderColor}`,
                        boxShadow: `
                          0 0 ${glow}px ${style.glowColor},
                          0 0 ${glow * 2}px ${style.glowColor},
                          inset 0 0 ${glow / 2}px ${style.glowColor}
                        `,
                        animation: `jamBeat ${style.duration}s ease-in-out ${style.delay}s infinite`,
                        transform: `scale(${style.scale})`,
                        willChange: 'transform, box-shadow',
                      }
                    : undefined
                }
              >
                {item.title}
                {item.subtitle}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes jamBeat {
          0% {
            transform: scale(1) rotate(0deg);
          }

          30% {
            transform: scale(1.06) rotate(-0.5deg);
          }

          50% {
            transform: scale(1.1) rotate(0.5deg);
          }

          70% {
            transform: scale(1.04) rotate(-0.3deg);
          }

          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .jam-card {
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.15s ease;
        }
      `}</style>
    </MarkdownProvider>
  );
};

export default Research;
