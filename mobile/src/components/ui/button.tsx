import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

type Variants = UnistylesVariants<typeof styles>;

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: Variants['variant'];
  size?: Variants['size'];
  style?: StyleProp<ViewStyle>;
}

function ButtonRoot({ label, variant, size, style, ...props }: ButtonProps) {
  styles.useVariants({ variant, size });

  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.buttonRoot, style]} {...props}>
      <Text numberOfLines={1} style={styles.buttonLabel}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  buttonRoot: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.rounded.md,

    variants: {
      variant: {
        default: {
          backgroundColor: theme.colors.primary,
        },
        secundary: {
          backgroundColor: theme.colors.secondary,
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary,
        },
        destructive: {
          backgroundColor: theme.colors.destructive,
        },
      },
      size: {
        default: {
          height: 40,
          paddingHorizontal: 16,
        },
        small: {
          height: 36,
          paddingHorizontal: 12,
        },
        large: {
          height: 44,
          paddingHorizontal: 20,
        },
      },
    },
  },
  buttonLabel: {
    flexShrink: 0,
    fontSize: 12,
    fontWeight: 'medium',

    variants: {
      variant: {
        default: {
          color: theme.colors.primaryForeground,
        },
        secundary: {
          color: theme.colors.secondaryForeground,
        },
        outline: {
          color: theme.colors.primary,
        },
        destructive: {
          color: theme.colors.destructiveForeground,
        },
      },
      size: {
        default: {
          fontSize: 12,
        },
        small: {
          fontSize: 10,
        },
        large: {
          fontSize: 14,
        },
      },
    },
  },
}));

export const Button = {
  Root: ButtonRoot,
};
