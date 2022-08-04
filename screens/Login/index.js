//import liraries
import React, { useEffect, useState } from 'react'
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, InputBox } from '../../components'
import imagePaths from '../../utilities/imagePaths'
import svgPaths from '../../utilities/svgPaths'
import Logo from '../../assets/svg/logo.svg'
import styles from './styles'
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, userSocialLogin } from '../../redux/actions/users.actions'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'

// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/app'

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
//   webClientId:
//     '272864540168-5nk5a81t02ns3e7ikfhbeui26u5us0ks.apps.googleusercontent.com',
//   iosClientId:
//     '269411748599-f1r56h9vf0kpavclmjofrn9a9o85dfdo.apps.googleusercontent.com',
// })
GoogleSignin.configure({
  webClientId:
    '94411644373-e8789mcvfs30fgh6hlmc7labtd7f7ae2.apps.googleusercontent.com',
})
import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
} from 'react-native-fbsdk-next'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { appleAuth } from '@invertase/react-native-apple-authentication'

// create a component
const Login = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.users.isRequesting)
  const { type: userType } = route?.params
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    device_token: '',
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const FIELDS = 'email,name,picture'
  const BASE_URL = `https://graph.facebook.com/me?fields=${FIELDS}`

  const loginUserAgency = () => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: userType == 'User'? 'UserStack':  'DashboradStack' }],
    // })

    if (!loginData.email) {
      Toast.show({
        type: 'error',
        text1: 'Please enter email address.',
      })
      return
    }

    if (!loginData.password) {
      Toast.show({
        type: 'error',
        text1: 'Please enter password.',
      })
      return
    }

    dispatch(loginUser(loginData)).then(res => {
     
      let roleFromApi = res?.result?.details?.roles[0]?.name
      
      if (roleFromApi == userType) {
        AsyncStorage.setItem('user_type', roleFromApi)
        AsyncStorage.setItem('access_token', res.result.details.access_token)

        if (
          roleFromApi == 'User' &&
          res?.result?.details?.otp_verified == 'pending'
        ) {
          Toast.show({
            type: 'success',
            text1: res.message,
          })
          navigation.navigate('OTPScreen', { signupData: res?.result?.details })
          return
        }

        const user = {
          ...res.result.details,
          logo: res.result.base_path + '/' + res.result.details.logo,
          subscription: { ...res.result.subscription },
        }
        
        AsyncStorage.setItem('user', JSON.stringify(user))
        Toast.show({
          type: 'success',
          text1: 'You have been logged in successfully.',
        })
       
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: userType == 'User' ? 'UserStack' : 'DashboradStack' }],
        // })
      } else {
        Toast.show({
          type: 'error',
          text1: 'Account type not found.',
        })
      }
    })
  }
  const signInGoogle = async () => {
    try {
     
      const { idToken, user } = await GoogleSignin.signIn()

    

      dispatch(
        userSocialLogin({
          social_type: 'google',
          social_id: user.id,
          name: user.name,
          email: user.email,
        }),
      ).then(res => {
        
        AsyncStorage.setItem('access_token', res.result.details.access_token)
        AsyncStorage.setItem('user_type', 'User')

        const user = {
          ...res.result.details,
          logo: res?.result?.base_path + '/' + res?.result?.details?.logo,
        }
        AsyncStorage.setItem('user', JSON.stringify(user))
        Toast.show({
          type: 'success',
          text1: 'You have been logged in successfully.',
        })
        // navigation.reset({
        //   index: 0,
        //   routes: [
        //     { name: userType == 'User' ? 'UserStack' : 'DashboradStack' },
        //   ],
        // })
      })

      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
       
        // some other error happened
      }
    }
  }

  const signInFacebook = async () => {
    

    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ])


    if (result.isCancelled) {
      throw 'User cancelled the login process'
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken()
    

    if (!data) {
      throw 'Something went wrong obtaining access token'
    }

    fetch(`${BASE_URL}&access_token=${data.accessToken}`)
      .then(data => data.json())
      .then(res => {
      
        dispatch(
          userSocialLogin({
            social_type: 'facebook',
            social_id: res.id,
            name: res.name,
            email: res.email,
          }),
        ).then(res => {
          
          AsyncStorage.setItem('access_token', res.result.details.access_token)
          AsyncStorage.setItem('user_type', 'User')

          const user = {
            ...res.result.details,
            logo: res?.result?.base_path + '/' + res?.result?.details?.logo,
          }
          AsyncStorage.setItem('user', JSON.stringify(user))
          Toast.show({
            type: 'success',
            text1: 'You have been logged in successfully.',
          })
        })
      })
      .catch(err => console.log('err', err))

    // Create a Firebase credential with the AccessToken
    // const facebookCredential = auth.FacebookAuthProvider.credential(
    //   data.accessToken,
    // )

    // Sign-in the user with the credential
    // return auth().signInWithCredential(facebookCredential)
  }

  const signInApple = async () => {
    return appleAuth
      .performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })
      .then(appleAuthRequestResponse => {
      
      })
  }

  const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    setLoginData({
      ...loginData,
      device_token: fcmToken,
    })
  }
  useEffect(() => {
    getFCMToken()
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffdada" />
      <Loader isLoading={isLoading} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        style={{ backgroundColor: '#fff' }}
        extraHeight={30}
        extraScrollHeight={30}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <ImageBackground
          source={imagePaths.loginBackgroundImage}
          style={styles.imageStyle}>
          <View style={styles.logoSection}>
            <Logo style={styles.logo} />
            <Text style={styles.welcomeNote}>WELCOME TO</Text>
            <Text style={styles.welcomeNote}>EVERYDAY ANGEL!</Text>
          </View>

          <View style={styles.loginDetails}>
            <View style={styles.seprator}>
              <Text style={styles.loginWith}>Log in with email</Text>
            </View>
            <View style={styles.subLoginSection}>
              <View>
                <InputBox
                  style={styles.input}
                  leftIcon={svgPaths.emailLight}
                  placeholder={'Email*'}
                  onChangeText={text => {
                    
                    setLoginData({
                      ...loginData,
                      email: text,
                    })
                  }}
                  keyboardType={'email-address'}
                  autoCapitalize="none"
                />
                <InputBox
                  style={styles.input}
                  leftIcon={svgPaths.lock}
                  secureTextEntry={!isPasswordVisible}
                  rightIcon={isPasswordVisible ? svgPaths.eyeOff : svgPaths.eye}
                  onChangeText={text => {
                    setLoginData({
                      ...loginData,
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
              </View>
              <TouchableOpacity
                style={styles.forgotPaswd}
                onPress={() => {
                  navigation.navigate('ForgotPassword', { type: userType })
                }}>
                <Text style={styles.forgotPaswdText}>FORGOT PASSWORD?</Text>
              </TouchableOpacity>
              <Button
                title={
                  userType == 'Agency'
                    ? `Login as an ${userType}`
                    : `Login as a ${userType}`
                }
                onPress={loginUserAgency}
                style={styles.loginButton}
              />
              {userType == 'User' && (
                <>
                  <View style={styles.continueWith}>
                    <View style={styles.textSeparator} />
                    <View>
                      <Text style={styles.seperatorTextStyle}>
                        OR CONTINUE WITH
                      </Text>
                    </View>
                    <View style={styles.textSeparator} />
                  </View>
                  <View style={styles.socialConnects}>
                    <TouchableOpacity
                      style={styles.btnStyle}
                      onPress={signInFacebook}>
                      {svgPaths.facebook}
                      <Text style={styles.fbText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btnStyle}
                      onPress={signInGoogle}>
                      {svgPaths.google}
                      <Text style={styles.fbText}>Google</Text>
                    </TouchableOpacity>
                  </View>
                  {Platform.OS === 'ios' ? (
                    <TouchableOpacity
                      style={[
                        styles.btnStyle,
                        {
                          width: '48%',
                          alignSelf: 'center',
                          marginTop: 20,
                          paddingVertical: 10,
                        },
                      ]}
                      onPress={signInApple}>
                      <Ionicons name="logo-apple" size={25} />
                      <Text style={styles.fbText}>Apple</Text>
                    </TouchableOpacity>
                  ) : null}
                </>
              )}
              <View style={styles.signUpText}>
                <Text style={{ color: 'black' }}>Don’t have an account? </Text>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate(
                      userType == 'User' ? 'UserSignUp' : 'SignUp',
                    )
                  }}>
                  <Text style={{ color: '#D93250' }}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </>
  )
}

//make this component available to the app
export default Login
