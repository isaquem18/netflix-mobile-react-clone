import React from 'react';

import { Header } from '../../../components/OnBoard/Header';
import { WelcomeSlide } from '../../../components/OnBoard/WelcomeSlide';
import { 
  WelcomeStatusBar,
  Container,
  NextButton,
  NextButtonText
} from './styles';

export function WelcomeScreen () {

  return (
    <>
      <WelcomeStatusBar />
      <Container>
        <Header />
        <WelcomeSlide />
        <NextButton>
          <NextButtonText>VAMOS LÁ</NextButtonText>
        </NextButton>
      </Container>
    </>
  )
};
