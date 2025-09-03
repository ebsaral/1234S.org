// Settings configuration for Logical Spirituality website template
export const templateSettings = {
  // Theme configuration
  themes: {
    spiritual: {
      name: "Spiritual",
      colors: {
        primary: 'from-blue-600 to-purple-600',
        secondary: 'from-indigo-500 to-blue-500',
        accent: 'from-purple-500 to-indigo-500',
        background: 'bg-gradient-to-br from-blue-50 to-purple-50',
        text: 'text-gray-800',
        card: 'bg-white/80 backdrop-blur-sm',
        border: 'border-blue-200'
      }
    },
    minimalist: {
      name: "Minimalist",
      colors: {
        primary: 'from-gray-800 to-gray-600',
        secondary: 'from-gray-600 to-gray-500',
        accent: 'from-gray-700 to-gray-500',
        background: 'bg-gray-50',
        text: 'text-gray-900',
        card: 'bg-white',
        border: 'border-gray-200'
      }
    }
  },

  // Language configuration
  languages: {
    en: {
      name: "English",
      code: "en",
      flag: "🇺🇸"
    },
    tr: {
      name: "Türkçe",
      code: "tr",
      flag: "🇹🇷"
    }
  },

  // Animation settings
  animations: {
    parallaxIntensity: 0.5, // 0.1 to 1.0
    scrollRevealDelay: 200, // milliseconds
    scrollRevealDuration: 800, // milliseconds
    parallaxOffset: {
      hero: 0.5,
      sections: 0.3,
      video: 0.4,
      completion: 0.2
    }
  },

  // Section visibility toggles
  sections: {
    hero: true,
    interconnectedness: true,
    naturesJustice: true,
    health: true,
    examples: true,
    video: true,
    completion: true
  },

  // Feature toggles
  features: {
    themeToggle: true,
    languageToggle: true,
    parallaxEffects: true,
    scrollReveal: true,
    videoSection: true,
    iconAreas: true
  },

  // Default settings
  defaults: {
    theme: 'spiritual',
    language: 'en',
    animationSpeed: 'normal'
  },

  // Content customization flags
  customization: {
    allowThemeEditing: true,
    allowContentEditing: true,
    allowLanguageAddition: true,
    allowSectionReordering: true
  }
};

// Export individual setting categories for easier access
export const { themes, languages, animations, sections, features, defaults, customization } = templateSettings;