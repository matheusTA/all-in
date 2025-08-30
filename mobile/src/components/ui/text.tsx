import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { ThemeColors } from '../../config/theme';

type Variants = UnistylesVariants<typeof styles>;

interface TextProps extends RNTextProps {
  color?: ThemeColors;
  size?: Variants['size'];
  weight?: Variants['weight'];
  align?: Variants['align'];
  style?: StyleProp<TextStyle>;
}

export function Text({ color, size, weight, align, style, children, ...props }: TextProps) {
  styles.useVariants({ size, weight, align });

  return (
    <RNText style={[styles.root(color), style]} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: (color: ThemeColors | undefined) => ({
    color: color ? theme.colors[color] : theme.colors.foreground,

    variants: {
      weight: {
        default: {
          fontWeight: 'normal',
        },
        bold: {
          fontWeight: 'bold',
        },
      },
      align: {
        default: {
          textAlign: 'left',
        },
        center: {
          textAlign: 'center',
        },
        right: {
          textAlign: 'right',
        },
      },
      size: {
        xs: {
          fontSize: theme.fontSize.xs,
        },
        sm: {
          fontSize: theme.fontSize.sm,
        },
        default: {
          fontSize: theme.fontSize.md,
        },
        lg: {
          fontSize: theme.fontSize.lg,
        },
        xl: {
          fontSize: theme.fontSize.xl,
        },
        '2xl': {
          fontSize: theme.fontSize['2xl'],
        },
        '3xl': {
          fontSize: theme.fontSize['3xl'],
        },
        '4xl': {
          fontSize: theme.fontSize['4xl'],
        },
        '5xl': {
          fontSize: theme.fontSize['5xl'],
        },
        '6xl': {
          fontSize: theme.fontSize['6xl'],
        },
        '7xl': {
          fontSize: theme.fontSize['7xl'],
        },
        '8xl': {
          fontSize: theme.fontSize['8xl'],
        },
        '9xl': {
          fontSize: theme.fontSize['9xl'],
        },
      },
    },
  }),
}));
