import React, { useState } from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./Map";
import styled from 'styled-components';



const center = {
  lat: 27.93415776638459,
  lng: 76.85305579301976,
};

export default function MapContainer({r}) {
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <WrappedMap
      r = {r}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${"AIzaSyAwNxCHwaidii9FbS6CkBC_nch1KPXLXv0"}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<Area />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

const Area = styled.div`
  width: 50vw;
  height: 22vh;
  position:absolute;
  margin-top:1%;
  margin-left:-25%;
  @media (max-width:1500px)
  {
    height:26vh;
  }
  @media (max-width:800px)
  {
    margin-top:1%;
    height: 28vh;
  }
  @media (max-width:500px)
  {
    margin-top:1%;
    height:15vh;
  
  }
  @media (max-width:340px)
  {
    height:15vh;
  }
`;