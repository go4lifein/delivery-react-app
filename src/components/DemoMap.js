import React, { useState, useEffect, Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Avatar from '@material-ui/core/Avatar';
import mapStyles from "./mapStyles";

function Map(props) {
  const {positions} = props;

  const [selectedRider, setSelectedRider] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedRider(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: positions[0].latitude, lng: positions[0].longitude }}
      defaultOptions={{ styles: mapStyles }}
    >
      {positions.map(rider => (
        <Marker
          key={rider.name}
          position={{
            lat: rider.latitude,
            lng: rider.longitude
          }}
          // icon={{
          //   src: <Avatar>R</Avatar>
          // }}
          icon={<Avatar>{rider.name.substr(0, 1)}</Avatar>}
          onClick={() => {
            setSelectedRider(rider);
          }}
        />
      ))}

      {selectedRider && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedRider(null);
          }}
          position={{
            lat: selectedRider.latitude,
            lng: selectedRider.longitude
          }}
        >
          <div>
            <h2>{selectedRider.name}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

class Driver extends Component {
  state = {
    latitude: 28.3866025,
    longitude: 77.0219132
  }
  componentDidMount() {
    const geo = navigator.geolocation;
    geo.watchPosition((position) => {
      // console.log(position);
      let {coords} = position;
      let {latitude, longitude} = coords;
      this.setState({
        latitude: 28 + Math.random() * 10,
        longitude: 76 + Math.random() * 10
      });
    });
    
    geo.getCurrentPosition((position) => {
      let {coords} = position;
      let {latitude, longitude} = coords;
      this.setState({
        latitude, longitude
      });
    });
  }
  render() {
    let {latitude, longitude} = this.state;
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          positions={[{latitude, longitude, name: 'Rajiv'}]}
        />
      </div>
    );
  }
}

export default Driver;