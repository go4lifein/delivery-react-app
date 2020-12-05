import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps';

function Map(props) {
  console.log(props);
  return (
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{lat: 28.39, lng: 77.03}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map()));

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class Driver extends Component {
  state = {
    latitude: 0,
    longitude: 0
  }
  componentDidMount() {
    const geo = navigator.geolocation;
    geo.watchPosition((position) => {
      console.log(position);
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
      <div className="map-container">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Driver);