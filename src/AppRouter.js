import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Reducer, Router, Switch, Modal, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import WebBrowse from '../components/WebBrowse.js'
import PrivavyBrowse from '../components/PrivacyBrowse'


import { reducerCreate, defaultRouterReducer } from '../redux/reducer'


import LoginScreen from '../components/LoginScreen'
import HomeScreen from '../components/HomeScreen'



//import Home from './components/Home';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';
//import EchoView from './components/EchoView';
import NavigationDrawer from './components/NavigationDrawer';
import Button from 'react-native-button';

const Right = () => (
    <Text
        style={{
      width: 80,
      height: 37,
      position: 'absolute',
      bottom: 4,
      right: 2,
      padding: 8,
    }}
    >Right</Text>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#212121',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#212121',
    },
});



// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#212121',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

let currentSwitchPage = 'text1';

//const SwitcherPage = (props) => (
//    <View>
//        <Text style={{ marginTop: 100, textAlign: 'center' }}> hiiii current page: {props.text}</Text>
//        <Button
//            onPress={() => {
//        currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
//        Actions.refresh({ key: 'switcher' });
//      }}
//        >
//            Switch!
//        </Button>
//        <Button
//            onPress={() => {
//        Actions.launch({ type: 'reset' });
//      }}
//        >
//            Exit
//        </Button>
//    </View>
//);
                //<Scene key="modal" component={Modal} >
                //
                //
                //</Scene>  hideNavBar hideTabBar
 class TrackerApp extends Component {

    constructor(props){
        super(props)

        console.log("  tracker app props: ", this.props);
        this.state={
            firstTimeLogin:this.props.firstTimeLogin
        }

    }

//reducerCreate createReducer={reducerCreate  }

    render() {
        return (
            <Router  getSceneStyle={getSceneStyle}>



                <Scene key="root" >





                    <Scene key="login" initial={this.state.firstTimeLogin} component={LoginScreen} hideTabBar hideNavBar  title="Login"/>

                    <Scene key="browseWeb" initial={false} component={WebBrowse} hideTabBar hideNavBar={false} navigationBarStyle={{ backgroundColor: '#212121',borderBottomWidth:0,borderBottomColor:'#212121'}} titleStyle={{ color: 'white' }} title="Afficient Academy"/>
                    <Scene key="privacyWeb" initial={false} component={PrivavyBrowse} hideTabBar hideNavBar={false} navigationBarStyle={{ backgroundColor: '#212121',borderBottomWidth:0,borderBottomColor:'#212121'}} titleStyle={{ color: 'white' }} title="Privacy Policy"/>


                    <Scene key="mainpage"  initial={!this.state.firstTimeLogin}  hideTabBar  component={NavigationDrawer}>
                        <Scene
                            key="main"
                            tabBarStyle={styles.tabBarStyle}
                            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        >
                            <Scene
                                key="hometab"
                                title=" "
                                icon={TabIcon}
                                navigationBarStyle={{ backgroundColor: '#212121',borderBottomWidth:0.5,borderBottomColor:'#FF9800'}}
                                titleStyle={{ color: 'white' }}
                            >
                                <Scene
                                    key="tab1_hometab"
                                    component={HomeScreen}
                                    title=""
                                    onRight={() => Actions.login()}
                                    rightTitle=""
                                />

                            </Scene>


                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

function select(state){
    return {
        state:state
    }
}


export default connect(select)(TrackerApp)