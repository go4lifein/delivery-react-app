import React from "react";
import Webcam from "react-webcam";
import IconButton from "@material-ui/core/IconButton";
import CameraIcon from '@material-ui/icons/Camera';
import ReplayIcon from '@material-ui/icons/Replay';

const videoConstraints = {
  // width: 1280,
  // height: 720,
  facingMode: "user"
};
 
const WebcamCapture = () => {
  const [takingPhoto, setTakingPhoto] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(null);
  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      setTakingPhoto(false);
    },
    [webcamRef]
  );
 
  return (
    <>
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
              <CameraIcon />
            </IconButton>
          </div>
        </div>:
        <div style={{
          position: 'relative'
        }}>
          <img 
            src={imgSrc} 
            alt="order_photo"
            width={282}
            height={500}
          />
          <div style={{
            position: 'absolute', 
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>
            <IconButton onClick={() => setTakingPhoto(true)}>
              <ReplayIcon /> 
            </IconButton>
          </div>
        </div>
      }
    </>
  );
};

export default WebcamCapture;