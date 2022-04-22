import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};

`;

export const MoviesList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
`;


export const HighlightMovie = styled.View`

`;

export const HighlightMovieImage = styled.ImageBackground`
  width: 100%;
  height: ${height*0.72}px;
`;

