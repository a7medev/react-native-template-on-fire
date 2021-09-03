import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import Counter from './components/Counter';
import SpinningLogo from './components/SpinningLogo';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SpinningLogo />
        <Counter />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34',
  },
});

export default App;
