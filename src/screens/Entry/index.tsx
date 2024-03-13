import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {WebView} from 'react-native-webview';
import NativeWebViewWindowsComponent from 'react-native-webview';
// styles
import mainStyles from '../../assets/mainStyles.tsx';
// components
import {CustomHeader} from '../../components/CustomHeader';
import {handleMessageTitle, handleMessageShareUrl} from '../../utils/ulits.tsx';
//types
import {IEntryProps} from '../../types/types.ts';

const Entry = (props: IEntryProps) => {
  const webviewRef = React.useRef<NativeWebViewWindowsComponent>(null);
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState('');
  const [share, setShare] = React.useState('');
  const [shareUrl, setShareUrl] = React.useState('');
  const shareObject = {share, shareUrl};

  return (
    <View>
      <CustomHeader
        share={shareObject}
        back={true}
        text={title}
        right={loading}
      />
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <View style={mainStyles.centerProfile}>
          <WebView
            style={mainStyles.webViewProfile}
            source={{uri: props?.route?.params?.nav}}
            userAgent={'HB App'}
            ref={webviewRef}
            pullToRefreshEnabled={false}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onMessage={e => {
              handleMessageTitle(e, setTitle);
              handleMessageShareUrl(e, setShare, setShareUrl);
            }}
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

export default Entry;
