import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import Spinner from 'react-native-gifted-spinner';
//import AppView from './AppViewRedux';

//import AppRouter from './AppRouterRedux'
import AppRouter from './AppRouter'
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';


//AppView Container

class AppViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaduserdone: false,
      firstTimeLogin: false//
    }


    this.init()

  }

  init() {
    var that = this
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        if (snapshot == null) {
          this.state = {
            loaduserdone: true,
            firstTimeLogin: true//by default, to go home screen, for first time, use login screen
          }
          //  Actions.login()


        }



        const { dispatch } = this.props;



        if (snapshot != null && snapshot != undefined && snapshot.AuthStateReducer != undefined) {

          console.log(" $$$ appview welcome back  ", snapshot, store.getState());



          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));

          that.setState({
            loaduserdone: true,
            snapstore: snapshot,
            useLogin: false
          })







        } else {//frist time login set as state=empty

          console.log("====firt time boot, redirect to login  ");

          that.setState({
            loaduserdone: true,
            // snapstore:snapshot,
            useLogin: true
          })

          dispatch(SessionStateActions.initializeSessionState());
          // Actions.login()
        }

        //if state chage, resave snapshot to device

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  render() {
    if (!this.state.loaduserdone) {
      return (
        <View style={styles.centered}>
          <Spinner />
        </View>
      );
    }



    return <AppRouter firstTimeLogin={this.state.firstTimeLogin}></AppRouter>
  }
}

//select

//actions
//export default connect(
//
//    state =>{
//
//    },
//    dispatch=>{
//
//    }
//
//)()



//auth

var styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


function select(state) {
  //  return Object.assign({},state)
  console.log("  app view get prop from state:", state)
  if (state.SessionStateReducer == undefined) {//state.AuthStateReducer.currentUser==null||

    console.log(" !!!!=====frist time login", state)
    return {
      firstTimeLogin: true,
      isLoggedIn: true,
      AuthStateReducer: state.AuthStateReducer,
      SessionStateReducer: state.SessionStateReducer


    }
  }
  else {
    console.log("-----!!! get  data from device: app view")


    return {
      //   state:state,
      firstTimeLogin: false,
      isReady: state.SessionStateReducer.isReady,//"",
      isLoggedIn: false,
      currentUser: state.SessionStateReducer.currentUser,//"",
      authenticationToken: state.SessionStateReducer.authenticationToken,
      followeeList: state.SessionStateReducer.followeeList


    }

  }
}


export default connect(
  select
  //state => ({
  //  isReady: state.getIn(['session', 'isReady']),
  //  isLoggedIn: state.getIn(['auth', 'isLoggedIn']),
  //    currentUser:state.getIn(['auth', 'currentUser']),
  //    authenticationToken:state.getIn(['auth', 'authenticationToken']),
  //    followeeList:state.getIn(['auth', 'followeeList'])
  //
  //})
)(AppViewContainer);
