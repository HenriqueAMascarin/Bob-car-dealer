import type { Config } from 'tailwindcss';

export default {
  prefix: 'tw-',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customWhiteBG: '#F2F2F2',
        customDarkBlue: '#273859',
        customWeakDarkBlue: '#274073',
        customBlue: '#0460D9',
        customRed: '#FF0004',
        customWeakGray: '#939393',
      },
    },
  },
  plugins: [],
} satisfies Config;
