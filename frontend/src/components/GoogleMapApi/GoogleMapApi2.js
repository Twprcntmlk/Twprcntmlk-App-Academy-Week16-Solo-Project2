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

  const containerStyle = {
    width: '500px',
    height: '38%',
  }

  if (!props.google){
    return null
  } else {
    return(
          <Map google={props.google}
                zoom={4}
                containerStyle={containerStyle}
                style={{height: '100%', width: '100%', display:'flex'}}
                initialCenter={{ lat: coordinates[0].latitude, lng: coordinates[0].longitude}}
                >
            {coordinates.map((el) =>{
            return <Marker key={el.id} position={{lat: el.latitude, lng: el.longitude}} />
            })}
          </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyBpfbp2b1e6kzv8_A1yrUGO3eVt20eFSNA')})(MapContainer2)
