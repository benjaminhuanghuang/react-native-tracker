import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
//
import Login from './components/Login';
import ProgressView from './components/ProgressView';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Log In" initial/>
        <Scene key="progressView" title="User Progress" component={ProgressView}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;