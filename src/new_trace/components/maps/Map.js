import { resultKeyNameFromField } from "@apollo/client/utilities";
import React, { useState  ,useEffect} from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
/* global google */

export default function Map({r}) {
  const DirectionsService = new google.maps.DirectionsService();
  let [directions, setDirections] = useState(null);
  const {origin , destination, startIcon ,endIcon } = r;
 
  useEffect(()=>{
     
        DirectionsService.route(
          {
            origin:origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      
  },[]);

  return (
    <section className="googleMap">
      <GoogleMap defaultZoom={14} defaultCenter={{ lat: 27.93415776638459,
  lng: 76.85305579301976,}}>
        
            {
              directions &&

              <>
              <Marker position={origin} icon = {{url:startIcon  , scaledSize:{width:40 , height: 40}}}/>
              <Marker position={destination} icon = {{url:endIcon, scaledSize:{width:40 , height: 40}}} />
              <DirectionsRenderer
              directions={directions}
              options={{
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor:r.color,
                  strokeOpacity: 1.0,
                  strokeWeight: 4,
                },
              }}
            />
            </>
            }
        
                     

        
      </GoogleMap>
    </section>
  );
}
