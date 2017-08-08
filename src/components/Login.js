import React, { PropTypes, Component } from 'react'
import {
  View, Text, StyleSheet, TextInput, Image,
  TouchableOpacity, Dimensions, Platform
} from 'react-native'


var windowSize = Dimensions.get('window');


class Login extends Component {
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

  login(){
  
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

export default Login;