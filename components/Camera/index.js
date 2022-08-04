import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Footer from './Footer'
import styles from './styles'

export const Camera = ({
  onClose
}) => {
  const cameraRef = useRef()

  const [configs, setConfigs] = useState({
    type: 'back'
  })

  const takePhoto = async(camera) => {
    if (cameraRef) {
      const options = { quality: 0.8, base64: true };
      const data = await camera.takePictureAsync(options);
      onClose(data)
    }
  }

  const toggleFacing = () => {
    setConfigs({
      ...configs,
      type: configs.type == 'front' ? 'back' : 'front'
    })
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={configs.type}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera for uploading images by clicking.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera }) => {
            return (
              <Footer
              faceIcon={configs.type === 'back' ? 'camera-rear' : 'camera-front'}
              closeCamera={() => onClose()}
              takePicture={()=> takePhoto(camera)}
              toggleFacing={toggleFacing}/>
            );
          }}
      </RNCamera>
      </View>
  )
}