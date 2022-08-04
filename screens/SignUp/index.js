import React, { useState, useRef } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
  Linking,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'

import svgPaths from '../../utilities/svgPaths'
import styles from './styles'
import Loader from '../../components/Loader'
import imagePaths from '../../utilities/imagePaths'

import { InputBox, Button, Header, Camera } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/actions/users.actions'
import ImagePicker from 'react-native-image-crop-picker'
import Toast from 'react-native-toast-message'
import { PRIVACY_POLICY, TERMS_CONDITIONS } from '../../../config'
const SignUp = ({ navigation }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.users.isRequesting)
  const imagePickerRef = useRef()
  const [imagePickerRefVisibility, setImagePickerRefVisibility] =
    useState('none')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  // const [isModalopen, setisModalopen] = useState(false)

  const [signupData, setSignupData] = useState({
    company_name: '',
    user_type: 'Agency',
    name: '',
    ein_number: '',
    email: '',
    password: '',
    password_confirmation: '',
    description_and_mission: '',
    terms_and_conditions: true,
    website_link: '',
    logo: '',
  })

  const signupUser = () => {
    if (signupData.website_link == '') {
      delete signupData.website_link
    }
    dispatch(registerUser(signupData))
      .then(res => {
        showAlert()
      })
      .catch(error => {
       
      })
   
  }

  const showAlert = () =>
    Alert.alert(
      'Alert!',
      'You will be able to access the platform once Admin approves your account request',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login', { type: 'Agency' }),
        },
      ],
    )

  const openCamera = () => {
    ImagePicker.openCamera({
      includeBase64: true,
      cropping: true,
      compressImageQuality: 0.8,
    }).then(image => {
      if (!image) return
      setSignupData({
        ...signupData,
        logo: 'data:image/jpeg;base64,' + image.data,
      })
    })
  }

  const chooseImages = () => {
    imagePickerRef.current.focus()
    setImagePickerRefVisibility('flex')
  }

  const chooseImagesFromGallery = async () => {
    ImagePicker.openPicker({
      includeBase64: true,
      cropping: true,
      compressImageQuality: 0.8,
    }).then(image => {
      if (!image) return
      setSignupData({
        ...signupData,
        logo: 'data:image/jpeg;base64,' + image.data,
      })
    })
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffdbdb" />
      <Loader isLoading={isLoading} />
      <View style={styles.wrapper}>
        <Header title={'SIGN UP'} onBackPress={() => navigation.goBack()} />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.form}
          extraScrollHeight={30}
          extraHeight={30}>
          <TouchableOpacity
            activeOpacity={1}
            style={{ alignItems: 'center', marginBottom: 20 }}>
            {signupData.logo ? (
              <Image
                source={{ uri: signupData.logo }}
                borderRadius={50}
                style={{
                  width: 100,
                  height: 100,
                  borderWidth: 0.2,
                  borderColor: '#999899',
                }}></Image>
            ) : (
              <Image
                source={imagePaths.dummyProfile}
                borderRadius={50}
                style={{
                  width: 100,
                  height: 100,
                  borderWidth: 0.2,
                  borderColor: '#999899',
                }}></Image>
            )}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={chooseImages}
              style={styles.camera}>
              {svgPaths.camera}
            </TouchableOpacity>
          </TouchableOpacity>
          <InputBox
            style={styles.input}
            leftIcon={svgPaths.twoPerson}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                company_name: text,
              })
            }}
            placeholder={'Organization name*'}
          />
          <InputBox
            style={styles.input}
            isDescriptionBox={true}
            leftIcon={svgPaths.barGraph}
            multiline={true}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                description_and_mission: text,
              })
            }}
            numberOfLines={6}
            textAlignVertical="top"
            placeholder={'Description & Mission*'}
          />
          <InputBox
            style={styles.input}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                website_link: text,
              })
            }}
            leftIcon={svgPaths.globe}
            placeholder={'Website link (Optional)'}
            autoCapitalize="none"
            keyboardType={'url'}
          />
          <InputBox
            style={styles.input}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                name: text,
              })
            }}
            leftIcon={svgPaths.person}
            placeholder={'Admin name*'}
          />
          <InputBox
            keyboardType="email-address"
            style={styles.input}
            leftIcon={svgPaths.emailLight}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                email: text,
              })
            }}
            placeholder={'Admin email*'}
            autoCapitalize="none"
          />
          <InputBox
            keyboardType="number-pad"
            style={styles.input}
            leftIcon={svgPaths.addressCard}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                ein_number: text,
              })
            }}
            placeholder={'Ein number*'}
          />
          <InputBox
            style={styles.input_custom}
            leftIcon={svgPaths.lock}
            secureTextEntry={!isPasswordVisible}
            rightIcon={isPasswordVisible ? svgPaths.eyeOff : svgPaths.eye}
            onChangeText={text => {
              setSignupData({
                ...signupData,
                password: text,
              })
            }}
            onRightIconPress={() => {
              setIsPasswordVisible(!isPasswordVisible)
            }}
            multiline={false}
            placeholder={'Password*'}
            autoCapitalize="none"
          />
          <View style={{ paddingBottom: 25 }}>
            <Text style={styles.passwordInfo}>
              Password must be 8-12 characters, and include a number, a symbol,
              a lower and a upper case letter
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
              setSignupData({
                ...signupData,
                password_confirmation: text,
              })
            }}
            onRightIconPress={() => {
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }}
            multiline={false}
            placeholder={'Confirm password*'}
            autoCapitalize="none"
          />

          <View style={styles.termsAndConditionsContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.consent}
              onPress={() => {
                setSignupData({
                  ...signupData,
                  terms_and_conditions: !signupData.terms_and_conditions,
                })
              }}>
              <View style={styles.checkBox}>
                {signupData.terms_and_conditions ? (
                  svgPaths.whiteTick
                ) : (
                  <Text></Text>
                )}
              </View>
            </TouchableOpacity>
            <View
              onTouchEnd={() => {
                let url = TERMS_CONDITIONS
                Linking.openURL(url).catch(err =>
                  console.error("Couldn't load page", err),
                )
              }}>
              <Text style={(styles.consentText, { color: 'black', paddingRight:40 })}>
                I've read and accept the &nbsp;
                <Text style={[styles.termsAndConditions]}>
                  Terms & Conditions
                </Text>
                .*
              </Text>
            </View>
          </View>

          <Button
            onPress={signupUser}
            style={{ marginTop: 20, marginBottom: 20 }}
            title={'Create Account'}
          />
          <View style={styles.signUpText}>
            <Text style={{ color: 'black' }}>Have an account? </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('Login', { type: 'Agency' })
              }}>
              <Text style={{ color: '#D93250' }}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.continueWith}>
            <View style={styles.textSeparator} />
            <View>
              <Text style={styles.seperatorTextStyle}>Or Continue With</Text>
            </View>
            <View style={styles.textSeparator} />
          </View>
          <View style={styles.socialConnects}>
            <TouchableOpacity style={styles.btnStyle}>
              {svgPaths.facebook}
              <Text style={styles.fbText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
              {svgPaths.google}
              <Text style={styles.fbText}>Google</Text>
            </TouchableOpacity>
          </View> */}
        </KeyboardAwareScrollView>
        <Picker
          ref={imagePickerRef}
          style={{ display: imagePickerRefVisibility }}
          selectedValue={''}
          onValueChange={(itemValue, itemIndex) => {
           
            if (!itemValue) return
            if (itemValue == 'camera') {
              openCamera()
            } else {
              chooseImagesFromGallery()
            }
            setTimeout(() => {
              setImagePickerRefVisibility('none')
            }, 200)
          }}>
          <Picker.Item label="Choose Option" value="" />
          <Picker.Item label="Camera" value="camera" />
          <Picker.Item label="Gallery" value="gallery" />
        </Picker>
      </View>
    </SafeAreaView>
  )
}

export default SignUp
