import React, { Component }  from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMapApi.css'

const style = {
  width: '30%',
  height: '40%'
}

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    render() {
      return (
        <div className='GoogleMap'>
            <Map google={this.props.google}
                onClick={this.onMapClicked}
                style={style}
                initialCenter={{
                  lat: 40.854885,//pass in my coordinates
                  lng: -88.081807//pass in my coordinates
                }}
                >
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'}
                   />
            </Map>
        </div>
      )
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBpfbp2b1e6kzv8_A1yrUGO3eVt20eFSNA')
})(MapContainer)
