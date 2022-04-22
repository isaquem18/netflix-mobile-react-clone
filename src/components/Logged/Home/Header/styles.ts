import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons'; 
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height } = Dimensions.get('window');

interface ContainerProps {
  bgColor: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  position: absolute;
  background-color: ${({ bgColor }) => `rgba(0, 0, 0, ${bgColor})`}
`;

export const TopContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 10}px 14px 0 14px;

`;

export const NetflixNLogo = styled.Image`
  width: 26px;
  height: 60px;
`;

export const RightTopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

export const SearchIcon = styled<any>(Feather).attrs({
  name: 'search',
  color: '#fff',
  size: 26
})``;

export const UserIcon = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-left: 30px;
`;

export const NavHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  height: 40px; 
  align-items: center;
`;

export const NavItem = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.NetflixSansBold};
  font-size: 14px;  
`;