import React from 'react';
import { Typography } from '@material-ui/core';
import ItemCard from './ItemCard';
import HarvestReport from './HarvestReport';
import Dialog from '@material-ui/core/Dialog'

function OrderDelivery(props) {
  const {itemDetails = {}} = props;
  const {orderItems= [], harvestReports = []} = itemDetails;

  const [selectedReport, setSelectedReport] = React.useState(null);

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
      <Dialog 
        fullScreen 
        open={selectedReport}
      >
        {
          selectedReport &&
          (
            <div className="report-wrapper">
              <HarvestReport 
                report={selectedReport} 
                closeReport={() => {
                  setSelectedReport(null)
                }}
              />
            </div>
          )
        }
      </Dialog>
      <div>
        {
          orderItems.map(item => {
            let harvestReport = harvestReports.find(report => report.productId === item.product_id);
            return (
              <ItemCard 
                key={item.ItemCode} 
                item={item} 
                harvestReport={harvestReport}
                onSelectReport={() => {
                  console.log(harvestReport);
                  setSelectedReport(harvestReport);
                }}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default OrderDelivery;