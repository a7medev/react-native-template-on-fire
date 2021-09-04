import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CounterScreen from '../screens/CounterScreen';
import useColors from '../theme/colors';

export type AppParamList = {
  Counter: undefined;
};

const Stack = createNativeStackNavigator<AppParamList>();

const AppNavigator: React.FC = () => {
  const colors = useColors();
  const scheme = useColorScheme();

  const theme: Theme = {
    colors: {
      background: colors.light,
      card: colors.white,
      border: colors.light,
      notification: colors.accent,
      primary: colors.primary,
      text: colors.black,
    },
    dark: scheme === 'dark',
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
