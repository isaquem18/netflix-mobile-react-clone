
import React from 'react';
import { SlideItem } from './SlideItem';
import { DATA } from '../../../utils/OnBoardTitle';
import {
  Container
} from './styles';


export function WelcomeSlide () {

  return (
    <Container>
      {DATA.map((item, ...rest) => (
        <SlideItem 
          key={item.title}
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          fullSize={item?.fullSize}
        />
      ))}
    </Container>
  )
}
