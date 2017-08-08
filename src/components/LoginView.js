import React, { PropTypes, Component } from 'react'
import {
  View, Text, StyleSheet, TextInput, Image,
  TouchableOpacity, Dimensions, Platform
} from 'react-native'

import { connect } from 'react-redux'
import { onUserLoginSuccess } from '../modules/auth/AuthState'
import * as AuthStateActions from '../modules/auth/AuthState';
import store from '../redux/store';

import { Actions } from 'react-native-router-flux'

import config from '../config/env'

var windowSize = Dimensions.get('window');
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      msg: ""//"Please Register at Afficient Academy Learning Center."
    }
  }

  browseWeb() {
    Actions.browseWeb();
  }

  login() {

    var username = this.state.username.trim()
    var password = this.state.password.trim()

    if (username.length <= 0 || password.length <= 0) {
      this.setState({
        loaded: true,
        isRefreshing: false,
        isAnimating: false,
        msg: "User name or password is empty!"
      })
      return;
    }

    var url = config.node_url() + "checkeruser";

    var data = { username: username, password: password };
    var params =
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      fetch(url, params)
      .then((response) => response.json())
      .then((newItems) => {
        this.setState({
          // dataSource: this.state.dataSource.cloneWithRows(newItems),
          loaded: true,
          isRefreshing: false,
          isAnimating: false,
          msg: newItems.msg
        })

        if (newItems.exist) {
          var profile = newItems.user//{"name":"1@1.com","picture":""}
          profile.revisit = false
          var followeeList = newItems.followeeList
          var token = { "token": "1" }

          store.dispatch(AuthStateActions.onUserLoginSuccess(profile, token, followeeList));
          var PARAMS = newItems;
          var routeObj = { revisit: false }
          Actions.mainpage(routeObj)//PARAMS)//exist:true, msg:"Welcome back.",user:currentUser, followeeList:followeeList
        }
      }).catch(function (newItems, err) {
        console.log("Log in failed: ", newItems, err);
      }).done();
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={require('../asserts/login.png')}
        />
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Username"
              placeholderTextColor="#F4F4E9"
              value={this.state.username}

              onChangeText={
               (text) => {
                  //console.log(" user name", text);
                  this.setState({ username: text })
                }
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputPassword} source={{ uri: 'http://i.imgur.com/ON58SIG.png' }} />
            <TextInput
              password={true}
              style={[styles.input, styles.whiteFont]}
              placeholder="Password"
              placeholderTextColor="#F4F4E9"
              value={this.state.password}

              onChangeText={(text) => {
                this.setState({ password: text })
              }
              }
            />
          </View>
          <Text style={styles.msg}>{this.state.msg}</Text>
          <TouchableOpacity style={styles.button} onPress={this.login.bind(this)}>
            <Text style={styles.label}> Login </Text>
          </TouchableOpacity>


          <View style={styles.webButtonContainer}>
            <TouchableOpacity onPress={this.browseWeb.bind(this)}>
              <Text style={styles.webButton}> Visit Us </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent',
    //flex: 1,
    //backgroundColor: 'white',//'#2F9CB2',
    justifyContent: 'center',
    marginTop: 0
    //alignItems: 'center'
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height
  },


  inputs: {
    //	marginTop: 10,
    justifyContent: 'center',
    margin: 20,
    flex: 1
  },




  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  },

  logo: {
    //width: 200,
    height: 120,
    marginTop: 0

  },
  chart: {
    width: 200,
    height: 200
  },
  button: {
    padding: 15,
    backgroundColor: '#FF9800',
    alignSelf: 'stretch',
    marginTop: 20
  },
  label: {
    color: '#F4F4E9',
    textAlign: 'center'

  },
  msg: {
    color: '#FF9800',
    alignSelf: 'center',
    margin: 5
  }
})

function select(state) {
  return {
    state: state
  }
}
function actions(dispatch) {
  return {
    onUserLoginSuccess: dispatch(onUserLoginSuccess)
  }
}


export default connect(select, actions)(LoginScreen)
