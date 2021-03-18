import React from 'react';
import { Typography } from '@material-ui/core';
import ItemCard from './ItemCard';

const orderItems = [
  {
    "OrderNo": "147378",
    "ItemCode": "62",
    "PackQty": 1,
    "OrderOn": "2021-03-17T00:00:00.000Z",
    "PackOn": "2021-03-17T13:24:38.147Z",
    "id": 62,
    "name": "500",
    "image": "https://s3.ap-south-1.amazonaws.com/milkmansaasuploads/uploads/gaudugdham/1585402370408963483.png",
    "product_id": 54,
    "package_size": 500,
    "package_type": "grams",
    "product": "Green Methi"
  },
  {
    "OrderNo": "147378",
    "ItemCode": "181",
    "PackQty": 1,
    "OrderOn": "2021-03-17T00:00:00.000Z",
    "PackOn": "2021-03-17T13:24:44.863Z",
    "id": 181,
    "name": "500",
    "image": "https://s3.ap-south-1.amazonaws.com/milkmansaasuploads/uploads/gaudugdham/15906390332128780497.png",
    "product_id": 170,
    "package_size": 500,
    "package_type": "grams",
    "product": "Apple - Royal Gala ( Imported )"
  },
  {
    "OrderNo": "147378",
    "ItemCode": "811",
    "PackQty": 1,
    "OrderOn": "2021-03-17T00:00:00.000Z",
    "PackOn": "2021-03-17T13:26:56.427Z",
    "id": 811,
    "name": "300",
    "image": "https://s3.ap-south-1.amazonaws.com/milkmansaasuploads/uploads/gaudugdham/1604994238453462176.png",
    "product_id": 797,
    "package_size": 300,
    "package_type": "grams",
    "product": "VEEBA CAESAR DRESSING 300GM"
  },
  {
    "OrderNo": "147378",
    "ItemCode": "95",
    "PackQty": 1,
    "OrderOn": "2021-03-17T00:00:00.000Z",
    "PackOn": "2021-03-17T13:26:56.473Z",
    "id": 95,
    "name": "500",
    "image": "https://s3.ap-south-1.amazonaws.com/milkmansaasuploads/uploads/gaudugdham/15855121531422635087.png",
    "product_id": 87,
    "package_size": 500,
    "package_type": "grams",
    "product": "Organic Besan (Chana Gram Flour)"
  },
  {
    "OrderNo": "147378",
    "ItemCode": "98",
    "PackQty": 1,
    "OrderOn": "2021-03-17T00:00:00.000Z",
    "PackOn": "2021-03-17T13:26:56.503Z",
    "id": 98,
    "name": "500",
    "image": "https://s3.ap-south-1.amazonaws.com/milkmansaasuploads/uploads/gaudugdham/1585511205999431889.png",
    "product_id": 90,
    "package_size": 500,
    "package_type": "grams",
    "product": "Organic Ragi (Finger Millet) Flour"
  }
]

function OrderDelivery(props) {
  const {itemDetails = {}} = props;
  const {orderItems= [], harvestReports = []} = itemDetails;

  if (!orderItems || orderItems.length === 0) {
    return (
      <div className="p-10">
        <Typography variant="h6">
          No items found.
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h5">
        Items
      </Typography>
      <div>
        {
          orderItems.map(item => {
            let harvestReport = harvestReports.find(report => report.productId === item.product_id);
            return (
              <ItemCard 
                key={item.ItemCode} 
                item={item} 
                harvestReport={harvestReport}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default OrderDelivery;