import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen } from '../../screens/OnBoard/WelcomeScreen';
import { Login } from '../../screens/OnBoard/Login';

const {
  Navigator,
  Screen
} = createStackNavigator();

export default function StackAppRoute () {

  return (
    <Navigator>
      <Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}