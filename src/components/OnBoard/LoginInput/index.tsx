import { TextInputProps } from 'react-native';
import { useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withTiming, withSpring } from 'react-native-reanimated';

import { 
  Container,
  Label,
  Input
} from './styles';


interface Props extends TextInputProps {
  label: string;
  passwordRef?: any;
}

export function LoginInput ({
  label,
  value='',
  passwordRef,
  ...rest
}: Props) {

  const labelPosition = useSharedValue(0);
  const labelSize = useSharedValue(16);

  const labelAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          translateY: withSpring(labelPosition.value),
        },
        { 
          translateX: interpolate(labelPosition.value,
            [0, -20],
            [0, 0],
            Extrapolate.CLAMP
          )
        }
     ],
     fontSize: withSpring(labelSize.value),
    }
  });

  function handleFocus () {
  
    labelPosition.value = -20;
    labelSize.value = 12;

  }

  function handleBlur () {

    if (value.length === 0) {

      labelPosition.value = 0;
      labelSize.value = 18;
      
    }

  }


  return (
    <Container>
      <Label style={labelAnimatedStyle}>{label}</Label>
      <Input 
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={passwordRef}
        {...rest} 
      />
    </Container>
  )
};
