import styled, { css } from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface Props {
  enabled: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<Props>`


  ${({ enabled }) => enabled ? css`

    width: 100%;
    height: ${RFPercentage(9)}px;
    border-radius: 6px;
    margin-top: ${RFPercentage(5)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.light_red};

  `:css`

    width: 100%;
    height: ${RFPercentage(9)}px;
    border: 2px solid ${({ theme }) => theme.colors.light}90;
    border-radius: 6px;
    margin-top: ${RFPercentage(5)}px;
    align-items: center;
    justify-content: center;

  `}
`;

export const ButtonText = styled.Text<Props>`
  ${({ enabled }) => enabled ? css`

    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
    font-size: ${RFValue(16)}px;

  `:css`

    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.NetflixSansMedium};
    font-size: ${RFValue(16)}px;

  `}

`;