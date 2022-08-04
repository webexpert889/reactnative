//import liraries
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export const ListOption = ({
  title = 'Item',
  leftIcon,
  rightIcon,
  onPress,
  activeOpacity = 0.7,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <View style={styles.titleWrap}>
        {leftIcon && <View style={styles.iconWrap}>{leftIcon}</View>}
        <Text numberOfLines={1} style={styles.optionText}>
          {title}
        </Text>
      </View>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  )
}
