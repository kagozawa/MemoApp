import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Link, router } from 'expo-router';

import Button from '../../components/Button';

const handlePress = (): void => {
  // ログイン
  router.replace('/memo/list');
};

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder='Email address' />
        <TextInput style={styles.input} placeholder='Password' />
        <Button label='Submit' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <Link href='/auth/signup' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000',
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});

export default Login;
