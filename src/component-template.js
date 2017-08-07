import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

//
export default class ComponentTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <View style = {styles.container} >
        <Text>Component Template... </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});