import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import CameraStyles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = (props) => {
  const { closeCamera, takePicture, toggleFacing, faceIcon } = props
  return (
    <View style={CameraStyles.footer}>
      <TouchableOpacity style={CameraStyles.iconButton} onPress={closeCamera}>
        <Icon name={'close-circle'} size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={CameraStyles.iconButton} onPress={takePicture}>
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#fff',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: '#fff',
            }}></View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={CameraStyles.iconButton} onPress={toggleFacing}>
        <Icon name={faceIcon} size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default Footer
