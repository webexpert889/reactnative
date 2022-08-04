import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { Button, InputBox } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import imagePaths from '../../utilities/imagePaths'
import Logo from '../../assets/svg/logo.svg'
import svgPaths from '../../utilities/svgPaths'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../redux/actions/users.actions'
import Loader from '../../components/Loader'
import Toast from 'react-native-toast-message'

const ChangePassword = ({ navigation }) => {
  const [apiData, setApiData] = useState({
    current_password: '',
    password: '',
    password_confirmation: '',
  })

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.users.isRequesting)
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setCnfirmPasswordVisible] = useState(false)

  const updatePassword = () => {
    dispatch(changePassword(apiData)).then(res => {
      Toast.show({
        type: 'success',
        text1: 'Password changed successfully.',
        text1NumberOfLines: 2,
      })
      navigation.goBack()
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFDEE4'} />
      <Loader isLoading={isLoading} />
      <ImageBackground
        source={imagePaths.loginBackgroundImage}
        resizeMode="cover"
        style={styles.imageStyle}>
        <TouchableOpacity
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
          onPress={() => navigation.goBack()}
          style={styles.backIconWrap}>
          {svgPaths.backIcon}
        </TouchableOpacity>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always">
          <View style={styles.logoSection}>
            {/* <Logo style={styles.logo} /> */}
            <Text style={styles.heading}>Change Password</Text>
          </View>
          <View>
            <InputBox
              style={styles.input}
              leftIcon={svgPaths.lock}
              secureTextEntry={!isCurrentPasswordVisible}
              rightIcon={
                isCurrentPasswordVisible ? svgPaths.eyeOff : svgPaths.eye
              }
              onChangeText={text => {
                setApiData({
                  ...apiData,
                  current_password: text,
                })
              }}
              placeholder={'Current password'}
              onRightIconPress={() => {
                setCurrentPasswordVisible(!isCurrentPasswordVisible)
              }}
              autoCapitalize="none"
              multiline={false}
            />

            <InputBox
              style={styles.input_custom}
              leftIcon={svgPaths.lock}
              secureTextEntry={!isPasswordVisible}
              rightIcon={isPasswordVisible ? svgPaths.eyeOff : svgPaths.eye}
              onChangeText={text => {
                setApiData({
                  ...apiData,
                  password: text,
                })
              }}
              placeholder={'New password'}
              onRightIconPress={() => {
                setIsPasswordVisible(!isPasswordVisible)
              }}
              autoCapitalize="none"
              multiline={false}
            />
            <View style={{ paddingBottom: 0, paddingLeft: 2 }}>
              <Text style={styles.passwordInfo}>
                Password must be 8-12 characters, and include a number, a
                symbol, a lower and a upper case letter
              </Text>
            </View>
            <InputBox
              style={styles.input}
              leftIcon={svgPaths.lock}
              secureTextEntry={!isConfirmPasswordVisible}
              rightIcon={
                isConfirmPasswordVisible ? svgPaths.eyeOff : svgPaths.eye
              }
              onChangeText={text => {
                setApiData({
                  ...apiData,
                  password_confirmation: text,
                })
              }}
              placeholder={'Confirm new password'}
              onRightIconPress={() => {
                setCnfirmPasswordVisible(!isConfirmPasswordVisible)
              }}
              autoCapitalize="none"
              multiline={false}
            />
            <Button
              title={'Change Password'}
              onPress={() => {
                updatePassword()
              }}
              style={styles.loginButton}
            />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ChangePassword
