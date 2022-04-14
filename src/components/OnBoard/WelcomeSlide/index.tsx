
import React from 'react';
import { SlideItem } from './SlideItem';
import {
  Container
} from './styles';

export function WelcomeSlide () {

  return (
    <Container>
      <SlideItem 
        title="Filmes, séries e muito mais, sem limites"
        subTitle="Assista onde quiser. cancele quando quiser."
        image="../../../../src/assets/images/background/onboard_bg.png"
      />

      <SlideItem 
        title="Baixe e assista offline"
        subTitle="Tenha sempre algo para assistir offline."
        image="../../../../src/assets/images/background/onboard_bg.png"
      />

      <SlideItem 
        title="Sem compromisso"
        subTitle="Assine hoje, cancele quando quiser."
        image="../../../../src/assets/images/background/onboard_bg.png"
      />

      <SlideItem 
        title="Assista onde quiser"
        subTitle="Assista no celular, tablet, laptop, TV ou outros aparelhos."
        image="../../../../src/assets/images/background/onboard_bg.png"
      />
    </Container>
  )
}
