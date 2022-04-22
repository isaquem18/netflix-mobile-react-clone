import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const WelcomeStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.colors.dark,
  barStyle: 'light-content',
  translucent: true
}))``;

export const Container = styled.View`
  flex: 1; 
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Message = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: ${ ({ theme }) => theme.fonts.NetflixSansBold};
`;

export const NextButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 80%;
  height: 50px;
  background: ${({ theme }) => theme.colors.light_red};
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: ${height < 720 ? RFPercentage(4) : RFPercentage(10)}px;
  border-radius: 4px;
`;

export const NextButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansLight};
  font-size: ${RFValue(16)}px;
`;
