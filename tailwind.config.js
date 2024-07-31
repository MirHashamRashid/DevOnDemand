module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        // primary: '#0a0a0a',
        // accent: '#B809C3',
        'theme-1':{
          background: 'var(--bg-color)',
          btn: 'var(--btn-color)',
          h2: 'var(--h2-color)',
          h3: 'var(--h3-color)',
          h4: 'var(--h4-color)',
          p: 'var(--paragraph-color)',
        },
        'theme-2':{
          background: 'var(--bg-color)',
          btn: 'var(--btn-color)',
          h2: 'var(--h2-color)',
          h4: 'var(--h4-color)',
          p: 'var(--paragraph-color)'
        },
        'theme-3':{
          background: 'var(--bg-color)',
          btn: 'var(--btn-color)',
          h2: 'var(--h2-color)',
          h4: 'var(--h4-color)',
          p: 'var(--paragraph-color)'
        },
        'theme-4':{
          background: 'var(--bg-color)',
          btn: 'var(--btn-color)',
          h2: 'var(--h2-color)',
          h4: 'var(--h4-color)',
          p: 'var(--paragraph-color)'
        },
      },
      clipPath:{
        'custom':'polygon(29% 0, 100% 0, 100% 43%, 100% 100%, 50% 100%, 44% 76%, 24% 59%, 35% 36%, 36% 17%)'
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./src/images/devOnDemandBanner.png')",
        services: "url('./src/images/servicesRaw.jpg')",
        app: 'linear-gradient(to bottom right, #00AFB9, #FED9B7)',
        contact:"url('./src/images/contact-banner.svg')",
        faq:"url('./src/images/faq2.webp')"
      },
      borderRadius: {
        'custom': '0% 100% 16% 84% / 99% 13% 87% 1%',
      },
      willChange: {
        background: 'var(--bg-color)'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.will-change-bg': {
          willChange: 'var(--bg-color)',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
