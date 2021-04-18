import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ConfirmAndSubmitButton({
  onSubmit,
  onCancel,
  label = "Submit",
  message = "Are you sure you want to proceed?",
  confirmLabel = "Yes, proceed",
  cancelLabel = "Cancel",
  alertTitle,
  ...props
}) {
  const [showAlert, setShowAlert] = React.useState(false);

  return (
    <div>
      <Dialog
        open={showAlert}
        onClose={() => setShowAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        {alertTitle && <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle>}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            {cancelLabel}
          </Button>
          <Button onClick={onSubmit} color="primary" variant="contained" autoFocus>
            {confirmLabel}
          </Button>
        </DialogActions>
        
      </Dialog>
      <Button 
        variant="contained"
        color="primary"
        {...props}
        onClick={() => setShowAlert(true)}
      >
        {label}
      </Button>
    </div>
  );
}

export default ConfirmAndSubmitButton;