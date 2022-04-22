import { useEffect, memo } from 'react';
import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming
} from 'react-native-reanimated';

import {
  Container,
  SurpriseImage,
  SurpriseText
} from './styles';

interface Props {
  direction: string;
}

function SurpriseButtonComponent ({
  direction
}: Props) {
  const animateWidthValue = useSharedValue(60);
  const animateHeightValue = useSharedValue(60);

  const animateOpacitySurpriseTextValue = useSharedValue(1);

  const SurpriseButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: animateWidthValue.value,
      height: animateHeightValue.value
    }
  });

  const SurpriseButtonOpacityTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animateOpacitySurpriseTextValue.value
    }
  });


  useEffect(() => {

    if (direction === 'down') {
      
      animateWidthValue.value = withSpring(60, { mass: 0.2 });
      animateHeightValue.value = withSpring(60, { mass: 0.2 });
      animateOpacitySurpriseTextValue.value = withTiming(0, { duration: 700 });

    } else {

      animateWidthValue.value = withSpring(200, { mass : 0.2 });
      animateHeightValue.value = withSpring(48, { mass : 0.2 });
      animateOpacitySurpriseTextValue.value = withTiming(1, { duration: 700 });

    }

  }, [ direction ])

  return (
    <Container style={SurpriseButtonAnimatedStyle} align={animateHeightValue.value === 60}>
        <SurpriseImage source={require('../../../../assets/images/home/surprise.png')} />

          {animateHeightValue.value === 60 && 
            <SurpriseText style={SurpriseButtonOpacityTextAnimatedStyle}>
              Surpreenda-me
            </SurpriseText>}

    </Container>
  )
}

export const SurpriseButton = memo(SurpriseButtonComponent);
