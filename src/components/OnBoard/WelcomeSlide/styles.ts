import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const List = (styled.FlatList.attrs({
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false
})`
  height: ${height*0.7}px;
` as unknown) as typeof FlatList;

export const SliderPaging = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 0 42%;
  justify-content: space-around;
  align-items: center;
`;


interface CircleProps {
  selected: boolean;
}

export const Circle = styled.View<CircleProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ selected }) => selected ? '#ffffff90' : '#ffffff30' };
  border-radius: 20px;

`;
