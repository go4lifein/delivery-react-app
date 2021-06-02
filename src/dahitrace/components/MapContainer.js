import React, { useState } from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./map";
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
  width: 95vw;
  height: 50vh;
  position:absolute;
  margin-top:8%;
  @media (max-width:1500px)
  {
    height:35vh;
  }
  @media (max-width:800px)
  {
    margin-top:12%;
  }
  @media (max-width:500px)
  {
    margin-top:18%;
  }
  @media (max-width:340px)
  {
    height:33vh;
  }
`;