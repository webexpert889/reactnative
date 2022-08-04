import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

// create a component
export const Button = ({
  title = 'Button',
  onPress,
  style = {},
  textStyle = {},
  activeOpacity = 0.3,
  disabled = false

}) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    style={[styles.button, style]}
    onPress={onPress}
    disabled = {disabled}
  >
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
)
