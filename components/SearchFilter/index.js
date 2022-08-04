//import liraries
import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import svgPaths from '../../utilities/svgPaths'
import styles from './styles'

export const SearchFilter = ({
  placeholder = 'Search Need',
  onFilterPress = null,
  inputValue = '',
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.seachBar}>
        {svgPaths.searchPrimary}
        <TextInput
          value={inputValue}
          onChangeText={onChangeText}
          style={inputValue ? styles.searchInput : styles.placeholderInput}
          placeholder={placeholder}
          placeholderStyle={{}}
        />
      </View>
      <TouchableOpacity style={styles.filterBtn} onPress={onFilterPress}>
        {svgPaths.filter}
      </TouchableOpacity>
    </View>
  )
}
