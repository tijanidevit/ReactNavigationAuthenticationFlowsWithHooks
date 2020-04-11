import React from 'react';
import {StyleSheet} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';

export function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('bithovendev@gmail.com');
  const [password, setPassword] = React.useState('abc');

  return (
    <AuthContainer>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => {
          login();
        }}
      />
      <TextButton
        title={'Have u an account? Create one'}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
