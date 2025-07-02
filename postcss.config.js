// postcss.config.js  (lägg i projektroten, bredvid package.json)
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,   // nya Tailwind-pluginen
    autoprefixer,  // redan installerad
  ],
};
