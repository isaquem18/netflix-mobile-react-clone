import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 100%;
  height: ${RFPercentage(9)}px;
  border: 2px solid ${({ theme }) => theme.colors.light}90;
  border-radius: 6px;
  margin-top: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
  font-size: ${RFValue(16)}px;
`;