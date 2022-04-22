import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export const Container = styled.View`

`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansBold};
  font-size: ${RFValue(18)}px;
  margin-top: 30px;
  margin-bottom: 10px;

`;

export const MovieDetailsBottomSlider = styled<any>(Animated.View)`
  width: 100%;
  height: ${height*0.55}px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #575757;
  border-radius: 30px;
`;

export const CloseButton = styled.TouchableOpacity<any>`
  background-color: #898989;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  position: absolute;
  right: 25px;
  top: 20px;
`;

export const CloseButtonIcon = styled<any>(AntDesign).attrs({
  name: 'close',
  size: 24,
  color: '#fff'
})`

`;
