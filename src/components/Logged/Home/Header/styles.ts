import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const { height } = Dimensions.get('window');

export const Container = styled(Animated.View)`
  height: ${height*0.2}px;
  width: 100%;
  background-color: red;
`;