import React, { Component }  from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './GoogleMapApi.css'

// const style = {
//   width: '75%',
//   height: '360px',
// }

// const containerStyle= {
//   width: '40vw',
//   height: '90vh'
// }

export function MapContainer2 (props) {

  let coordinates = props.props
  console.log(coordinates.latitude, coordinates.longitude)
  const containerStyle = {
    width: '500px',
    height: '400px',
  }

  if (!props.google){
    return null
  } else {
    return(
          <Map google={props.google}
                zoom={4}
                containerStyle={containerStyle}
                style={{height: '100%', width: '100%', display:'flex'}}
                initialCenter={{ lat: coordinates.latitude, lng: coordinates.longitude}}
                >
          <Marker position={{lat: coordinates.latitude, lng: coordinates.longitude}} />

          </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyDQrHXGw1JayN7O-28ufeC4jBMWwfeY4Og')})(MapContainer2)
