import { StyleSheet } from "react-native-unistyles";

const defaultTheme = {
  colors: {
    primary: "#ff1ff4",
    secondary: "#1ff4ff",
    // any nesting, spreading, arrays, etc.
  },
  // functions, external imports, etc.
  gap: (v: number) => v * 8,
} as const;

export const appThemes = {
  default: defaultTheme,
} as const;

export const breakpoints = {
  xs: 0, // <-- make sure to register one breakpoint with value 0
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
} as const;

StyleSheet.configure({
  settings: {
    initialTheme: "default",
  },
  themes: appThemes,
  breakpoints,
});
