import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window')

export const Container = styled.ScrollView.attrs({
  horizontal: true
})``;
export const Serie = styled.Image`
  width: 130px;
  height: 200px;
  margin: 0 6px;
`;