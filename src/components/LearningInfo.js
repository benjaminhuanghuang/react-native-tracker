import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default LearningInfo = () => {
    return (
      <Image source={require('../asserts/sail.jpg')} style={style.backgroundImage}>
        <View style={style.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ fontSize: 80, fontFamily: 'Verdana', color: '#FF9800', margin: 50 }}>
                {
                  this.props.assignmentInfo.userLearningInfo.points
                }
                <Text style={{ padding: 10, fontSize: 35, fontFamily: 'Verdana', textAlign: 'center' }}>%</Text>
              </Text>
              <Text style={{ fontFamily: 'Verdana', fontSize: 18, color: '#ffffff', textAlign: 'center' }}> {this.props.assignmentInfo.user_name} has finished </Text>
              <Text style={{ fontFamily: 'Verdana', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>{this.props.assignmentInfo.userLearningInfo.points} % of this week&#39;s assignment</Text>
            </View>
          </View>
        </View>
      </Image>
    )
}

var style = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'stretch'
  }
})
