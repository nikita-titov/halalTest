import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {CustomHeader} from '../../components/CustomHeader';
import {WebView} from 'react-native-webview';
import {handleMessageTitle} from '../../utils/ulits.tsx';
// styles
import mainStyles from '../../assets/mainStyles.tsx';
// navigation
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
//types
import {BookingsStackParamList} from '../../types/types.ts';
import NativeWebViewWindowsComponent from 'react-native-webview';

const Bookings = () => {
  const webviewRef = React.useRef<NativeWebViewWindowsComponent>(null);
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState('');
  const navigation =
    useNavigation<StackNavigationProp<BookingsStackParamList>>();

  return (
    <View>
      <CustomHeader text={title} right={loading} />
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <View style={mainStyles.center}>
          <WebView
            style={mainStyles.webView}
            source={{uri: 'https://halalbooking.com/bookings'}}
            userAgent={'HB App'}
            ref={webviewRef}
            pullToRefreshEnabled={true}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onScroll={() => setLoading(false)}
            onMessage={e => handleMessageTitle(e, setTitle)}
            onNavigationStateChange={navState => {
              if (navState.navigationType === 'click') {
                setLoading(false);
                webviewRef.current?.stopLoading();
                navigation.navigate('Login', {nav: navState.url});
              }
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Bookings;
