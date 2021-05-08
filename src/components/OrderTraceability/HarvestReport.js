import React, { useState } from 'react'
import MapGL, {Marker} from 'react-map-gl';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "../../css/report.scss";

import Logo from '../../images/logo.png';

import markerImage from '../../images/marker.webp';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function Report({report, closeReport}) {

  const {harvestTime, farmerImage, region, subregion, farmer, product, productImage, latitude, longitude} = report;

  const [ viewport, setViewport ] = useState({
    latitude: Number(latitude) - 0.040000,
    longitude: Number(longitude) + 0.062000,
    zoom: 11,
  });

  return (
    <div className="relative" id="report">
      <div className="absolute" style={{top: 10, left: 10, paddingLeft: 10, zIndex: 12, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 4}}>
        
        <IconButton 
          edge="start" 
          color="inherit" 
          onClick={closeReport} 
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="absolute" style={{top: 10, right: 10, paddingLeft: 10, zIndex: 12}}>
        <img src={Logo} style={{width: 100, borderRadius: 4}} alt="go4life" />
      </div>
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        doubleClickZoom={false}
        scrollZoom={false}
        mapStyle="mapbox://styles/umakantv/ckl6mevfz50qk19qotvcyz4hd"
      >

        
        <Marker
          // latitude={Number(Farmer.latitude) + 0.160123}
          // longitude={Number(Farmer.longitude) }
          latitude={Number(latitude) - 0.070123}
          longitude={Number(longitude) + 0}
          offsetLeft={-20} offsetTop={-10}
        >
          <img src={markerImage} width={40} alt="marker" />
          <div>
            <div className="farmer">
              <div className="avatar">
                <img src={productImage} alt={product} />
              </div>
              <div className="content">
                <div className="title">{product}</div>
                <div style={{fontFamily: 'monospace'}}>
                  Harvested on <br />
                  {new Date(harvestTime).toDateString()} <br />
                  at {new Date(harvestTime).toUTCString().substr(17, 8)}
                </div>
              </div>
            </div>
          </div>
        </Marker>

        <Marker
          latitude={Number(latitude)}
          longitude={Number(longitude)}
          offsetLeft={-20} offsetTop={-10}
        >
          {/* <img src={markerImage} width={40} alt="pin" /> */}
          <div className="radar-marker">

          </div>
          <div className="" >
            <div className="farmer">
            
              <div className="avatar">
                <img src={farmerImage} alt={farmer} />
              </div>
              <div className="content">
                <div className="title">{farmer}</div>
                <div>
                  {subregion}, {region}
                </div>
              </div>
            </div>
          </div>
        </Marker>
      </MapGL>
    </div>
  );
};

export default Report;