import React from 'react';
import { useWindowDimensions, View } from "react-native";

const LottieView = require("lottie-react-native");

interface Props {
  handleFinishAnimation: () => void;
}

export function Splash ({
  handleFinishAnimation
}: Props) {

  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1, backgroundColor: '#000', width, height, position: 'absolute', top: 0, left: 0, zIndex: 3, }}>
      <LottieView source={require('../assets/animation/splash.json')} autoPlay loop={false} duration={1500} onAnimationFinish={handleFinishAnimation} />
    </View>
  )
}
