import React from "react";
import Webcam from "react-webcam";
import Button from "@material-ui/core/Button";
import CameraIcon from '@material-ui/icons/Camera';
import ReplayIcon from '@material-ui/icons/Replay';

const videoConstraints = {
  // width: 1280,
  // height: 720,
  // facingMode: "user",
  facingMode: "environment"
};
 
const WebcamCapture = ({onCapture, image}) => {
  const [takingPhoto, setTakingPhoto] = React.useState(image ? false : true);
  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      onCapture(imageSrc);
      setTakingPhoto(false);
    },
    [webcamRef, onCapture]
  );
 
  return (
    <div style={{background: '#000'}}>
      {takingPhoto ?
        <div style={{position: 'relative'}}>
          <Webcam
            audio={false}
            width={224}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <div style={{
            position: 'absolute', 
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>
            <Button 
              onClick={capture} 
              variant="contained"
              style={{
                borderRadius: 0
              }}
              fullWidth 
              color="primary"
              startIcon={<CameraIcon style={{color: 'white'}} />}
            >
              Capture
            </Button>
          </div>
        </div>:
        <div style={{
          position: 'relative'
        }}>
          <img 
            src={image} 
            alt="order_photo"
            width={282}
          />
          <div style={{
            position: 'absolute', 
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>
            <Button 
              color="primary"
              style={{
                borderRadius: 0
              }}
              variant="contained"
              onClick={() => setTakingPhoto(true)} 
              fullWidth 
              startIcon={<ReplayIcon style={{color: 'white'}} /> }
            >
              Retake
            </Button>
          </div>
        </div>
      }
    </div>
  );
};

export default WebcamCapture;