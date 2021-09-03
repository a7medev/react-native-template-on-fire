import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../store';
import { decrement, increment } from '../store/counter';

const Counter: React.FC = () => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <>
      <Text style={styles.label}>Current Count</Text>

      <View style={styles.counter}>
        <MyButton onPress={handleDecrement}>-</MyButton>
        <Text style={styles.count} testID="count">
          {count}
        </Text>
        <MyButton onPress={handleIncrement}>+</MyButton>
      </View>
    </>
  );
};

export interface MyButtonProps {
  onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  counter: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  count: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
  },
  label: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 5,
    marginBottom: 10,
  },
});

export default Counter;
