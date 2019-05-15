/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/LoginScreen';
import ParticipantList from './screen/ParticipantList';
import TextChat from './screen/TextChat';
import WebViewScreen from './screen/WebViewScreen';
export default class App extends Component {
  constructor(props) {
    super(props)
}

  render() {
    return (
      <NavigationScreenContainer/>
    )
  }
}

const NavigationScreen = new createStackNavigator({
  
    SplashScreen : {screen: SplashScreen},
    LoginScreen : {screen : LoginScreen},
    ParticipantList:{screen: ParticipantList},
    TextChat : {screen: TextChat},
    WebViewScreen : {screen:WebViewScreen},
}, {initialRouteName: 'SplashScreen'});

const NavigationScreenContainer = new createAppContainer(NavigationScreen);