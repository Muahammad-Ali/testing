import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main': '#29B573',
        'table-header': '#F8F9FD'
      },
    },
  },
  corePlugins: {
    // Disable all core plugins
    preflight: false,
    container: false,
    // ...
  },
  plugins: [],
  extend: {
    // ... other extensions

    // Apply !important to all classes
    important: true,
  },
}
export default config
