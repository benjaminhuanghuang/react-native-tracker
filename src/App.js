import React, { Component } from 'react';
import { Scene, Reducer, Router, Switch, Modal, Actions } from 'react-native-router-flux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// UI
import { StyleSheet, Text, View } from 'react-native';
// App
import AppReducer from './reducers'
import Login from './components/Login';
import HomePage from './components/HomePage';

//
const store = createStore(AppReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" >
            <Scene key="login" component={Login} hideTabBar hideNavBar title="Login" />
            <Scene key="browseWeb" component={HomePage} hideTabBar hideNavBar={false} title="Afficient Academy" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}