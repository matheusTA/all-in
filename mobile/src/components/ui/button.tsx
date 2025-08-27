import { createContext, ReactNode, useContext } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

type Variants = UnistylesVariants<typeof styles>;

interface ButtonLabelProps {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variants['variant'];
  size?: Variants['size'];
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const ButtonContext = createContext<Variants>({});

function ButtonLabel({ style, children }: ButtonLabelProps) {
  const { variant, size } = useContext(ButtonContext);
  styles.useVariants({ variant, size });

  return (
    <Text numberOfLines={1} style={[styles.buttonLabel, style]}>
      {children}
    </Text>
  );
}

function ButtonRoot({ variant, size, style, children, ...props }: ButtonProps) {
  styles.useVariants({ variant, size });

  return (
    <ButtonContext.Provider value={{ variant, size }}>
      <TouchableOpacity activeOpacity={0.5} style={[styles.buttonRoot, style]} {...props}>
        {children}
      </TouchableOpacity>
    </ButtonContext.Provider>
  );
}

const styles = StyleSheet.create((theme) => ({
  buttonRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
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
  Label: ButtonLabel,
};
