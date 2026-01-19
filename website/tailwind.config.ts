import typograpgy from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'Noto Sans': 'var(--font-noto)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomSpin: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
        orbit1: {
          '0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(0deg) translateX(145px) rotate(0deg)' },
          '50%': { transform: 'rotate(120deg) translateX(145px) rotate(-240deg)' },
          '75%': { transform: 'rotate(240deg) translateX(145px) rotate(-120deg)' },
          '100%': { transform: 'rotate(360deg) translateX(145px) rotate(-360deg)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(0deg) translateX(130px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(130px) rotate(-360deg)' },
        },
        orbitOnCircle1: {
          '0%': { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' },
        },
        orbitOnCircle2: {
          '0%': { transform: 'rotate(0deg) translateX(110px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(110px) rotate(-360deg)' },
        },
        orbitOnCircle3: {
          '0%': { transform: 'rotate(0deg) translateX(130px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(130px) rotate(-360deg)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spin: 'spin 0.2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        gradient: 'gradient 6s ease infinite',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'zoom-spin': 'zoomSpin 2.0s ease-out forwards',
        orbitOnCircle1: 'orbitOnCircle1 8s linear infinite',
        orbitOnCircle2: 'orbitOnCircle2 8s linear infinite',
        orbitOnCircle3: 'orbitOnCircle3 8s linear infinite',
        orbitSlow: 'orbit1 10s linear infinite',
        orbitMid: 'orbit2 7s linear infinite',
        orbitFast: 'orbit3 4s linear infinite',
        glow: 'pulseGlow 2s ease-in-out infinite',
      },
      typography: ({ theme }: PluginAPI) => {
        const getSize = (size: string) => {
          const val = theme(`fontSize.${size}`) as [string, { lineHeight?: string }];
          return val[0];
        };
        const getLineHeight = (size: string) => {
          const val = theme(`fontSize.${size}`) as [string, { lineHeight?: string }];
          return val[1].lineHeight;
        };

        return {
          custom: {
            css: {
              h2: {
                fontSize: getSize('3xl'),
                lineHeight: getLineHeight('3xl'),
              },
              h3: {
                fontSize: getSize('xl'),
                lineHeight: getLineHeight('xl'),
              },
              h4: {
                fontSize: getSize('lg'),
                lineHeight: getLineHeight('lg'),
              },
              p: {
                fontSize: getSize('base'),
                lineHeight: getLineHeight('base'),
              },
            },
          },
          ['custom-sm']: {
            css: {
              h2: {
                fontSize: getSize('5xl'),
                lineHeight: getLineHeight('5xl'),
              },
              h3: {
                fontSize: getSize('2xl'),
                lineHeight: getLineHeight('2xl'),
              },
              h4: {
                fontSize: getSize('xl'),
                lineHeight: getLineHeight('xl'),
              },
              p: {
                fontSize: getSize('lg'),
                lineHeight: getLineHeight('lg'),
              },
            },
          },
          ['custom-md']: {
            css: {
              p: {
                fontSize: getSize('xl'),
                lineHeight: getLineHeight('xl'),
              },
              h4: {
                fontSize: getSize('2xl'),
                lineHeight: getLineHeight('2xl'),
              },
            },
          },
          ['custom-lg']: {
            css: {
              h2: {
                fontSize: getSize('6xl'),
                lineHeight: getLineHeight('6xl'),
              },
              h3: {
                fontSize: getSize('3xl'),
                lineHeight: getLineHeight('3xl'),
              },
              h4: {
                fontSize: getSize('2xl'),
                lineHeight: getLineHeight('2xl'),
              },
            },
          },
        };
      },
    },
  },
  plugins: [typograpgy, animate],
};

export default config;
