import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height } = Dimensions.get('window');

export const Container = styled<any>(LinearGradient).attrs({
  colors: ['#000', 'transparent']
})`
  width: 100%;
  height: ${Platform.OS === 'ios' ? height*0.2 : height*0.25}px;
  position: absolute;
  top: 0;
  z-index: 1;
  flex-direction: row;
  align-items: flex-start;
  padding: ${Platform.OS === 'ios' ? (
    height > 720 ? getStatusBarHeight() + 30 : getStatusBarHeight() + 5
  ) : getStatusBarHeight() + 16}px 16px;


`;

export const NetflixLogo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 26%;
  height: 40px;
`;

export const Menu = styled.View`
  flex: 1;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;

`;
export const Privacity = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansBold};
`;
export const Login = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansBold};
`;
export const Options = styled.View`
  height: 40px;
  justify-content: center;
`;

export const Option = styled.View`
  background-color: #fff;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  margin: 1px 0;
`;