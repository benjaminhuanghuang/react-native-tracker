import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import {
  View, Text, StyleSheet, TextInput, Image,
  TouchableOpacity, Dimensions, Platform, Linking
} from 'react-native'
//
import Config from "../config";
import { Spinner } from './common'; 
import { emailChanged, passwordChanged, loginUser } from '../actions';

class Login extends Component {
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.label}> Login </Text>
      </TouchableOpacity>
    );
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
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
              placeholder="user@mail"
              placeholderTextColor="#F4F4E9"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={[styles.input, styles.whiteFont]}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#F4F4E9"
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}/>
          </View>
          <Text style={styles.msg}>{this.props.error}</Text>
          <View>
            {this.renderButton()}
          </View>
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
    flex: 1,
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login);