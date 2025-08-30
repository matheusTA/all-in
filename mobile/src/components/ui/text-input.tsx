import { View, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle, StyleProp } from 'react-native';
import { StyleSheet, UnistylesVariants, useUnistyles } from 'react-native-unistyles';

type Variants = UnistylesVariants<typeof styles>;

interface TextInputProps extends RNTextInputProps {
  size?: Variants['size'];
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export function TextInput({ size, startAdornment, endAdornment, style, ...props }: TextInputProps) {
  const { theme } = useUnistyles();
  styles.useVariants({ size });

  return (
    <View style={styles.root}>
      {startAdornment}
      <RNTextInput placeholderTextColor={theme.colors.inputPlaceholder} style={[styles.input, style]} {...props} />
      {endAdornment}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: theme.rounded.md,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: theme.colors.input,

    variants: {
      size: {
        default: {
          height: 40,
        },
        small: {
          height: 36,
        },
        large: {
          height: 44,
        },
      },
    },
  },
  input: {
    flex: 1,
    color: theme.colors.secondaryForeground,

    variants: {
      size: {
        default: {
          fontSize: theme.fontSize.sm,
        },
        small: {
          fontSize: theme.fontSize.sm,
        },
        large: {
          fontSize: theme.fontSize.md,
        },
      },
    },
  },
}));
