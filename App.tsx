import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';
import theme from './src/styles/theme';

export default function App() {
  
  const [ fontsLoaded ] = useFonts({
    NetflixSansLight: require('./src/assets/fonts/NetflixSansLight.otf'),
    NetflixSansMedium: require('./src/assets/fonts/NetflixSansMedium.otf'),
    NetflixSansBold: require('./src/assets/fonts/NetflixSansBold.otf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
