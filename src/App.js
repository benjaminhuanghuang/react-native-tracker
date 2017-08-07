import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// UI
import { StyleSheet, Text, View } from 'react-native';
// App
import AppReducer from './reducers'

//
const store = createStore(AppReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <Provider store={store}>
        <View style = {styles.container} >
          <Text>Hello!! </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});