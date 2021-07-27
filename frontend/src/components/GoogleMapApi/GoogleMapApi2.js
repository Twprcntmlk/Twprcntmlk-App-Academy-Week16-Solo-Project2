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

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props)

//   }

//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//     };

//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });

//     onMapClicked = (props) => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         })
//       }
//     };

//     render() {
//       const lat = this.props.latitude
//       const lon = this.props.longitude
//       return (
//         <Map google={this.props.google}
//             onClick={this.onMapClicked}
//             containerStyle={containerStyle}
//             style={style}
//             zoom={4}
//             initialCenter={{
//               lat: lat,
//               lng: lon
//             }}
//             >
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'}
//                 />
//           {/* {props.trees.map(tree => {
//           return <Marker key={tree.id} position={{lat: tree.latitude, lng: tree.longitude}} />
//         })} */}
//         </Map>
//       )
//     }
//   }


export function MapContainer2 (props) {

  let coordinates = props.props

  const containerStyle = {
    // position: 'fixed',
    // top: '95px',

    width: '500px',
    height: '38%',
  }

  // const style = {
  //   width: '10%',
  //   height: '10%',
  // }


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

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBpfbp2b1e6kzv8_A1yrUGO3eVt20eFSNA')
})(MapContainer2)
