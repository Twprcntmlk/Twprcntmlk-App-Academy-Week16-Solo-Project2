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

export function MapContainer (props) {
  let coordinates = props.props

  const containerStyle = {
    position: 'fixed',
    top: '260px',
    left: '60%',
  }

  if (!props.google){
    return null
  } else {
    return(
          <Map google={props.google}
                zoom={4}
                containerStyle={containerStyle}
                style={{height: '71%', width: '39%'}}
                // initialCenter={{ lat: 39.8283, lng: -98.5795 }}
                >
            {coordinates.map((el) =>{
            return <Marker key={el.id} position={{lat: el.latitude, lng: el.longitude}} />
            })}
          </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyBpfbp2b1e6kzv8_A1yrUGO3eVt20eFSNA')})(MapContainer)
