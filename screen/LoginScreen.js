/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity , AsyncStorage} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={require('../images/login_background.png')}>
        <View >
          <Image source={require('../images/logo.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            placeholder={'UserName'}
            placeholderTextColor={'grey'}
            underlineColorAndroid='transparent'>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            secureTextEntry={true}
            placeholder={'Passord'}
            placeholderTextColor={'grey'}
            underlineColorAndroid='transparent'
          >
          </TextInput> 
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn}  onPress={()=>{ this.props.navigation.navigate('ParticipantList'); AsyncStorage.setItem('isLogin','true');}}>
            <Text style={styles.btnText}>Join Meeting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo: {
    width: 120,
    height: 120
  },
  inputContainer: {
    marginTop: 20
  },
  input: {
    width: 320,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 20,
    borderColor: '#212121',
    borderWidth: 1,
    marginHorizontal: 35
  },

  loginBtn: {
    width: 320,
    height: 45,
    backgroundColor: '#0091ea',
    marginTop: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText: {
    color: 'white'
  }
});