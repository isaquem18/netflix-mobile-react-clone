import React from 'react';
import { Image } from 'react-native';


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
  image: string;
}

export function SlideItem ({
  title,
  subTitle,
  image
}: Props) {

  return (
    <Container>
      <ImageSlide source={require('../../../../assets/images/background/onboard_bg.png')} />
      <TextBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextBox>
    </Container>
  )
};
