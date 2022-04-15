import React from 'react';

import {
  Container,
  ImageSlide,
  TextBox,
  Title,
  SubTitle
} from './styles';

interface Props {
  title: string;
  subTitle: string;
  image: any;
  fullSize?: boolean;
}

export function SlideItem ({
  title,
  subTitle,
  image,
  fullSize=false
}: Props) {




  return (
    <Container>
      <ImageSlide 
        source={image} 
        fullSize={fullSize}
      />
      <TextBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextBox>
    </Container>
  )
};
