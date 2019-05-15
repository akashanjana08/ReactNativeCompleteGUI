import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class ParticipantList extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state={
            dataScource :[],
            isLod:false
        }
    }

    componentDidMount(){
        let that = this;
        fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json())
        .then((responseJson) => {
             that.setState({isLod:true,dataScource:responseJson});
          return responseJson;
        })
    }


    onItemClick = (item) => {
        //alert(item.title + "  Hello ")
        this.props.navigation.navigate('TextChat',{data:item.title});
    }

    renderSeparator = () => {
        return <View style={{ height: 2, width: '100%', backgroundColor: 'grey' }}></View>
    }

    renderItems = ({ item }) => {
        return (
            <TouchableOpacity key={item.id} onPress={this.onItemClick.bind(this,item)}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 150 / 2 }} source={{ uri: item.thumbnailUrl }} />
                    <View style={styles.listContainer}>
                        <Text numberOfLines={1}  style={{width:'100%', fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
                        <Text>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity >

        )
    }

    render() {
        return (
           this.state.isLod ? (<View style={styles.container}>
                <FlatList
                    data={this.state.dataScource}
                    renderItem={this.renderItems}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={(item, index) => item.id}
                />
            </View>) : <ActivityIndicator animating = {true} size = "large" style={styles.progressView}/> 
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 0,
        backgroundColor: '#f5fcff'
    },

    listContainer: {
        marginLeft: 5,
        marginTop: 5
    },

    progressView:{
       flex:1,
       justifyContent : 'center',
       alignItems:'center' 
    }

})