import React from "react";
import Webcam from "react-webcam";
import IconButton from "@material-ui/core/IconButton";
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
            width={282}
            height={500}
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
            <IconButton onClick={capture}>
              <CameraIcon style={{color: 'white'}} />
            </IconButton>
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
            <IconButton onClick={() => setTakingPhoto(true)}>
              <ReplayIcon style={{color: 'white'}} /> 
            </IconButton>
          </div>
        </div>
      }
    </div>
  );
};

export default WebcamCapture;