import { useEffect, useState } from 'react';
import { Portal } from '@gorhom/portal';
import { useWindowDimensions } from 'react-native';
import { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

import api from '../../../../api';
import { BestSeries } from '../BestSeries';
import { OnHigh } from '../OnHigh';

import {
  Container,
  SectionTitle,
  MovieDetailsBottomSlider,
  CloseButton,
  CloseButtonIcon
} from './styles';
import Animated from 'react-native-reanimated';

export function MoviesSections () {
  const { height } = useWindowDimensions();

  const [ movies, setMovies ] = useState([]);
  const [ showDetailsMovie, setShowDetailsMovie ] = useState(false);

  const offsetMoviewDetailsYOffset = useSharedValue(height*0.6);

  useEffect(() => {
    if (showDetailsMovie) {

      offsetMoviewDetailsYOffset.value = withTiming(0, { duration: 400 });

    } else {

      offsetMoviewDetailsYOffset.value = withTiming(height*0.6, { duration: 400 });

    }
  }, [showDetailsMovie]);

  useEffect(() => {
    (async () => {
      try {

        const response = await api.get('/');

        setMovies(response.data);

      } catch (e) {

      }
    })()
  }, []);

  const offsetMovieDetailsYOffsetAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetMoviewDetailsYOffset.value }]
    }
  })

  function handleMovieDetails(movieName: string) {
    setShowDetailsMovie(true);
  }

  function handleCloseMovieDetails(movieName: string) {
    setShowDetailsMovie(false);
  }

  return (
    <>
      <Container>
        <SectionTitle>Só na netflix</SectionTitle>
        <BestSeries handleMovieDetails={handleMovieDetails}/>
        <SectionTitle>Em alta</SectionTitle>
        <OnHigh />
        <SectionTitle>Continuar assistindo como todos</SectionTitle>
        <OnHigh />
        <SectionTitle>Top 10 filmes de hoje</SectionTitle>
        <OnHigh />
      </Container>
      <Portal>
        <MovieDetailsBottomSlider style={offsetMovieDetailsYOffsetAnimated}>
          <CloseButton onPress={handleCloseMovieDetails}><CloseButtonIcon /></CloseButton>
        </MovieDetailsBottomSlider>
      </Portal>
    </>
  )
}