import React, { PropTypes, Component } from 'react'
import { Actions } from 'react-native-router-flux'

import {
  View, Text, StyleSheet, TextInput, Image,
  TouchableOpacity, Dimensions, Platform, Linking
} from 'react-native'
//
import Config from "../config";
import { Spinner } from './common'; 

var windowSize = Dimensions.get('window');


class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  login() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    //
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ loading: false, error: 'Authentication Failed.' });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity style={styles.button} onPress={this.login.bind(this)}>
        <Text style={styles.label}> Login </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={require('../asserts/login-bg.png')}
        />
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput style={[styles.input, styles.whiteFont]}
              placeholder="Username"
              placeholderTextColor="#F4F4E9"
              value={this.state.username}
              onChangeText={
                (text) => {
                  this.setState({ username: text })
                }
              }
             />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={[styles.input, styles.whiteFont]}
              password={true}
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
           {this.renderButton()}
          <View style={styles.webButtonContainer}>
            <TouchableOpacity onPress={()=>{Linking.openURL(Config.WEBSITE_URL)}}>
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
    justifyContent: 'center',
    marginTop: 0
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
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    marginBottom: 20

  },
  webButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginTop: 0
  },
  webButton: {
    padding: 15,
    color: '#FF9800',
    marginTop: 20,
    textDecorationLine: ('underline')
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

export default Login;