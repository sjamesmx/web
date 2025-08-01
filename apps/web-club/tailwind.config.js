/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CLUBES (B2B) - Paleta profesional
        club: {
          bg: {
            primary: '#FFFFFF',       // Fondo blanco
            secondary: '#F8FAFC',     // Fondo gris muy claro
          },
          accent: {
            DEFAULT: '#0EA5E9',       // Azul cielo vibrante
            hover: '#0284C7',         // Azul hover
          },
          text: {
            primary: '#0F172A',       // Texto casi negro
            secondary: '#64748B',     // Texto gris medio
          },
          border: '#E2E8F0',          // Bordes claros
          success: '#10B981',         // Verde éxito/dinero
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};