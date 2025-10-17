/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palo-rosa': {
          50: '#FDF8F9',
          100: '#F9EEF1',
          200: '#F3DDE3',
          300: '#EDCCD5',
          400: '#E7BBC7',
          500: '#E1AAB9',
          600: '#D999AB',
          700: '#D1889D',
          800: '#C9778F',
          900: '#C16681',
        },
        'paper': {
          50: '#FEFDFB',
          100: '#FCF9F6',
          200: '#F9F5F0',
          300: '#F5F0EA',
          400: '#F0EAE3',
          500: '#EBE4DB',
          600: '#D9CFC4',
          700: '#C7BAAD',
          800: '#B5A596',
          900: '#9A8D7E',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-in-out',
        'fade-down': 'fadeDown 0.8s ease-in-out',
        'fade-left': 'fadeLeft 0.8s ease-in-out',
        'fade-right': 'fadeRight 0.8s ease-in-out',
        'scale-in': 'scaleIn 0.6s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
