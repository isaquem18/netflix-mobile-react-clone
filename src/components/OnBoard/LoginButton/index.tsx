import {
  Container,
  ButtonText
} from './styles';


interface Props {
  title: string;
  onPress: () => void;
  enabled: boolean;
}
export function LoginButton ({
  title='',
  onPress,
  enabled
}: Props) {

  return (
    <Container onPress={onPress} enabled={enabled}>
      <ButtonText enabled={enabled}>{title}</ButtonText>
    </Container>
  )
}