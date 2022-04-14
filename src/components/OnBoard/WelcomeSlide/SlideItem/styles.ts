import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: ${height*0.75}px;
  justify-content: center;
`;

interface ImageProps {
  fullSize?: boolean;
}

export const ImageSlide = styled.Image.attrs(({ fullSize }: ImageProps) => ({
  resizeMode: fullSize ? 'cover' : 'contain'
}))<ImageProps>`
    width: ${({ fullSize }) => fullSize ? width : width*0.7}px;
    height: ${({ fullSize }) => fullSize ? height*0.75 : height*1}px;
    margin-top: ${({ fullSize }) => fullSize ? 0 : -height*0.15 }px;
    align-self: center;
`;


export const TextBox = styled<any>(LinearGradient).attrs({
  colors: ['transparent', '#000']
})`
  position: absolute;
  width: ${width}px;
  align-items: center;
  padding-bottom: ${RFPercentage(4)}px;
  bottom: 0;
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
