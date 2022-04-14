import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1; 
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Message = styled.Text`
  font-size: 35px;
  color: #fff;

`;