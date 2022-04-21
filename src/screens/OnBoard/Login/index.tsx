import React, { useState, useRef, useEffect } from 'react';
import { KeyboardAvoidingView, useWindowDimensions, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { LoginButton } from '../../../components/OnBoard/LoginButton';
import { LoginInput } from '../../../components/OnBoard/LoginInput';

import { 
  Container,
  Form,
  NeedHelpLink,
  ErrorMessage
} from './styles';

export function Login () {
  const [ enabledLogin, setEnabledLogin ] = useState(false);

  const { navigate } = useNavigation<any>();

  const { height } = useWindowDimensions();

  const passwordRef = useRef<any>();
  const schemaRef = useRef<any>({
    email: '',
    password: ''
  });

  const schema = yup.object().shape({
    email: yup.string().email('Digite um email válido.').max(100, 'Máximo de 100 caracteres atingido').min(10, 'Digite um email válido.').required('Digite seu email.'),
    password: yup.string().min(4, 'Digite uma senha válida.').max(30, 'Máximo de caracteres atigindo.').required('Digite sua senha.')
  });
  
  const { control, handleSubmit, formState:  { errors } } = useForm({
    resolver: yupResolver(schema)
  })  


  function handleSelectNextInput () {

    passwordRef.current.focus();

  };


  function handleLoginRequest () {
    //if (enabledLogin){
      
      navigate('LoggedBottomTabAppRoute');

    //}
  };


  async function handleValidate () {
    try {

      await schema.validate(schemaRef.current);

      setEnabledLogin(true);

    } catch(e) {

      setEnabledLogin(false);

    }
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior="position" enabled={true} keyboardVerticalOffset={height*0.09}>
          <Form>
            <Controller 
              control={control}
              name="loginEmail"
              defaultValue=""
              render={({ field: { onChange, value,  ref}}) => (
                <LoginInput 
                  label="Email ou número de telefone"
                  value={value}
                  onChangeText={(text: string) => { 

                    schemaRef.current.email = text;
                    onChange(text);

                    handleValidate()

                  }}
                  autoCapitalize='none'
                  returnKeyType="next"
                  autoCorrect={false}
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  blurOnSubmit={false}
                  onSubmitEditing={handleSelectNextInput}
                />
              )}
            />

            {errors.loginEmail && <ErrorMessage>{errors.message}</ErrorMessage>}            
            
            <Controller 
              control={control}
              name="loginPassword"
              render={({ field: { onChange, value }}) => (
                <LoginInput 
                  label="Senha"
                  secureTextEntry={true}
                  value={value}
                  autoCorrect={false}
                  onChangeText={(text: string) => { 

                    schemaRef.current.password = text;
                    onChange(text);

                    handleValidate()

                  }}
                  keyboardAppearance="dark"
                  returnKeyType="done"
                  blurOnSubmit={false}
                  onSubmitEditing={handleLoginRequest}
                  passwordRef={passwordRef}
                />
              )}
            /> 

            { errors.loginPassword && <ErrorMessage>{errors.message}</ErrorMessage>}
            

            <LoginButton 
              title="Entrar"
              onPress={handleLoginRequest}
              enabled={enabledLogin}
            />

            <NeedHelpLink>Precisa de ajuda?</NeedHelpLink>
          </Form>
        </KeyboardAvoidingView>

      </Container>
    </TouchableWithoutFeedback>
  )
};
