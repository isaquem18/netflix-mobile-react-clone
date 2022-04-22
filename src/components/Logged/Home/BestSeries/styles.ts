import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window')

export const Container = styled.ScrollView.attrs({
  horizontal: true
})``;

export const Serie = styled.Image`
  width: 140px;
  height: 300px;
  margin: 0 4px;
`;
