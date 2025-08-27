import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/ui/button';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function Layout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hide();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>unistyles configured.</Text>
        <Button.Root style={styles.button} size="small" onPress={() => {}}>
          <Text>💥</Text>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <Button.Root onPress={() => {}}>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <Button.Root size="large" onPress={() => {}}>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <Button.Root onPress={() => {}}>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <Button.Root variant="secundary" onPress={() => {}}>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <Button.Root variant="outline" onPress={() => {}}>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <Button.Root variant="destructive" onPress={() => {}}>
          <Button.Label>Entrar</Button.Label>
        </Button.Root>
        <StatusBar backgroundColor="#000000" style="light" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    gap: 4,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.primaryForeground,
    fontSize: 10,
  },
  button: {
    width: '100%',
  },
}));
