import { Theme } from '../../interfaces/ThemeInterface';

export const light: Theme = {
  name: 'light',
  properties: {
    '--first-color-second': 'hsl(var(--hue-color), 69%, 61%)',
    '--title-color': 'hsl(var(--hue-color), 8%, 15%)',
    '--text-color': 'hsl(var(--hue-color), 8%, 45%)',
    '--input-color': 'hsl(var(--hue-color), 70%, 96%)',
    '--body-color': 'hsl(var(--hue-color), 60%, 99%)',
    '--scroll-bar-color': 'hsl(var(--hue-color), 12%, 90%)',
    '--scroll-thumb-color': 'hsl(var(--hue-color), 12%, 80%)',
    '--container-color': '#fff',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--first-color-second': 'hsl(var(--hue-color), 30%, 8%)',
    '--title-color': 'hsl(var(--hue-color), 8%, 95%)',
    '--text-color': 'hsl(var(--hue-color), 8%, 75%)',
    '--input-color': 'hsl(var(--hue-color), 29%, 16%)',
    '--body-color': 'hsl(var(--hue-color), 28%, 12%)',
    '--container-color': 'hsl(var(--hue-color), 29%, 16%)',
    '--scroll-bar-color': 'hsl(var(--hue-color), 12%, 48%)',
    '--scroll-thumb-color': 'hsl(var(--hue-color), 12%, 36%)',
  },
};
