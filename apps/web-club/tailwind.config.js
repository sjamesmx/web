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
        // CLUBES (B2B) - Dark theme with blue accents
        club: {
          bg: {
            primary: '#0B0F1A',       // Fondo oscuro principal
            secondary: '#111827',     // Fondo secundario más claro
            card: '#1F2937',          // Fondo de tarjetas
          },
          accent: {
            DEFAULT: '#3B82F6',       // Azul brillante principal
            hover: '#2563EB',         // Azul hover más intenso
            glow: '#60A5FA',          // Azul para efectos glow
            light: '#93C5FD',         // Azul claro para highlights
          },
          text: {
            primary: '#F8FAFC',       // Texto blanco principal
            secondary: '#CBD5E1',     // Texto gris claro
            muted: '#94A3B8',         // Texto gris medio
          },
          border: {
            DEFAULT: '#374151',       // Bordes base
            light: '#4B5563',         // Bordes más claros
            glow: '#3B82F6',          // Bordes con glow
          },
          success: '#10B981',         // Verde éxito/dinero
          glass: {
            light: 'rgba(255, 255, 255, 0.1)',    // Glassmorphism claro
            medium: 'rgba(255, 255, 255, 0.15)',  // Glassmorphism medio
            dark: 'rgba(0, 0, 0, 0.2)',           // Glassmorphism oscuro
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'border-glow': 'borderGlow 2s ease-in-out infinite alternate',
        'rotate-slow': 'rotateSlow 20s linear infinite',
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
        pulseGlow: {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))'
          },
          '50%': { 
            transform: 'scale(1.05)',
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        borderGlow: {
          '0%': { borderColor: 'rgba(59, 130, 246, 0.3)' },
          '100%': { borderColor: 'rgba(59, 130, 246, 0.8)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.16)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};