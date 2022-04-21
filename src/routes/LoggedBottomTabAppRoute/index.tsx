import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StatusBar, useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

import { Home } from '../../screens/Logged/Home';

const {
  Navigator,
  Screen
} = createBottomTabNavigator();

export function LoggedBottomTabAppRoute () {
  const { height } = useWindowDimensions();
  const theme = useTheme();

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Navigator screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#747474',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#121212',
          height: height*0.10
        },   
        tabBarLabelStyle: {
          fontSize: 9,
          marginBottom: Platform.OS === 'ios' ? 6 : 12,
          fontFamily: theme.fonts.NetflixSansMedium,
          overflow: 'scroll'

        },
      }}>

        <Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Início'
          }}
        />

        <Screen 
          name="Games" 
          component={Home} 
          options={{
            tabBarLabel: 'Jogos'
          }}
        />

        <Screen 
          name="ComingSoon" 
          component={Home} options={{
            tabBarLabel: 'Em breve'
          }}
        />

        <Screen 
          name="FastLaughs" 
          component={Home} options={{
            tabBarLabel: 'Risadas rápidas'
          }}
        />

        <Screen 
          name="Downloads" 
          component={Home} options={{
            tabBarLabel: 'Downloads'
          }}
        />

      </Navigator>
    </>
  )
}