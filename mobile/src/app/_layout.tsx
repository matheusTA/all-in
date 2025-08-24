import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Text>unistyles configured</Text>
      <StatusBar backgroundColor="#000000" />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
}));
