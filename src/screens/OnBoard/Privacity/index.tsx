import { WebView } from 'react-native-webview';
import {
  Container
} from './styles';

export function Privacity () {

  return (
    <Container>
      <WebView
	      startInLoadingState
	      source={{ uri: `https://help.netflix.com/legal/privacy`}}
	      mediaPlaybackRequiresUserAction={false}
	
	      // iOS specific:
	      allowsInlineMediaPlayback
	
	      // Android specific:
	      javaScriptEnabled
	      domStorageEnabled
	    />
    </Container>
  )
};
