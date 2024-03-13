import {NavigationProp} from '@react-navigation/native';

export type EntryStackParamList = {
  Entry?: {nav: string};
};

export type LoginStackParamList = {
  Login?: {nav: string};
};

export type BookingsStackParamList = {
  Login?: {nav: string};
};

export type FavouritesStackParamList = {
  Login?: {nav: string};
};

export type ShareObject = {
  share: string;
  shareUrl: string;
};

export type CustomHeaderProps = {
  back?: boolean;
  logo?: boolean;
  right?: boolean;
  text?: string;
  white?: boolean;
  share?: ShareObject;
};

export interface IEntryProps extends NavigationProp<{}> {
  route: {params: {nav: string}};
}

export interface ISignInProps extends NavigationProp<{}> {
  route: {params: {nav: string}};
}
