import { createContext, ReactNode, useContext } from 'react';
import { StyleProp, Text, TextProps, TextStyle, Pressable, PressableProps, ViewStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

interface ButtonLabelProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

function ButtonLabel({ style, children, ...props }: ButtonLabelProps) {
  const { variant, size } = useContext(ButtonContext);
  styles.useVariants({ variant, size });

  return (
    <Text numberOfLines={1} style={[styles.label, style]} {...props}>
      {children}
    </Text>
  );
}

type Variants = UnistylesVariants<typeof styles>;

interface ButtonRootProps extends PressableProps {
  variant?: Variants['variant'];
  size?: Variants['size'];
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const ButtonContext = createContext<Variants>({} as Variants);

function ButtonRoot({
  variant,
  size,
  fullWidth = false,
  disabled = false,
  style,
  children,
  ...props
}: ButtonRootProps) {
  styles.useVariants({ variant, size });

  return (
    <ButtonContext.Provider value={{ variant, size }}>
      <Pressable
        disabled={disabled}
        style={({ pressed }) => [styles.root(pressed, fullWidth, disabled), style]}
        {...props}
      >
        {children}
      </Pressable>
    </ButtonContext.Provider>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: (pressed: boolean, fullWidth: boolean, disabled: boolean | null) => ({
    width: fullWidth ? '100%' : 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    borderRadius: theme.rounded.md,
    opacity: disabled ? 0.5 : pressed ? 0.8 : 1,

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
        ghost: {
          backgroundColor: 'transparent',
        },
      },
      size: {
        default: {
          height: 40,
          paddingHorizontal: 16,
          paddingVertical: 8,
        },
        small: {
          height: 36,
          paddingHorizontal: 12,
        },
        large: {
          height: 44,
          paddingHorizontal: 32,
        },
        icon: {
          height: 24,
          width: 24,
        },
      },
    },
  }),
  label: {
    flexShrink: 0,
    fontSize: theme.fontSize.sm,
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
        ghost: {},
      },
      size: {
        default: {},
        small: {},
        large: {
          fontSize: theme.fontSize.md,
        },
        icon: {},
      },
    },
  },
}));

export const Button = {
  Root: ButtonRoot,
  Label: ButtonLabel,
};
