import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class GoogleMapView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <View style={{flex:1}}> 
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{width:'100%' , height:'100%'}}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        )
    }
}