import React, { useState } from 'react';
import { AsyncStorage, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/airbnb_logo.png';
import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

import api from '~/services/api';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit() {
    Keyboard.dismiss();
    if (email.length === 0 || password.length === 0) {
      setError('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/sessions', {
          email,
          password,
        });

        setError(response);

        await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);

        navigation.navigate('Main');
      } catch (_err) {
        setError('Houve um problema com o login, verifique suas credenciais!');
      }
    }
  }

  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <Input
        placeholder="Endereço de e-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
      <Button onPress={handleSubmit}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SignUpLink onPress={() => navigation.navigate('SignUp')}>
        <SignUpLinkText>Criar conta grátis</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
}

SignIn.navigationOptions = {
  header: null,
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
