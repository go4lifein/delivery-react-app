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
        const {order_id, crate_id, name, phone, address} = item;
        const {hub, area, subarea, house_number} = address;
        return (
          <Card
            style={{
              margin: 10
            }}
          >
            <CardHeader
              onClick={() => {
                if(item.delivered) {
                  alert('Already delivered');
                  return;
                }
                history.push(`/${order_id}/deliver`)
              }}
              title={ 
                <div>
                  <div className="flex middle">
                    <Avatar style={{background: 'red'}}>
                      {crate_id}
                    </Avatar>
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
                </span> {house_number}, {subarea}, {area}, {hub}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
};

export default React.memo(withRouter(DriverOrderTable));