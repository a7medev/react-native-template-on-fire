import React from 'react';
import { StyleSheet, View } from 'react-native';

import Counter from '../components/Counter';
import SpinningLogo from '../components/SpinningLogo';

const App: React.FC = () => {
  return (
    <View style={styles.screen}>
      <SpinningLogo />
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34',
  },
});

export default App;
