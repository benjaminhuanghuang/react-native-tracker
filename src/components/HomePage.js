import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://afficienta.com/afficient-math/' }}
        style={{ margin: 0, flex: 1, alignSelf: 'stretch' }}
      />
    )
  }
}