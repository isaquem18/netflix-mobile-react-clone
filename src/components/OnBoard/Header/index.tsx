import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { 
  Container,
  NetflixLogo,
  Menu,
  Privacity,
  Login,
  Options,
  Option
} from './styles';

export function Header () {
  const { navigate } = useNavigation<any>();

  function handleChangePage (name: string) {
    navigate(name);
  };

  return (
    <Container>
      <NetflixLogo source={require('../../../assets/images/brand/netflix.png')} />
      <Menu>
        <TouchableWithoutFeedback onPress={() => handleChangePage('Privacity')}>
          <Privacity>PRIVACIDADE</Privacity>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleChangePage('Login')}>
          <Login>ENTRAR</Login>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Options>
            <Option />
            <Option />
            <Option />
          </Options>
        </TouchableWithoutFeedback>
      </Menu>
    </Container>
  )
}