import React from 'react';
import { WebView } from 'react-native-webview';
import {
  Container
} from './styles';

export const Privacity: React.FC = () => {

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
