# Logical Spirituality Website Template

A beautiful, responsive single-page React application for presenting the philosophy of "Logical Spirituality" with parallax effects, theme switching, and internationalization support.

## 🌟 Features

- **🎨 Dual Theme Support**: Spiritual (blue/purple gradients) and Minimalist (grayscale) themes
- **🌍 Internationalization**: English and Turkish language support
- **✨ Parallax Effects**: Smooth scrolling animations and content reveals
- **📱 Responsive Design**: Beautiful on all device sizes
- **🎭 Interactive Elements**: Theme toggle, language switcher, hover effects
- **🎬 Video Section**: Placeholder for interactive video content
- **⚡ Performance Optimized**: Fast loading with modern React practices

## 🏗️ Architecture

### Frontend Stack
- **React** - Modern JavaScript library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Modern icon library

### Key Components
- `ThemeProvider` - Context for theme and language management
- `ParallaxSection` - Reusable parallax wrapper component
- `ScrollReveal` - Smooth reveal animations on scroll
- `IconTextArea` - Consistent icon-text display components

## 🎯 Sections Structure

1. **Hero Section** - Main title, quote, and introduction
2. **Interconnectedness** - Web of life philosophy
3. **Nature's Justice** - Balance and consequences
4. **Health** - Body as mirror of spiritual alignment
5. **Examples** - Real-world applications
6. **Video Section** - Interactive multimedia area
7. **Completion** - Concluding thoughts

## 🔧 Configuration

### Theme Customization
Edit `/app/frontend/src/data/mock.js` to modify:
- Color schemes and gradients
- Typography and spacing
- Animation settings

### Content Management
All content is stored in the `mockData` object:
```javascript
// English content
content.en.sections.interconnectedness = { ... }

// Turkish content  
content.tr.sections.interconnectedness = { ... }
```

### Settings Configuration
Use `/app/frontend/src/config/settings.js` for:
- Feature toggles
- Animation parameters
- Section visibility
- Theme options

## 🌐 Internationalization

### Adding New Languages
1. Add language to `mockData.content.{languageCode}`
2. Translate all section content
3. Update language toggle in `ThemeProvider`

### Current Languages
- **English (en)** - Complete
- **Turkish (tr)** - Needs moderation

## 🎨 Customization Guide

### Color Themes
Modify gradients in theme configuration:
```javascript
spiritual: {
  primary: 'from-blue-600 to-purple-600',
  secondary: 'from-indigo-500 to-blue-500',
  // ... more colors
}
```

### Parallax Effects
Adjust intensity in component props:
```jsx
<ParallaxSection parallaxOffset={0.5} scaleOnScroll={true}>
```

### Content Sections
Each section includes:
- Title and subtitle
- Highlighted quotes
- Summary text
- Icon text areas
- Interactive elements

## 📦 Deployment to GitHub Pages

This app is designed for GitHub Pages deployment:

1. **Build the app**:
   ```bash
   cd frontend && yarn build
   ```

2. **Deploy to GitHub Pages**:
   - Push to your repository
   - Enable GitHub Pages in repository settings
   - Set source to `/docs` or main branch

3. **Environment Variables**:
   No backend required - all content is static

## 🚀 Getting Started

### Development
```bash
# Start development server
cd frontend && yarn start

# Visit http://localhost:3000
```

### Production Build
```bash
# Create optimized build
cd frontend && yarn build
```

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (shadcn components)
│   │   │   ├── ThemeProvider.jsx
│   │   │   ├── ParallaxSection.jsx
│   │   │   └── ScrollReveal.jsx
│   │   ├── data/
│   │   │   └── mock.js (all content data)
│   │   ├── config/
│   │   │   └── settings.js
│   │   └── App.js (main application)
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🎪 Interactive Features

- **Theme Toggle**: Switch between spiritual and minimalist themes
- **Language Toggle**: Switch between English and Turkish
- **Parallax Scrolling**: Background elements move at different speeds
- **Scroll Reveal**: Content appears with smooth animations
- **Hover Effects**: Cards and buttons respond to interaction
- **Video Placeholder**: Ready for multimedia integration

## 🔮 Future Enhancements

- Additional language support
- Video integration with actual content
- Contact form integration
- Blog section for articles
- Search functionality
- Social media integration
- Analytics integration

## 📄 License

This template is designed for the Logical Spirituality philosophy presentation.

---

*Built with ❤️ for sharing wisdom and connecting minds via [Emergent.sh](https://www.emergent.sh)*