import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Button, InputBox } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import imagePaths from '../../utilities/imagePaths'
import Logo from '../../assets/svg/logo.svg'
import svgPaths from '../../utilities/svgPaths'
import styles from './styles'
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  forgotPassword,
  confirmForgotPassword,
} from '../../redux/actions/users.actions'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ForgotPassword = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const { type: type } = route?.params
  const { otpConfirm } = route?.params
  const [agencyParams, setAgencyParams] = useState({
    email: '',
    user_type: type,
  })
  const [userParams, setUserParams] = useState({
    mobile_number: '',
    user_type: type,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showUpdatePasswordScreen, setshowUpdatePasswordScreen] =
    useState(false)
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setCnfirmPasswordVisible] = useState(false)

  useEffect(() => {
    if (otpConfirm == true) {
      setshowUpdatePasswordScreen(true)
    }
  }, [otpConfirm])

  const setData = async text => {
    if (type == 'User') {
      setUserParams({
        ...userParams,
        mobile_number: text,
      })
    } else {
      setAgencyParams({
        ...agencyParams,
        email: text,
      })
    }
  }

  const sendOtp = async () => {
    let params = type == 'User' ? userParams : agencyParams
 
    setIsLoading(true)
    await dispatch(forgotPassword(params))
      .then(res => {
        Toast.show({
          type: 'success',
          text1: res.message,
        })
        setIsLoading(false)
        navigation.navigate('OTPScreen', {
          signupData: params,
          from: 'ForgotPassword',
        })
      })
      .catch(err => {
        setIsLoading(false)
      })
  }

  const forgotConfirmPassword = async () => {
    let params = {}
    params.user_type = type
    if (type == 'User') {
      params.mobile_number = userParams.mobile_number
    } else {
      params.email = agencyParams.email
    }
    params.password = password
    params.password_confirmation = password_confirmation
   
    setIsLoading(true)
    await dispatch(confirmForgotPassword(params))
      .then(res => {
        Toast.show({
          type: 'success',
          text1: res.message,
        })
        navigation.navigate('Login', { type: type })
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
       
      })
  }

  return (
    <ImageBackground
      source={imagePaths.loginBackgroundImage}
      resizeMode="cover"
      style={styles.imageStyle}>
      <Loader isLoading={isLoading} />
      {/* <SafeAreaView style={{ flex: 1 }} edges={['top']}> */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIconWrap}>
        {svgPaths.backIcon}
      </TouchableOpacity>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        extraHeight={30}
        extraScrollHeight={30}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.logoSection}>
          <Logo style={styles.logo} />
          <Text style={styles.heading}>Forgot Password</Text>
        </View>

        {/* Send Otp Screen */}
        {showUpdatePasswordScreen == false && (
          <View>
            <InputBox
              style={styles.input}
              leftIcon={type == 'User' ? svgPaths.phone : svgPaths.emailDark}
              keyboardType={type == 'User' ? 'number-pad' : 'email-address'}
              placeholder={
                type == 'User'
                  ? 'Enter Mobile Number*'
                  : ' Enter Email Address*'
              }
              onChangeText={text => {
                setData(text)
              }}
            />
            {type == 'User' && (
              <View style={{ paddingTop: 5 }}>
                {/* <Text style={styles.passwordInfo}>Please enter country code while entering mobile number</Text> */}
              </View>
            )}

            <Button
              title={'Continue'}
              onPress={() => {
                
                sendOtp()
              }}
              style={styles.loginButton}
            />
          </View>
        )}

        {showUpdatePasswordScreen == true && (
          <View>
            <InputBox
              style={styles.input_custom}
              leftIcon={svgPaths.lock}
              secureTextEntry={!isPasswordVisible}
              rightIcon={isPasswordVisible ? svgPaths.eyeOff : svgPaths.eye}
              onChangeText={text => {
                setPassword(text)
              }}
              onRightIconPress={() => {
                setIsPasswordVisible(!isPasswordVisible)
              }}
              multiline={false}
              placeholder={'Password*'}
              autoCapitalize="none"
            />

            {/* <InputBox
                        style={styles.input}
                        leftIcon={svgPaths.lock}
                        secureTextEntry={!isPasswordVisible}
                        rightIcon={isPasswordVisible ? svgPaths.eyeOff : svgPaths.eye}
                        onRightIconPress={() => {
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                        onChangeText={text => {
                            setPassword(text)
                        }}
                        placeholder={'Password*'}
                        autoCapitalize="none"
                    /> */}

            <View style={{ paddingTop: 5 }}>
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
                setPasswordConfirmation(text)
              }}
              onRightIconPress={() => {
                setCnfirmPasswordVisible(!isConfirmPasswordVisible)
              }}
              multiline={false}
              placeholder={'Confirm password*'}
              autoCapitalize="none"
            />

            {/* <InputBox
                        style={styles.input}
                        leftIcon={svgPaths.lock}
                        secureTextEntry={!isConfirmPasswordVisible}
                        rightIcon={isConfirmPasswordVisible ? svgPaths.eyeOff : svgPaths.eye}
                        placeholder={'Confirm Password*'}
                        onRightIconPress={() => {
                            setCnfirmPasswordVisible(!isConfirmPasswordVisible)
                        }}
                        onChangeText={text => {
                            setPasswordConfirmation(text)
                        }}
                        autoCapitalize="none"
                    /> */}
            <Button
              title={'Continue'}
              onPress={() => {
                forgotConfirmPassword()
              }}
              style={styles.loginButton}
            />
          </View>
        )}
      </KeyboardAwareScrollView>
      {/* </SafeAreaView> */}
    </ImageBackground>
  )
}

export default ForgotPassword
