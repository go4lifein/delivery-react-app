import React, { Component } from 'react';
import {POUCH_MILK_PRODUCTS, BOX_MILK_PRODUCTS} from '../constants/config';

import '../css/delivery-sheet.css';

class DeliveryPrintSheet extends Component {
  groupData = () => {
    
    const { deliveryBoys, orderBoxData, orderProducts, orders } = this.props;

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
        alert("Something wrong with data uploaded for order", orderId);
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
    let { orders, deliveryBoys, orderBoxData} = this.props;
    let deliveryBoysOrders = Array.from(this.groupData().entries());


    return (
      <div>
        
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
              
              totalPouchMilkQty += pouchMilkQty;
              totalGableTopQty += gableTopQty;
              totalMediumBox += mediumBox;
              totalLargeBox += largeBox;
              totalPackets += packet;
            });

            return (
              <div style={{pageBreakBefore:"always"}} key={index.toString()}>
                {/* Driver data Starts here */}

                {/* Summary*/}
                <div className="flex space-bw"> 
                  {/* left side - total counts */}
                  <div style={{flex: "1"}}>
                    <div style={{fontSize: 30}}>{driver?.name}</div>
                    <div>
                    <table style={{width: 200}}>
                      <tbody>
                        {
                          totalPouchMilkQty > 0 &&
                          <tr>
                            <td>Pouch Milk</td>
                            <td>{totalPouchMilkQty}</td>
                          </tr>
                        }
                        {
                          totalGableTopQty > 0 &&
                          <tr>
                            <td>Gable Top Milk</td>
                            <td>{totalGableTopQty}</td>
                          </tr>
                        }
                        {
                          totalMediumBox > 0 &&
                          <tr>
                            <td>Medium Box</td>
                            <td>{totalMediumBox}</td>
                          </tr>
                        }
                        {
                          totalLargeBox > 0 &&
                          <tr>
                            <td>Large Boxes</td>
                            <td>{totalLargeBox}</td>
                          </tr>
                        }
                        {
                          totalPackets > 0 &&
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
                        <th>Location</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Product</th>
                        <th>Box Code</th>
                        <th>Check Box</th>
                      </tr>
                      {
                        orders.map(order => {
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
                              <td>{subarea}, {area}, {region}</td>
                              <td>{name}</td>
                              <td>{phone}</td>
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
    );
  }
}

export default DeliveryPrintSheet;