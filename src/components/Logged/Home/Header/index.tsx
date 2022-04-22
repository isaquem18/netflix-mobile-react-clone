import { useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  interpolate, 
  Extrapolate, 
  withSpring
} from 'react-native-reanimated';


import {
  Container,
  TopContainer,
  NetflixNLogo,
  RightTopContainer,
  SearchIcon,
  UserIcon,
  NavHeader,
  NavItem
} from './styles';


interface Props {
  direction: 'up' | 'down';
  offset: number;
}

export function Header ({
  direction,
  offset
}: Props) {

  const heightValue = useSharedValue(0);

  const headerTopAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: heightValue.value }],
      opacity: interpolate(heightValue.value, 
        [0, -40],
        [1, 0],
        Extrapolate.CLAMP  
      )
    }
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: heightValue.value }]
    }
  });


  useEffect(() => {

    if (direction === 'down') {
      heightValue.value = withSpring(-40, { mass: 0.2 })
    } else {
      heightValue.value = withSpring(0, { mass: 0.2 });
    }

  }, [ direction ])


  const bgHeaderOpacity = offset > 70 ? 0.6 : 0;

  return (
    <Animated.View style={[{ zIndex: 3 }, headerAnimatedStyle]}>
      <Container bgColor={bgHeaderOpacity}>
        <Animated.View style={headerTopAnimatedStyle}>
          <TopContainer>
            <NetflixNLogo 
              source={require('../../../../assets/images/brand/netflix_logo.png')} 
            />

            <RightTopContainer>
              <SearchIcon />
              <UserIcon 
                source={require('../../../../assets/images/home/user.png')}
              />
            </RightTopContainer>
          </TopContainer>
        </Animated.View>
    
        <NavHeader>
          <TouchableWithoutFeedback>
            <NavItem>SÉRIES</NavItem>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback>
            <NavItem>FILMES</NavItem>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <NavItem>CATEGORIAS</NavItem>
          </TouchableWithoutFeedback>
        </NavHeader>
      </Container>
    </Animated.View>
  )
}