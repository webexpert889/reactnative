import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles'
import { CARROT_PINK } from '../../theme'

const Loader = ({ isLoading = false }) => {
  if (isLoading) {
    return (
      <View style={{ ...styles.loader, zIndex: 100 }}>
        <ActivityIndicator size="large" color={CARROT_PINK} />
      </View>
    )
  }
  return null
}

export default Loader
