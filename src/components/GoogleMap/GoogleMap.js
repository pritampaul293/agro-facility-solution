import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker,} from 'google-maps-react';


class GoogleMap extends Component {
    render() {
        return (
            <Map google={this.props.google}
                 style={{width: "100%", height: "75%"}}
                 zoom={12}
                 initialCenter={
                     {
                         lat: 22.368687,
                         lng: 91.796242
                     }
                 }
            >


                <Marker onClick={this.onMarkerClick}
                        name={'Current location'}/>


            </Map>


        );
    }
}


export default GoogleApiWrapper(
    {
        apiKey: ("AIzaSyBi4XES-PsdnInOz3NROfQAzIopdvx9EO0")
    }
)(GoogleMap)



