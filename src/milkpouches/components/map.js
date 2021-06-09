import React, { useState  ,useEffect} from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import bmc from '../assets/bmc.png';
import plant from '../assets/plant.png';
import warehouse from '../assets/warehouse.png';
/* global google */

export default function Map({r}) {
  const DirectionsService = new google.maps.DirectionsService();
  let [directions, setDirections] = useState([]);
  const [routes , setRoutes] = useState([]);
  useEffect(()=>{
      for(let i = 0 ; i < r.length;i++){
        DirectionsService.route(
          {
            origin: r[i].origin,
            destination: r[i].destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDirections(directions => [...directions , result]);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      }
  },[]);

  return (
    <section className="googleMap">
      <GoogleMap defaultZoom={11} defaultCenter={{ lat: 41.75, lng: 1.8 }}>
        

        {directions.map((item,index) =>(
                      <>
                      {
                        r[index+1] && r[index].origin !== r[index+1].origin && 
                        <Marker position={r[index].origin} icon = {{url:bmc ,scaledSize:{width:70 , height:70}}}  />
                      }
                         
                         {
                           r[index+1] ?( r[index].destination !== r[index+1].origin  &&
                            <Marker position={r[index].destination} icon = {{url:plant , scaledSize:{width:70 , height:70}}} />
                           ): <Marker position={r[index].destination} icon = {{url:warehouse , scaledSize:{width:70, height:70}}} /> }
                          <DirectionsRenderer
                          key = {index}
                          directions={item}
                          options={{
                            suppressMarkers: true,
                            polylineOptions: {
                              strokeColor:r[index].color,
                              strokeOpacity: 1.0,
                              strokeWeight: 4,
                            },
                          }}
                        />
                        </>
          )) 

        }
      </GoogleMap>
    </section>
  );
}
