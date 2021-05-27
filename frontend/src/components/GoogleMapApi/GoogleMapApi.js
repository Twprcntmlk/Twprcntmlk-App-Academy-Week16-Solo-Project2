import React, { Component }  from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMapApi.css'

const style = {
  width: '100%',
  height: '100%',
}

const containerStyle= {
  width: '490px',
  height: '360px'
}

export class MapContainer extends Component {
  constructor(props) {
    super(props)

  }
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
      const lat = this.props.lat
      const lon = this.props.lon
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            containerStyle={containerStyle}
            style={style}
            zoom={10}
            initialCenter={{
              lat: lat,
              lng: lon
            }}
            >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                />
        </Map>
      )
    }
  }



export default GoogleApiWrapper({
  apiKey: ('AIzaSyBpfbp2b1e6kzv8_A1yrUGO3eVt20eFSNA')
})(MapContainer)
