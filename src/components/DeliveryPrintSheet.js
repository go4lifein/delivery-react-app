import React, { Component } from 'react';
import {POUCH_MILK_PRODUCTS, BOX_MILK_PRODUCTS} from '../constants/config';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ReactToPrint from "react-to-print";


import '../css/delivery-sheet.css';
import { Button, DialogContent } from '@material-ui/core';

class DeliveryPrintSheet extends Component {
  state = {
    selectedDriver: 'all'
  }
  filterData = () => {
    let { selectedDriver } = this.state;
    let { orders} = this.props;
    
    let data = [];
    
    if(orders) {
      data = orders.filter((item) => {
        
        if(selectedDriver !== 'all') {
          if(selectedDriver === 'none') {
            if(item.driverId !== null) return false;
          } else if(item.driverId !== selectedDriver) return false;
        }
        return true;
      })
    }
    
    return data;
    
  }
  groupData = () => {
    
    const { deliveryBoys, orderBoxData, orderProducts } = this.props;
    const orders = this.filterData();

    let deliveryBoysOrders = new Map();

    for (let index = 0; index < orders.length; index++) {
      let item = orders[index];
      
      let {driverId} = item;
      let driverName = deliveryBoys.get(driverId)?.name;
      
      const {orderId} = item;
      const boxData = orderBoxData.get(parseInt(orderId));
      const orderProductsData = orderProducts.get(parseInt(orderId));
      
      item.crateId = boxData?.crateId;
      item.driverName = driverName;

      let pouchMilkQty = 0;
      let gableTopQty = 0;

      if(orderProductsData) {
        // console.log(orderProductsData)
        orderProductsData.forEach(item => {
          const {productId, qty} = item;
          if(POUCH_MILK_PRODUCTS.includes(productId)) {
            pouchMilkQty += qty;
          } else if(BOX_MILK_PRODUCTS.includes(productId)) {
            gableTopQty += qty;
          }
        })

      } else {
        // No order product data
        console.log(item)
        alert("No items found for order " + orderId);
      }

      // Handle LargeBox, MediumBox, Packet
      const {largeBox, mediumBox, packet } = boxData || {};

      item = {
        ...item,
        pouchMilkQty,
        gableTopQty,
        mediumBox,
        largeBox,
        packet 
      }

      if(gableTopQty || pouchMilkQty || largeBox || mediumBox || packet ) {
        // Order went through Amit's system
      } else {
        // Something is wrong
      }

      if(deliveryBoysOrders.get(driverId)) {
        deliveryBoysOrders.get(driverId).push(item);
      } else {
        deliveryBoysOrders.set(driverId, [item]);
      }
    }
    return deliveryBoysOrders;
  }
  render() {
    const {selectedDriver} = this.state;
    let { deliveryBoys, open, onClose } = this.props;
    
    let deliveryBoysData = deliveryBoys ? Array.from(deliveryBoys.values()) : [];
    deliveryBoysData = deliveryBoysData.sort((a, b) => (a.name.localeCompare(b.name)));

    let deliveryBoysOrders = Array.from(this.groupData().entries());


    return (
      <Dialog 
        open={open}
        fullScreen
        onClose={onClose}
      >
        <AppBar color="default" position="static">
          <Toolbar>
            <div className="flex middle stretch">
              <IconButton 
                edge="start" 
                color="inherit" 
                onClick={onClose} 
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" >
                Delivery Sheet
              </Typography>
            </div>
            
            <div className="flex middle">
              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="driver-filter">Assigned Driver</InputLabel>
                  <Select
                    labelId="driver-filter"
                    style={{width: 200}}
                    value={selectedDriver || 'all'}
                    onChange={(e, b) => {
                      let selectedDriver = e.target.value;
                      this.setState({selectedDriver});
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="none">None</MenuItem>
                    {deliveryBoysData.map(item => (
                      <MenuItem value={item.id} key={`driver-${item.id}`}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              
              <div style={{marginRight: 20}}>
                <ReactToPrint
                  trigger={() => <Button
                    color="secondary"
                    variant="outlined"
                  >
                    Print Sheet
                  </Button>}
                  content={() => document.getElementById('delivery-sheet')}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <DialogContent>
        <div id="delivery-sheet" style={{margin: 30}}>
        
        {/* <div style={{pageBreakBefore:"always"}}>
          Dog Page 1
          <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" height="400px" alt="dog" />
        </div>
        <div style={{pageBreakBefore:"always"}}>
          Dog Page 2
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" height="400px" alt="dog" />
        </div>  */}
        
        {
          deliveryBoysOrders.map(([driverId, orders], index) => {
            
            let driver = deliveryBoys.get(driverId);
            orders = orders.sort((a, b) => a.location_id - b.location_id);

            let totalPouchMilkQty = 0, totalGableTopQty = 0, totalMediumBox = 0, totalLargeBox = 0, totalPackets = 0;

            orders.forEach(order => {
              let {
                pouchMilkQty,
                gableTopQty,
                mediumBox,
                largeBox,
                packet
              } = order;
              
              totalPouchMilkQty += pouchMilkQty || 0;
              totalGableTopQty += gableTopQty || 0;
              totalMediumBox += mediumBox || 0;
              totalLargeBox += largeBox || 0;
              totalPackets += packet || 0;

              // console.log(totalLargeBox, largeBox);
            });


            return (
              <div style={{pageBreakBefore:"always"}} key={index.toString()}>
                {/* Driver data Starts here */}

                {/* Summary*/}
                <div className="flex space-bw"> 
                  {/* left side - total counts */}
                  <div style={{flex: "1"}}>
                    <div style={{fontSize: 30}}>{driver?.name}</div>
                    <div style={{fontSize: 24}}>Total Orders: {orders.length}</div>
                    <div style={{fontSize: 17}}>
                      <table style={{width: 200}}>
                        <tbody>
                          {
                            // totalPouchMilkQty > 0 &&
                            <tr>
                              <td>Pouch Milk</td>
                              <td>{totalPouchMilkQty}</td>
                            </tr>
                          }
                          {
                            // totalGableTopQty > 0 &&
                            <tr>
                              <td>Gable Top Milk</td>
                              <td>{totalGableTopQty}</td>
                            </tr>
                          }
                          {
                            // totalMediumBox > 0 &&
                            <tr>
                              <td>Medium Box</td>
                              <td>{totalMediumBox}</td>
                            </tr>
                          }
                          {
                            // totalLargeBox > 0 &&
                            <tr>
                              <td>Large Boxes</td>
                              <td>{totalLargeBox}</td>
                            </tr>
                          }
                          {
                            // totalPackets > 0 &&
                            <tr>
                              <td>Packets</td>
                              <td>{totalPackets}</td>
                            </tr>
                          }
                            
                          </tbody>
                        </table>
                    </div>
                  </div>
                  {/* right side - signature stuff */}
                    <table className="signature-table">
                      <tbody>
                        <tr>
                          <td>Inventory Sign</td>
                          <td>__________________</td>
                        </tr>
                        <tr>
                          <td>Dairy Sign</td>
                          <td>__________________</td>
                        </tr>
                        <tr>
                          <td>Guard Sign</td>
                          <td>__________________</td>
                        </tr>
                        <tr>
                          <td>Crates Taken</td>
                          <td>__________________</td>
                        </tr>
                        <tr>
                          <td>Crates Returned</td>
                          <td>__________________</td>
                        </tr>
                        <tr>
                          <td>Entry Time</td>
                          <td>__________________</td>
                        </tr>
                        <tr>
                          <td>Exit Time</td>
                          <td>__________________</td>
                        </tr>
                      </tbody>
                    </table>
                  <div>
                  </div>
                </div>

                {/* Order table */}
                <div>
                  <table className="delivery-order-table">
                    <tbody>
                      <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Address</th>
                        <th>Product</th>
                        <th>Box Code</th>
                        <th>Check Box</th>
                      </tr>
                      {
                        orders.map((order, index) => {
                          const {
                            region, area, subarea, name, phone, address, orderId,
                            pouchMilkQty,
                            gableTopQty,
                            mediumBox,
                            largeBox,
                            packet, crateId
                          } = order;

                          return (
                            <tr key={orderId}>
                              <td>{index+1}</td>
                              <td>{name}</td>
                              <td>{phone}</td>
                              <td className="location">{subarea}, {area}, {region}</td>
                              <td className="home-address">{address}</td>
                              <td>
                                <table className="delivery-sheet-product-type">
                                  <tbody>
                                    {
                                      pouchMilkQty > 0 &&
                                      <tr>
                                        <td>Milk Pouch</td>
                                        <td>{pouchMilkQty}</td>
                                      </tr>
                                    }
                                    {
                                      gableTopQty > 0 &&
                                      <tr>
                                        <td>Gable Top</td>
                                        <td>{gableTopQty}</td>
                                      </tr>
                                    }
                                    {
                                      mediumBox > 0 &&
                                      <tr>
                                        <td>Medium Box</td>
                                        <td>{mediumBox}</td>
                                      </tr>
                                    }
                                    {
                                      largeBox > 0 &&
                                      <tr>
                                        <td>Large Boxes</td>
                                        <td>{largeBox}</td>
                                      </tr>
                                    }
                                    {
                                      packet > 0 &&
                                      <tr>
                                        <td>Packets</td>
                                        <td>{packet}</td>
                                      </tr>
                                    }
                                    
                                  </tbody>
                                </table>
                              </td>
                              <td>{crateId}</td>
                              <td></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            );
            
          })
        }
        
        </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default DeliveryPrintSheet;