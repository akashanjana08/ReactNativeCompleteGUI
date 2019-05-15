import React , {Component} from 'react';
import {WebView ,View , StyleSheet} from 'react-native';

export default class WebViewScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
 
             <View style={styles.container}>
                 <WebView source={{uri : 'http://www.google.com'}}></WebView>
              </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})