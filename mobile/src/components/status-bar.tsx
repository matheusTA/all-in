import { SystemBars } from 'react-native-edge-to-edge';
import { ThemeColors } from '../config/theme';
import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';

interface StatusBarProps {
  backgroundColor: ThemeColors;
  style: 'light' | 'dark';
}

export function StatusBar({ backgroundColor, style }: StatusBarProps) {
  return (
    <>
      <SystemBars style={style} hidden={false} />
      <View style={styles.container(backgroundColor)} />
    </>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: (backgroundColor: ThemeColors) => ({
    backgroundColor: theme.colors[backgroundColor],
    paddingTop: rt.insets.top,
  }),
}));
