import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StatusBar, useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

// ICONS
import { Octicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


//ROUTES
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
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Foundation name="home" size={size} color={color}  />
              } else {
                return <Octicons name="home" size={size} color={color} />
              }
            }
          }}
        />

        <Screen 
          name="Games" 
          component={Home} 
          options={{
            tabBarLabel: 'Jogos',
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Ionicons name="game-controller" size={size} color={color}  />
              } else {
                return <Ionicons name="game-controller-outline" size={size} color={color} />
              }
            }
          }}
        />

        <Screen 
          name="ComingSoon" 
          component={Home} options={{
            tabBarLabel: 'Em breve',
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <MaterialCommunityIcons name="play-box-multiple" size={size} color={color}  />
              } else {
                return <MaterialCommunityIcons name="play-box-multiple-outline" size={size} color={color} />
              }
            }
          }}
        />

        <Screen 
          name="FastLaughs" 
          component={Home} options={{
            tabBarLabel: 'Risadas rápidas',
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Ionicons name="happy" size={size} color={color}  />
              } else {
                return <Ionicons name="happy-outline" size={size} color={color} />
              }
            }
          }}
        />

        <Screen 
          name="Downloads" 
          component={Home} options={{
            tabBarLabel: 'Downloads',
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <MaterialCommunityIcons name="download-circle" size={size} color={color}  />
              } else {
                return <MaterialCommunityIcons name="download-circle-outline" size={size} color={color} />
              }
            }
          }}
        />

      </Navigator>
    </>
  )
}