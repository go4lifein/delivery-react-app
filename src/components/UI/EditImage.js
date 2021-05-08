import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import UploadIcon from '@material-ui/icons/CloudUpload';
import Overlay from './Overlay';
import Divider from '@material-ui/core/Divider';
import UploadImageFile from './UploadImages';

function EditImage({previousImage, ...props}) {
  
  const [showAlert, setShowAlert] = React.useState(false);
  const [file, setFile] = React.useState(false);

  const onSetFile = (files) => {
    const file = files[0];
    setFile(file)
  }
  return (
    <div>
      <Overlay
        overlay={<IconButton
          {...props}
          onClick={() => setShowAlert(true)}
        >
          <UploadIcon />
        </IconButton>}
        main={
          <img src={previousImage} alt="icon" />
        }
        style={{
          height: 100,
          width: 100,
        }}
      />
      <Dialog
        open={showAlert}
        onClose={() => setShowAlert(false)}
        maxWidth={'lg'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Select Image</DialogTitle>
        <Divider />
        <div style={{ 
          minWidth: 400
        }}>
          <UploadImageFile 
            setFiles={onSetFile}
          />
        </div>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent> */}
        <Divider />
        <DialogActions>
          <Button onClick={() => setShowAlert(false)} color="primary">
            Cancel
          </Button>
          <Button color="primary" variant="contained" autoFocus>
            Upload
          </Button>
        </DialogActions>
        
      </Dialog>
      
    </div>
  );
}

export default EditImage;