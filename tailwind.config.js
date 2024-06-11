module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        button: '#5cb85c',
        buttonHover: '#387a38',
        textColor: '#520887',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      animation: {
        spin: 'spin 5s linear infinite',
      },
      keyframes: {
        spin: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      clipPath: {
        circle: 'circle(40% at 50% 50%)',
      },
    },
  },
  plugins: [],
}
