import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const { height } = Dimensions.get('window');

interface ContainerProps {
  align: boolean;
}

export const Container = styled<any>(Animated.View)<ContainerProps>`
  position : absolute;
  height: 60px;
  border-radius: 50px;
  background-color: #E8E8E8;
  align-items: center;
  justify-content: ${({ align }) => align ? `space-between`: `center` };
  top: ${height*0.81}px;
  right: 16px;
  flex-direction: row;
  padding: 0 20px;
  overflow: hidden;
`;

export const SurpriseImage = styled.Image`
  width: 32px;
  height: 20px;
  background-color: red;
`;

export const SurpriseText = styled<any>(Animated.Text)`
  font-family: ${({ theme }) => theme.fonts.NetflixSansMedium };
  font-size: 16px;

`;
