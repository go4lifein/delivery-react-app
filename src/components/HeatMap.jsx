import * as React from 'react';
import { useState, useEffect } from 'react';
import MapGL, {NavigationControl, Source, Layer, MapContext} from 'react-map-gl';

import {getLocationCustomerDensity} from '../api/admin';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const navControlStyle= {
  right: 10,
  top: 10
};

function HeatMap() {
  const [data, setData] = useState([]);
  const [ viewport, setViewport ] = useState({
    latitude: 28.4501751,
    longitude: 77.0738271,
    zoom: 10,
  });

  useEffect(() => {
    getLocationCustomerDensity()
    .then(res => {
      setData(res.data);
    });
  }, []);

  const geojson = {
    type: 'FeatureCollection',
    features: [
      // {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };


  data.forEach(location => {
    const {customers, latitude, longitude} = location;
    geojson.features.push({
      type: 'Feature',
      properties: {
        value: customers,
      },
      geometry: {
        type: 'Point', 
        coordinates: [longitude, latitude]
      }
    })
  })

  function CurrentZoomLevel() {
    const context = React.useContext(MapContext);
  
    return <div>{context.viewport.zoom}</div>;
  }

  return (
    <div>
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        width="100vw"
        height="calc(100vh - 70px)"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl style={navControlStyle} />
        <Source type='geojson' data={geojson}>
          <Layer {...{
            type: 'heatmap',
            paint: {
              'heatmap-intensity': 0.1,
              'heatmap-radius': 12,
              'heatmap-weight': [ 'interpolate', [ 'linear' ], [ 'get', 'value' ], 0, 0, 6, 2 ],
              'heatmap-opacity': 1,
            },
          }} />
        </Source>
        <div style={{position: 'absolute', left: 10, top: 10}}>
          <CurrentZoomLevel />
        </div>
      </MapGL>
    </div>
  );
}

export default HeatMap;