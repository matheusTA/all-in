/* eslint-disable @typescript-eslint/no-empty-object-type */
import { appThemes, breakpoints } from '../config/theme';

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
