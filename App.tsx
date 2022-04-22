import { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { PortalProvider } from '@gorhom/portal';

import Routes from './src/routes';
import theme from './src/styles/theme';
import { Splash } from './src/screens/Splash';

export default function App() {
  const [ animationIsOver, setAnimationIsOver ] = useState(true);

  function handleFinishAnimation () {
    setAnimationIsOver(false);
  }
  

  const [ fontsLoaded ] = useFonts({
    NetflixSansLight: require('./src/assets/fonts/NetflixSansLight.otf'),
    NetflixSansMedium: require('./src/assets/fonts/NetflixSansMedium.otf'),
    NetflixSansBold: require('./src/assets/fonts/NetflixSansBold.otf')
  })

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }


  return (
    <>
      {animationIsOver && <Splash handleFinishAnimation={handleFinishAnimation} />}
      <PortalProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </GestureHandlerRootView>
      </PortalProvider>
    </>
  );
}
