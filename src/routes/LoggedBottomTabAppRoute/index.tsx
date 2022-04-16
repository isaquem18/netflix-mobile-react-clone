import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Logged/Home';

const {
  Navigator,
  Screen
} = createBottomTabNavigator();

export function LoggedBottomTabAppRoute () {

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#747474',
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: '#121212',
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
          tabBarLabel: 'Risadas Rápidas'
        }}
      />

      <Screen 
        name="Downloads" 
        component={Home} options={{
          tabBarLabel: 'Downloads'
        }}
      />

    </Navigator>
  )
}