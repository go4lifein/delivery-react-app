import React from 'react';
import moment from 'moment-timezone';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const ItemCard = ({item, harvestReport, onSelectReport}) => {
  const classes = useStyles();
  const {
    // ItemCode, product_id, 
    product, package_size, package_type, image, PackOn, PackQty
  } = item;
  return (
    <div className="p-4 flex column middle" style={{minWidth: 180}}>
      <Card className={classes.root} >
        <div className="stretch p-10">
          <div className="flex center p-4">
            <img src={image} height={100} alt={product} className="avatar" />
          </div>
          <Typography variant="body2" component="p">
            {product}
          </Typography>
          <Typography variant="body2" component="p">
            {`${package_size * PackQty} ${package_type}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Packed on {moment(PackOn).utc().format('DD-MM-YYYY hh:mm A')}
          </Typography>
        </div>
        {
          harvestReport &&
          <>
            <div>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={onSelectReport}
                fullWidth style={{
                  borderRadius: 0,
                  backgroundColor: 'green'
                }}
              >
                Know the Farmer
              </Button>
            </div>
          </>
        }
        
      </Card>
    </div>
  );
};

export default ItemCard;