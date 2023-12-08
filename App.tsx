import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface State {
  counter: number,
};

const initialState: State = {
  counter: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const counter = useSelector((state: State) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Counter: {counter}
      </Text>
      <View style={styles.button}>
        <Button
          title='Increment'
          onPress={() => dispatch(counterSlice.actions.increment())}
        />
        <Button
          title='Decrement'
          onPress={() => dispatch(counterSlice.actions.decrement())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 300
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    height: 50
  }
});
