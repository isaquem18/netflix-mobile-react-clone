import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { LoginButton } from '../../../components/OnBoard/LoginButton';
import { LoginInput } from '../../../components/OnBoard/LoginInput';
import { 
  Container,
  Form,
  NeedHelpLink
} from './styles';

export function Login () {

  const passwordRef = React.useRef<any>();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSelectNextInput () {

    passwordRef.current.focus();

  }


  function handleLoginRequest () {

    console.log('entrar')

  } 



  return (
    <Container>
      <KeyboardAvoidingView behavior="position" enabled={true}>
        <Form>
          <LoginInput 
            label="Email ou número de telefone"
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            returnKeyType="next"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="dark"
            blurOnSubmit={false}
            onSubmitEditing={handleSelectNextInput}
          
          />

          <LoginInput 
            label="Senha"
            secureTextEntry={true}
            value={password}
            autoCorrect={false}
            onChangeText={setPassword}
            keyboardAppearance="dark"
            returnKeyType="done"
            blurOnSubmit={false}
            onSubmitEditing={handleLoginRequest}
            passwordRef={passwordRef}

          />

          <LoginButton 
            title="Entrar"
            onPress={handleLoginRequest}
          />

          <NeedHelpLink>Precisa de ajuda?</NeedHelpLink>
        </Form>
      </KeyboardAvoidingView>

    </Container>
  )
};
