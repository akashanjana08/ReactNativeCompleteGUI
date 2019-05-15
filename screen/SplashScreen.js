/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, AsyncStorage } from 'react-native';
import { NavigationActions,StackActions  } from 'react-navigation'
var img = require('../images/logo.png')
export default class SplashScreen extends Component {
  static navigationOptions = { header: null, backgroundColor: '#0091ea' };
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    AsyncStorage.setItem('AppName','Vidyo IO')
  }

  componentDidMount() {
    const that = this;
    AsyncStorage.getItem('isLogin').then((value) => {
      setTimeout(function () {
        if (value != null) {
          that.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'ParticipantList' })],
          }))
        } else {
          that.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
          }))
        }
      }, 2000)
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0091ea"
          barStyle="default"
          hidden = {true}
          translucent = {false}
        />
        <Image source={require('../images/login_background.png')} style={styles.background}>
        </Image>
        <View style={styles.logo}>
          <Image style={{ width: 150, height: 150 }} source={img}></Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'

  },
  content: {
    alignItems: 'center',
  },

  logo: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  textStyle: {
    color: '#E31024',
    fontSize: 50
  }
});