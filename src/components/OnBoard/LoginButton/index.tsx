import {
  Container,
  ButtonText
} from './styles';


interface Props {
  title: string;
  onPress: () => void;
}
export function LoginButton ({
  title='',
  onPress
}: Props) {

  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}