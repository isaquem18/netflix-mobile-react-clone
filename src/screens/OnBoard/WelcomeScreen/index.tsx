import React from 'react';
import { WelcomeSlide } from '../../../components/OnBoard/WelcomeSlide';
import { 
  WelcomeStatusBar,
  Container,
  Message
} from './styles';

export function WelcomeScreen () {

  return (
    <>
      <WelcomeStatusBar />
      <Container>
        <WelcomeSlide />
      </Container>
    </>
  )
};
