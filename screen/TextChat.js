import React,{Component} from 'react';
import {Text , AsyncStorage , View} from 'react-native';
export default class TextChat extends Component{

    constructor(props){
        super(props)
        this.state={
            AppName:""
        }
    }
   
    componentDidMount(){
        let that = this;
        AsyncStorage.getItem('AppName').then((value)=>{
            that.setState({AppName : value});
        });
    }

    render(){
        return(
            <View>
                <Text>{this.state.AppName}</Text>
                <Text>{this.props.navigation.state.params.data}</Text>    
            </View>
        )
    }

} 