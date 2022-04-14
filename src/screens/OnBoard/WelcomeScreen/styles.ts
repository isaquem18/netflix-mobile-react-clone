import styled from 'styled-components/native';

export const WelcomeStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.colors.dark,
  barStyle: 'light-content'
}))``;

export const Container = styled.View`
  flex: 1; 
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Message = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: ${ ({ theme }) => theme.fonts.NetflixSansBold};
`;