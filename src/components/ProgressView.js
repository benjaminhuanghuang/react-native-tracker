import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

//
import { Button, Card, CardSection, Input, Spinner } from './common';
import LearningInfo from './LearningInfo'
//
class ProgressView extends Component {
  state = {
      
  }

  renderScrollViews() {
    return this.props.followeeList.map((data, index) => {
      return (
        <ScrollView key={index}>
          <Text> {data.username}</Text>
          <Text> {data.firstname}</Text>
        </ScrollView>
      )
    })
  }

  renderAssignmnt(index,data) {
    var bordercolorlist=["#009688","#FFD740","#FF4081","#00E5FF"];
    var fontcolorlist=["#1DE9B6","#F4FF81","#F48FB1","#18FFFF"];
   // console.log(" before render assignment assignmentInfo; ", this.state.assignmentInfo);
    if(this.state.assignmentInfo){
      if (this.state.assignmentInfo[index]&&this.state.assignmentInfo[index].userLearningInfo) {
        console.log(" before render assignment activitySummary; ", this.state.activitySummary);

          return (

              <View style={{flexDirection:'column', height:height}}>

                <View style={{alignItems:'center',flex:5}}>
                  <LearningInfo assignmentInfo={this.state.assignmentInfo[index]}/>
                </View>
                <View style={{flexDirection:'column', flex:4}}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"#212121",borderColor:bordercolorlist[index%4],borderStyle:"solid", borderTopWidth:1}}>
                        <Text style={{fontFamily:'Verdana',fontSize:18,color:fontcolorlist[index%4]}}>Time Spent Today (min:sec)</Text>
                        <Text style={{fontFamily:'Verdana',fontSize:25,color:fontcolorlist[index%4]}}>{this.state.activitySummary[index].today_total_time}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"#212121",borderColor:bordercolorlist[index%4],borderStyle:"solid", borderTopWidth:1}}>
                        <Text style={{fontFamily:'Verdana',fontSize:18,color:fontcolorlist[index%4]}}>Time Spent This Week (min:sec)</Text>
                        <Text style={{fontFamily:'Verdana',fontSize:25,color:fontcolorlist[index%4]}}>{this.state.activitySummary[index].week_total_time}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"#212121",borderColor:bordercolorlist[index%4],borderStyle:"solid", borderTopWidth:1}}>
                        <Text style={{fontFamily:'Verdana',fontSize:18,color:fontcolorlist[index%4]}}>Grade {this.state.assignmentInfo[index].userLearningInfo.current_grade} Score</Text>
                        <Text style={{fontFamily:'Verdana',fontSize:25,color:fontcolorlist[index%4]}}>{this.state.assignmentInfo[index].userLearningInfo.current_grade_score}</Text>
                    </View>
                </View>
                  {this.renderExtraSpaceForIOS()}
              </View>

          )
      }else{
        return (
              <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:'#212121',marginTop:50}}>
                    <Text style={{fontFamily:'Verdana',fontSize:18,color:'white',marginBottom:20}}>No Assignment Created for {data.firstname}</Text>
              </View>

        )
      }
    }

}

  render() {
    return (
      <Swiper loop={false}>
        {this.renderScrollViews()}
      </Swiper>
    );
  }
}


const mapStateToProps = state => {
  return {
    followeeList: state.auth.followeeList,
  }
}

export default connect(mapStateToProps)(ProgressView);
