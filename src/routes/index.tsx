import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackAppRoute from './StackAppRoute';

export default function Routes () {
  return (
    <NavigationContainer>
      <StackAppRoute />
    </NavigationContainer>
  )
};
