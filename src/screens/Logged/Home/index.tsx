import { useState, useRef } from 'react';

import { Header } from '../../../components/Logged/Home/Header';
import { MoviesSections } from '../../../components/Logged/Home/MoviesSections';
import { SurpriseButton } from '../../../components/Logged/Home/SurpriseButton';

import {
  Container,
  MoviesList,
  HighlightMovie,
  HighlightMovieImage
} from './styles';


export function Home () {

  const [ direction, setDirection ] = useState<'up' | 'down'>('up');
  const [ currentOffset, setCurrentOffset ] = useState(0);

  const initialOffset = useRef(0);
  const offset = useRef(0)
    

  function handleBeginOffset (event: any) {

    initialOffset.current = event.nativeEvent.contentOffset.y;

  }

  function handleScrollOffset (event: any) {
    
    offset.current = event.nativeEvent.contentOffset.y; 
    setCurrentOffset(event.nativeEvent.contentOffset.y);

    handleScrollDirection()

  }

  function handleScrollDirection () {
    if (initialOffset.current < offset.current) {
      
      setDirection('down');

    } else {

      setDirection('up');

    }
  }

  return (
      <Container>
        <Header direction={direction} offset={currentOffset} />
        <MoviesList
          onScroll={handleScrollOffset}
          onScrollBeginDrag={handleBeginOffset}
          scrollEventThrottle={5}
        >
          <HighlightMovie>
              <HighlightMovieImage 
                source={require('../../../assets/images/home/HighlightMovieImage.png')}
              />
          </HighlightMovie>
          <MoviesSections />
        </MoviesList>
        <SurpriseButton direction={direction} />
      </Container>

  )
};
