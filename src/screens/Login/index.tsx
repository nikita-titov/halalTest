import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {CustomHeader} from '../../components/CustomHeader';
import {WebView} from 'react-native-webview';
import NativeWebViewWindowsComponent from 'react-native-webview';
// styles
import mainStyles from '../../assets/mainStyles.tsx';
// utils
import {handleMessageTitle} from '../../utils/ulits.tsx';
// types
import {ISignInProps} from '../../types/types.ts';

const Login = (props: ISignInProps) => {
  const webviewRef = React.useRef<NativeWebViewWindowsComponent>(null);
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState('');

  return (
    <View>
      <CustomHeader white={true} back={true} text={title} right={loading} />
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <View style={mainStyles.centerProfile}>
          <WebView
            style={mainStyles.webViewLogin}
            source={{uri: props?.route?.params?.nav}}
            userAgent={'HB App'}
            ref={webviewRef}
            pullToRefreshEnabled={false}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onMessage={e => handleMessageTitle(e, setTitle)}
            onNavigationStateChange={navState => {
              if (navState.navigationType === 'click') {
                setLoading(false);
                webviewRef.current?.stopLoading();
                // I stopped opening links because I don’t know the level of nesting of pages
              }
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
