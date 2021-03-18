import React from 'react';
import moment from 'moment-timezone';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
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

const ItemCard = ({item, harvestReport}) => {
  const classes = useStyles();
  const {
    // ItemCode, product_id, 
    product, package_size, package_type, image, PackOn, PackQty
  } = item;
  return (
    <div className="p-4 flex column" style={{minWidth: 180}}>
      <Card className={classes.root}>
        {/* <CardHeader
          title={product}
          subheader={`${package_size * PackQty} ${package_type}`}
        /> */}
        <div className="stretch">
          <div className="flex center p-4">
            <img src={image} height={100} alt={product} className="avatar" />
          </div>
          <Typography variant="body2" component="p">
            {product}
          </Typography>
          <Typography variant="body2" component="p">
            {`${package_size * PackQty} ${package_type}`}
          </Typography>
          {/* <CardMedia
            className={classes.media}
            image={image}
            title={product}
          /> */}
          <Typography variant="body2" color="textSecondary" component="p">
            Packed on {moment(PackOn).utc().format('DD-MM-YYYY hh:mm A')}
          </Typography>
        </div>
        <div>
          {
            harvestReport &&
            <Button variant="contained" color="primary">
              Trace
            </Button>
          }
        </div>
        
      </Card>
    </div>
  );
};

export default ItemCard;