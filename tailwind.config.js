/**
 * Tailwind CSS configuration for the Model Vault desktop app. This config
 * defines the dark colour palette and extends the default theme to match
 * the cyberpunk aesthetic described in the product spec. Feel free to
 * extend or override the palette and breakpoints as needed.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05080C',
        panel: '#0B1118',
        card: '#0E1620',
        cardHover: '#121D29',
        border: '#1C2A36',
        primary: '#39FF14',
        primarySoft: 'rgba(57,255,20,0.16)',
        blue: '#2EA8FF',
        purple: '#8B5CF6',
        warning: '#FACC15',
        danger: '#EF4444',
        text: '#F8FAFC',
        muted: '#8FA3B8',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};