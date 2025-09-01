import { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useRouter } from 'expo-router';
import { Text } from '../../components/ui/text';
import { Pressable } from '../../components/ui/pressable';
import { TextInput } from '../../components/ui/text-input';
import { Icon } from '../../components/ui/icon';
import { DividerHorizontal } from '../../components/ui/divider-horizontal';

export default function SignInScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleTogglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text size="6xl" color="foreground" weight="bold">
          All In
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            autoComplete="email"
            size="large"
            startAdornment={<Icon name="atSign" color="inputIcon" />}
          />

          <TextInput
            placeholder="Senha"
            size="large"
            secureTextEntry={!showPassword}
            startAdornment={<Icon name="lock" color="inputIcon" />}
            endAdornment={
              <Pressable.Root variant="ghost" size="icon" onPress={handleTogglePasswordVisibility}>
                <Icon name={showPassword ? 'eye' : 'eyeClose'} color="inputIcon" />
              </Pressable.Root>
            }
          />
          <Text size="sm" align="right" style={styles.forgotPassword}>
            Esqueceu sua senha?
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <Pressable.Root onPress={() => router.navigate('/(private)/(tabs)/(home)')}>
            <Pressable.Label>Entrar</Pressable.Label>
          </Pressable.Root>

          <DividerHorizontal label="Ou" />

          <Pressable.Root variant="secundary" onPress={() => router.navigate('/(private)/(tabs)/(home)')}>
            <Icon name="google" />
            <Pressable.Label>Entrar com Google</Pressable.Label>
          </Pressable.Root>

          <View>
            <Text size="sm" align="center">
              Não tem uma conta?{' '}
              <Text size="sm" color="primary">
                Crie uma conta
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background,
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  form: {
    marginTop: -40,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  inputsContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
  forgotPassword: {
    marginTop: 4,
  },
  actionsContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
}));
