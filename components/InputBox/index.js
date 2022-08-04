import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import styles from './styles'
import { LIGHT_GRAY_77 } from '../../theme'

// create a component
export const InputBox = ({
  placeholder = 'InputBox',
  value,
  onChange,
  onChangeText,
  style = {},
  numberOfLines,
  multiline = true,
  inputBoxStyle = {},
  leftIcon,
  onRightIconPress,
  rightIcon,
  rightComponentText,
  secureTextEntry = false,
  editable = true,
  isDescriptionBox = false,
  keyboardType = 'default',
  ...rest
}) => {
  
  return (
    <View
      style={[
        styles.inputContainer,
        style,
        isDescriptionBox ? styles.descriptionBox : undefined,
      ]}
    >
      {leftIcon && (
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.leftIcon,
            isDescriptionBox
              ? { height: 120, justifyContent: 'flex-start', paddingTop: 15 }
              : undefined,
          ]}
        >
          {leftIcon}
        </TouchableOpacity>
      )}
    
      <TextInput
        editable={editable}
        style={[
          styles.inputBox,
          inputBoxStyle,
          isDescriptionBox ? { height: 120, paddingTop: 12 } : undefined,
        ]}
        value={value}
        onChange={onChange}
        numberOfLines={numberOfLines}
        multiline={multiline}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={LIGHT_GRAY_77}
        color={LIGHT_GRAY_77}
        autoCorrect={false}
        keyboardType={keyboardType}
        {...rest}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          activeOpacity={1}
          style={[
            styles.rightIcon,
            isDescriptionBox ? { height: 120 } : undefined,
          ]}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
      {rightComponentText && (
        <TouchableOpacity
          onPress={onRightIconPress}
          activeOpacity={1}
          style={[styles.rightIcon, styles.rightText]}
        >
          <Text>{rightComponentText}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
