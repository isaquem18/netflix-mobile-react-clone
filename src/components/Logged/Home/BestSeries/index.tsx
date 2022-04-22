import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  Container,
  Serie
} from './styles';


interface Props {
  handleMovieDetails: (movieName: string) => void;
}

export function BestSeries ({
  handleMovieDetails
}: Props) {

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long2.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long2.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long3.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long3.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long4.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long4.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long5.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long5.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long2.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long2.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long3.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long3.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long4.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long4.png')} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleMovieDetails('long5.png')}
      >
        <Serie source={require('../../../../assets/images/home/best-series/long5.png')} />
      </TouchableWithoutFeedback>

    </Container>
  )
}