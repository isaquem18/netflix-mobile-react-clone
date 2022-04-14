import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: ${height*0.8}px;
  justify-content: center;

`;

interface ImageProps {
  fullSize?: boolean;
}

export const ImageSlide = styled.Image.attrs({
  resizeMode: 'cover'
})<ImageProps>`
    width: ${width}px;
    height: ${({ fullSize }) => fullSize ? height*0.8 : height*0.3}px;
    margin-top: ${({ fullSize }) => fullSize ? 0 : -height*0.13 }px;
    
`;

export const TextBox = styled.View`
  position: absolute;
  width: ${width}px;
  align-items: center;
  bottom: ${RFPercentage(4)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin-bottom: ${RFPercentage(5)}px;
`;

export const SubTitle = styled.Text`
   color: ${({ theme }) => theme.colors.light};
   opacity: 0.7;
   font-size: ${RFValue(18)}px;
   font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
   text-align: center;
`;
