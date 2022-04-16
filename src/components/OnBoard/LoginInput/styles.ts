import { TextInput } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFPercentage(11)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light}50;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  margin-top: ${RFPercentage(3)}px;
`;

export const Label = styled<any>(Animated.Text)`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
  position: absolute;
  left: 10px;

`;

export const Input = (styled.TextInput`
  height: ${RFPercentage(8)}px;
  padding: 0 14px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
  font-size: ${RFValue(16)}px;
  margin-top: 8px;
` as unknown) as typeof TextInput;