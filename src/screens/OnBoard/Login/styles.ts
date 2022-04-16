import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1; 
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 0 14px;
`;

export const Form = styled.View`
  margin-top: ${height/6}px;
  height: ${height/1.8}px;
`;

export const NeedHelpLink = styled.Text`
  color: ${({ theme }) => theme.colors.light}90;
  margin-top: ${RFPercentage(5)}px;
  font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const ErrorMessage = styled.Text`
  color: orangered;
  font-family: ${({ theme }) => theme.fonts.NetflixSansLight};
  font-size: ${RFValue(13)}px;
`;