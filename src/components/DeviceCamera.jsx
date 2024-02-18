import React, { useState, useRef } from 'react';
import Button from "@mui/material/Button";
import './DeviceCamera.css'
import { FaCamera, FaTrash } from "react-icons/fa";

function DeviceCamera() {
  const [imgSrc, setImgSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    setImgSrc(URL.createObjectURL(event.target.files[0]));
  };

  const openCamera = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setImgSrc(null);
  };

  return (
    <div className='device-camera-container'>
      <input
        style={{ display: 'none' }}
        type='file'
        accept='image/*'
        capture='environment'
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      <Button
        variant="contained"
        onClick={openCamera}
        startIcon={<FaCamera/>}
        style={{
            backgroundColor: "#3498db",
        }}
      >
        Ota kuva
      </Button>

      {/* Short circuit evaluation. Jos ImgSrc on olemassa eikä se ole viallinen, näytä otettu kuva*/}
      {imgSrc && (
        <div>
          <div className='top-bar'>
              <div
                className='delete-image'
                onClick={removeImage}
              >
                <FaTrash size={20} color='white'/>
              </div>
          </div>
          <img
            src={imgSrc}
            alt='Captured'
          />
        </div>
      )}
    </div>
  );
}

export default DeviceCamera;
