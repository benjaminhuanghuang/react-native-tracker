import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//
import { Header, Button, Spinner, CardSection } from './components/common';
import Router from './Router';
import reducers from './reducers'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}