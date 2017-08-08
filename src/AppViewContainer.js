import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

// import AppRouter from './AppRouter'
import Login from './components/Login';


class AppViewContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Login/>
  }
}

export default AppViewContainer;


// export default connect(select)(AppViewContainer);
