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
    top: '29%',
    bottom: '0px',
    left: '63%',
  }

  if (!props.google){
    return null
  } else {
    return(
          <Map google={props.google}
                zoom={4}
                containerStyle={containerStyle}
                style={{height: '90%', width: '38%'}}
                // initialCenter={{ lat: 39.8283, lng: -98.5795 }}
                >
            {coordinates.map((el) =>{
            return <Marker key={el.id} position={{lat: el.latitude, lng: el.longitude}} />
            })}
          </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyDQrHXGw1JayN7O-28ufeC4jBMWwfeY4Og')})(MapContainer)
