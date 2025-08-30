import { createContext, ReactNode, useContext } from 'react';
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  ViewStyle,
} from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

interface PressableLabelProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

function PressableLabel({ style, children, ...props }: PressableLabelProps) {
  const { variant, size } = useContext(PressableContext);
  styles.useVariants({ variant, size });

  return (
    <Text numberOfLines={1} style={[styles.label, style]} {...props}>
      {children}
    </Text>
  );
}

type Variants = UnistylesVariants<typeof styles>;

export interface PressableRootProps extends RNPressableProps {
  variant?: Variants['variant'];
  size?: Variants['size'];
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const PressableContext = createContext<Variants>({} as Variants);

function PressableRoot({
  variant,
  size,
  fullWidth = false,
  disabled = false,
  style,
  children,
  ...props
}: PressableRootProps) {
  styles.useVariants({ variant, size });

  return (
    <PressableContext.Provider value={{ variant, size }}>
      <RNPressable
        disabled={disabled}
        style={({ pressed }) => [styles.root(pressed, fullWidth, disabled), style]}
        {...props}
      >
        {children}
      </RNPressable>
    </PressableContext.Provider>
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

export const Pressable = {
  Root: PressableRoot,
  Label: PressableLabel,
};
