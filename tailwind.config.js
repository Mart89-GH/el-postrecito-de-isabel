/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'vintage-brown': '#8B4513',
        'vintage-cream': '#F5F5DC',
        'sepia': '#704214',
        'antique-white': '#FAEBD7',
        'warm-beige': '#F7F3E9',
        'aged-paper': '#F4F1E8',
        'vintage-gold': '#D4AF37',
        'sepia': '#704214',
        'antique-white': '#FAEBD7',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      backgroundImage: {
        'vintage-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23704214\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}