import React from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Share from 'react-native-share';
// styles
import mainStyles from '../../assets/mainStyles.tsx';
// navigation
import {useNavigation} from '@react-navigation/native';
// types
import {CustomHeaderProps} from '../../types/types.ts';
// components
import {Logo} from '../../components/Logo';
// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';

export const CustomHeader: React.FunctionComponent<CustomHeaderProps> = ({
  logo,
  back,
  right,
  text,
  white,
  share,
}) => {
  const navigation = useNavigation();

  const headerColor = white ? '#FFFFFF' : '#002F3F';
  const headerHeght = white ? 70 : 120;
  const paddingTopHeader = white ? 0 : 50;
  const colorHeader = white ? 'black' : 'white';

  const shareFunc = () => {
    Share.open({
      message: text,
      url: share?.shareUrl,
    }).catch(e => {
      console.log('Share error: ', e);
    });
  };

  return (
    <View
      style={[
        mainStyles.headerContainer,
        {backgroundColor: headerColor},
        {height: headerHeght},
        {paddingTop: paddingTopHeader},
      ]}>
      <View style={mainStyles.headerLeftStyle}>
        {back && (
          <TouchableOpacity
            style={mainStyles.headerTouchableOpacity}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={20} color={'#3D908F'} />
          </TouchableOpacity>
        )}
      </View>
      {logo && <Logo />}
      {text && (
        <Text style={[mainStyles.headerTitle, {color: colorHeader}]}>
          {text}
        </Text>
      )}
      <View style={mainStyles.headerRightStyle}>
        {right && (
          <ActivityIndicator
            color={'#FFFF'}
            animating={true}
            style={mainStyles.headerActivityIndicator}
          />
        )}
        {share?.share && !right && (
          <TouchableOpacity
            style={mainStyles.headerTouchableOpacity}
            onPress={() => shareFunc()}>
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              size={20}
              color={'#3D908F'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
