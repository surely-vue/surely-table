import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  include: [/\.vue$/, /\.vue\?vue/, /\.[jt]sx$/, /\.html$/],
  presets: [presetUno()],
  shortcuts: {
    'card-border': ['rounded', 'shadow-sm'],
    'page-bg': ['bg-$background-color-base'],
    'card-bg': ['bg-$container-background'],
    'borderless-component-background': ['bg-$borderless-component-background'],
    'text-color': 'text-$text-color',
    'text-color-secondary': 'text-$text-color-secondary',
    'text-color-gray': 'text-$text-color-gray',
  },
  theme: {
    borderRadius: {
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
    },
    colors: {
      blue: '#1055FF',
    },
    boxShadow: {
      DEFAULT: '0px 2px 14px 0px rgba(0,0,0,0.08)',
      small: '0px 2px 14px rgba(0,0,0,0.03)',
      card: '0px 0px 7px 0px rgba(0,0,0,0.08)',
    },
    // extend: {},
  },

  rules: [
    ['divider-top', { 'box-shadow': 'inset 0px 1px 0px var(--divider-color)' }],
    [
      'divider-top-bottom',
      {
        'box-shadow':
          'inset 0px 1px 0px var(--divider-color), inset 0px -1px 0px var(--divider-color)',
      },
    ],
    ['divider-bottom', { 'box-shadow': 'inset 0px -1px 0px var(--divider-color)' }],
    ['divider-right', { 'box-shadow': 'inset -1px 0px 0px var(--divider-color)' }],
    ['divider-left', { 'box-shadow': 'inset 1px 0px 0px var(--divider-color)' }],
  ],
});
