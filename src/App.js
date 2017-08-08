import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// UI
import { StyleSheet, Text, View } from 'react-native';
// App
import AppReducer from './reducers'
import AppViewContainer from './AppViewContainer'
//
const store = createStore(AppReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <Provider store={store}>
       <AppViewContainer></AppViewContainer>
      </Provider>
    );
  }
}