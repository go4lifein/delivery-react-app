import React, { useState  ,useEffect} from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
/* global google */

const r = [{
  origin: { lat: 27.93415776638459, lng: 76.85305579301976 },
  destination: { lat: 28.99584804395379, lng: 77.00556672616105 },
  color: '#FCC888',

},  {origin: { lat: 28.99584804395379, lng: 77.00556672616105 },
destination: { lat: 28.447943760858596, lng:77.08380978717815 },
  color: '#CCFCD4',
}];
export default function Map() {
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
      <GoogleMap defaultZoom={9} defaultCenter={{ lat: 41.75, lng: 1.8 }}>
        

        {directions.map((item,index) =>(
                      <>
                          <Marker position={r[index].origin} icon = {{url:"https://maps.google.com/mapfiles/ms/icons/blue.png"}} />
                          <Marker position={r[index].destination} icon = {{url:"https://maps.google.com/mapfiles/ms/icons/blue.png"}} />
                          <DirectionsRenderer
                          key = {index}
                          directions={item}
                          options={{
                            suppressMarkers: true,
                            polylineOptions: {
                              strokeColor:r[index].color,
                              strokeOpacity: 1.0,
                              strokeWeight: 10,
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
