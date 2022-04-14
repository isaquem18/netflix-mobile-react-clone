import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: ${height*0.8}px;
  align-items: center;
  justify-content: flex-end;

  background-color: blue;
`;

export const ImageSlide = styled.Image`
    width: ${width}px;
    height: ${height*0.8}px;
`;

export const TextBox = styled.View`
  position: absolute;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.NetflixSansBold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const SubTitle = styled.Text`
   color: ${({ theme }) => theme.colors.light}90;
   font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
`;

