import React from 'react';
import { withRouter } from "react-router";
// import DataTable from "react-data-table-component";
import PhoneIcon from '@material-ui/icons/Phone';
import Card from '@material-ui/core/Card';
// import Link from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

function DriverOrderTable(props) {
  
  const {data, history} = props;

  return (
    <div id="order cards">
      {data.map(item => {
        const {
          address,
          area,
          phone,
          orderId,
          region,
          name,
          subarea,
          region_id,
          customerID,
          driverId,
          location_id,
          orderDate
        } = item;

        return (
          <Card
            key={orderId.toString()}
            style={{
              margin: 10
            }}
          >
            <CardHeader
              onClick={() => {
                if(item.deliveryId) {
                  alert('Already delivered');
                  return;
                }
                history.push(`/${orderId}/deliver`)
              }}
              title={ 
                <div>
                  <div className="flex middle">
                    {/* <Avatar style={{background: 'red'}}>
                      {"10"}
                    </Avatar> */}
                    <div style={{marginLeft: 10}}>
                      {name}
                    </div>
                  </div>
                </div>
              }
            />
            <Divider />
            <CardContent>
              <div style={{paddingTop: 10, paddingBottom: 10}}>
                <a href={`tel:+91${phone}`} className="flex middle">
                  <PhoneIcon /> {phone}
                </a>
              </div>
              <div>
                <span style={{fontWeight: 'bold'}}>
                  Address
                </span> {address}, {subarea}, {area}, {region}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
};

export default React.memo(withRouter(DriverOrderTable));