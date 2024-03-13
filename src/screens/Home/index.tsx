import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {WebView} from 'react-native-webview';
import NativeWebViewWindowsComponent from 'react-native-webview';
// styles
import mainStyles from '../../assets/mainStyles.tsx';
// components
import {CustomHeader} from '../../components/CustomHeader';
// navigation
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {handleMessageBackgroundColor} from '../../utils/ulits.tsx';
// types
import {EntryStackParamList} from '../../types/types.ts';

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [backGround, setBackGround] = React.useState('');

  const webviewRef = React.useRef<NativeWebViewWindowsComponent>(null);
  const navigation = useNavigation<StackNavigationProp<EntryStackParamList>>();

  return (
    <View>
      <CustomHeader logo={true} right={loading} />
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <View style={[mainStyles.center, {backgroundColor: backGround}]}>
          <WebView
            ref={webviewRef}
            style={mainStyles.webViewHome}
            source={{uri: 'https://halalbooking.com'}}
            userAgent={'HB App'}
            pullToRefreshEnabled={true}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onScroll={() => setLoading(false)}
            onNavigationStateChange={navState => {
              if (navState.navigationType === 'click') {
                setLoading(false);
                webviewRef.current?.stopLoading();
                navigation.navigate('Entry', {nav: navState.url});
              }
            }}
            onMessage={e => handleMessageBackgroundColor(e, setBackGround)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
