import { 
  Container,
  Label,
  Input
} from './styles';


interface Props {
  label: string;
}

export function LoginInput ({
  label
}: Props) {

  return (
    <Container>
      <Label></Label>
      <Input />
    </Container>
  )
}