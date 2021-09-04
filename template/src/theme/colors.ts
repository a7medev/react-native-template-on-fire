import { useColorScheme } from 'react-native';

export interface Colors {
  primary: string;
  accent: string;
  white: string;
  light: string;
  black: string;
  dark: string;
}

const LightColors: Colors = {
  primary: '#2187f3',
  accent: '#cca431',
  white: '#f9f9f9',
  light: '#eee',
  black: '#191919',
  dark: '#333',
};

const DarkColors: Colors = {
  ...LightColors,
  accent: '#ffcd3a',
  white: '#191919',
  light: '#333',
  black: '#f9f9f9',
  dark: '#eee',
};

const useColors = () => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? DarkColors : LightColors;
};

export default useColors;
