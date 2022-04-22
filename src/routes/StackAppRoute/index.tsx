import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { Text, useWindowDimensions } from 'react-native';

import { NetflixLogo } from '../../components/OnBoard/Header/styles';

//ROUTES
import { WelcomeScreen } from '../../screens/OnBoard/WelcomeScreen';
import { Login } from '../../screens/OnBoard/Login';
import { Privacity } from '../../screens/OnBoard/Privacity';
import { LoggedBottomTabAppRoute } from '../LoggedBottomTabAppRoute';

const {
  Navigator,
  Screen
} = createStackNavigator();

export default function StackAppRoute () {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Navigator>
      <Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Screen name="Login" component={Login} options={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: theme.colors.dark,
          shadowColor: 'transparent'
        },
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          height: 40,
          width: 50
        },
        headerTintColor: '#fff',
        headerBackTitleStyle: {
          color: theme.colors.light
        },
        headerRightContainerStyle: {
          height: 40,
          right: 0,
          width: width*0.82,
          position: 'absolute',
          alignItems: 'flex-start'
        },
        headerRight: () => <NetflixLogo source={require('../../assets/images/brand/netflix.png')} />
      }}/>
      <Screen name="Privacity" component={Privacity} options={{ headerShown: false }} />
      <Screen name="LoggedBottomTabAppRoute" component={LoggedBottomTabAppRoute} options={{
        headerShown: false,
        gestureEnabled: false
      }}/>
    </Navigator>
  )
}