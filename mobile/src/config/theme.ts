import { StyleSheet } from 'react-native-unistyles';

const zincColorsPalette = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
} as const;

const greenColorsPalette = {
  50: '#c1ffd5',
  100: '#5bffa1',
  200: '#00e381',
  300: '#00c16d',
  400: '#00a35b',
  500: '#00864a',
  600: '#006a39',
  700: '#004f29',
  800: '#00361a',
  900: '#00210e',
  950: '#001507',
} as const;

export const defaultTheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',

    destructive: '#f87171',
    destructiveForeground: '#fafafa',

    zinc: zincColorsPalette,
    green: greenColorsPalette,

    // Base - fundo principal e cor do texto padrão
    background: zincColorsPalette[950],
    foreground: zincColorsPalette[50],

    // Card - superfícies de destaque (cards, modais)
    card: zincColorsPalette[900],
    cardForeground: zincColorsPalette[50],

    // Popover / Dropdowns
    popover: zincColorsPalette[900],
    popoverForeground: zincColorsPalette[50],

    // Ações principais (botões primários, links de destaque)
    primary: greenColorsPalette[500],
    primaryForeground: zincColorsPalette[50],

    // Ações secundárias (botões secundários, menos ênfase)
    secondary: zincColorsPalette[800],
    secondaryForeground: zincColorsPalette[50],

    // Conteúdo menos importante (descrições, labels secundários)
    muted: zincColorsPalette[800],
    mutedForeground: zincColorsPalette[400],

    // Acentos visuais (hover, badges, detalhes sutis)
    accent: zincColorsPalette[700],
    accentForeground: zincColorsPalette[50],

    // Bordas e inputs (caixas de texto, divisores)
    border: zincColorsPalette[800],
    input: zincColorsPalette[700],

    // Destaque de foco (inputs, botões ao receber foco)
    ring: zincColorsPalette[500],
  },
  rounded: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 120,
  },
  gap: (v: number) => v * 8,
  size: (value: number) => parseInt((value * 4).toFixed(0), 10),
} as const;

export const appThemes = {
  default: defaultTheme,
} as const;

export const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
} as const;

StyleSheet.configure({
  settings: {
    initialTheme: 'default',
  },
  themes: appThemes,
  breakpoints,
});
