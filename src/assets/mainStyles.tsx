import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  center: {
    height: Dimensions.get('window').height - 200,
  },
  title: {
    fontSize: 14,
    lineHeight: 36,
    marginBottom: 33,
    textAlignVertical: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  webView: {
    backgroundColor: '#07243',
  },
  webViewHome: {
    backgroundColor: 'transparent',
  },
  centerProfile: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height,
  },
  webViewProfile: {
    backgroundColor: '#07243',
    marginBottom: 200,
  },
  webViewLogin: {
    backgroundColor: '#07243',
    marginBottom: 180,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#002F3F',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    height: 120,
  },
  headerLeftStyle: {
    height: 30,
    width: 30,
  },
  headerRightStyle: {
    height: 30,
    width: 30,
  },
  headerActivityIndicator: {
    margin: 15,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    alignContent: 'flex-start',
  },
  headerTouchableOpacity: {
    height: 20,
    width: 20,
    paddingTop: 5,
  },
  logoContainer: {
    height: 100,
    width: 210,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoHalalTitle: {
    color: '#16A291',
    fontWeight: 'bold',
    fontSize: 33,
  },
  logoBookingTitle: {
    color: '#E38018',
    fontWeight: 'bold',
    fontSize: 33,
  },
});
