import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from './text';

interface DividerProps {
  label?: string;
}

export function DividerHorizontal({ label }: DividerProps) {
  const hasLabel = label !== undefined;

  return (
    <View style={styles.root(hasLabel)}>
      <View style={styles.line()} />
      {hasLabel && (
        <Text size="xs" align="center" color="accent">
          {label}
        </Text>
      )}
      <View style={styles.line()} />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: (hasLabel: boolean) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hasLabel ? 8 : 0,
  }),
  line: () => ({
    flex: 1,
    backgroundColor: theme.colors.border,
    height: 1,
    width: '100%',
  }),
}));
