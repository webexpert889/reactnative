import React, { useEffect, useState, useRef } from 'react'
import { View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'

import svgPaths from '../../utilities/svgPaths'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/actions/users.actions'
import Toast from 'react-native-toast-message'
import { InputBox, Button, Header } from '../../components'
import Loader from '../../components/Loader'
import imagePaths from '../../utilities/imagePaths'
import ImagePicker from 'react-native-image-crop-picker'
import {
  LIGHT_GRAY_10
} from '../../theme'

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch()
//   const isLoading = useSelector(state => state.users.isRequesting)
  const [isLoading, setIsLoading] = useState(false)
  const [imagePickerRefVisibility, setImagePickerRefVisibility] = useState('none')
  const imagePickerRef = useRef()
  const [signupData, setSignupData] = useState({
    company_name: '',
    user_type: 'Agency',
    name: '',
    ein_number: '',
    email: '',
    description_and_mission: '',
    website_link: '',
  })
  const [userName, setUserName] = useState('')
  const [userType, setuserType] = useState('')
  const [isRefreshing, setisRefreshing] = useState(false)

  const getInitialData = async() =>{
    let user = await AsyncStorage.getItem('user')
    let userType = await AsyncStorage.getItem('user_type')
    setuserType(userType)
    user = JSON.parse(user)
   
    setSignupData({
      ...signupData,
      company_name: user.company_name,
      name: user.name,
      ein_number: user.ein_number,
      email: user.email,
      description_and_mission: user.description_and_mission ? user.description_and_mission : '',
      website_link: user.website_link ? user.website_link : '',
      logo: user.logo,
      last_name: user.last_name,
      first_name: user.name,
      user_name: user.user_name,
      mobile_number: user.mobile_number,
      user_type: userType
    })
  }

  useEffect(() => {
    getInitialData()
  }, [])

  const updateProfile = () => {
    setIsLoading(true)
    let data = {...signupData}
    if(data.logo.startsWith('http')) delete data.logo

    if(data.website_link == '')
    {
      delete data.website_link
    }
   

    dispatch(updateUser(data)).then(async res => {
      Toast.show({
        type: 'success',
        text1: 'Your profile has been updated successfully.',
        text1NumberOfLines: 2,
      })
      const modifiedUserData = {
        ...res.result.details,
        logo: res.result.base_path + '/' + res.result.details.logo
      }
      let user = await AsyncStorage.getItem('user')
      user = JSON.parse(user)
      user = { ...user, ...modifiedUserData }
    
      AsyncStorage.setItem('user', JSON.stringify(user))
      setIsLoading(false)
    //   navigation.goBack()
    }).catch(async(err) => {
        setIsLoading(false)
       
    })
  }

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
        <Header title={'Profile'} onBackPress={() => navigation.goBack()} />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.form}
          extraScrollHeight={30}
          extraHeight={30}>
            {userType == 'Agency' && 
            <>
            <TouchableOpacity 
                activeOpacity={1}
                style={{
                alignSelf: 'center',
                borderRadius: 50,
                marginBottom: 20,
                width: 100,
                height: 100,
                borderWidth: 0.3,
                borderColor: '#999899'
                }}>
                {signupData.logo ? (
                <Image
                    source={{ uri: signupData.logo }}
                    borderRadius={50}
                    style={{ width: 100, height: 100}}></Image>
                ) : (
                <Image
                    source={imagePaths.dummyProfile}
                    borderRadius={50}
                    style={{ width: 100, height: 100}}></Image>
                )}
                <TouchableOpacity activeOpacity={0.7} onPress={chooseImages} style={styles.camera}>
                {svgPaths.camera}
                </TouchableOpacity>
            </TouchableOpacity>
            
                <InputBox
                    style={styles.input}
                    leftIcon={svgPaths.twoPerson}
                    value={signupData.company_name}
                    onChangeText={text => {
                        setSignupData({
                        ...signupData,
                        company_name: text,
                        })
                    }}
                    placeholder={'Organization name'}
                />
                <InputBox
                    style={styles.input}
                    isDescriptionBox={true}
                    leftIcon={svgPaths.barGraph}
                    value={signupData.description_and_mission}
                    multiline={true}
                    onChangeText={text => {
                        setSignupData({
                        ...signupData,
                        description_and_mission: text,
                        })
                    }}
                    numberOfLines={6}
                    textAlignVertical="top"
                    placeholder={'Description & Mission'}
                />
                <InputBox
                    style={styles.input}
                    value={signupData.website_link}
                    onChangeText={text => {
                        setSignupData({
                        ...signupData,
                        website_link: text,
                        })
                    }}
                    leftIcon={svgPaths.globe}
                    placeholder={'Website link'}
                    autoCapitalize="none"
                />
                <InputBox
                    style={styles.input}
                    value={signupData.name}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        name: text,
                    })
                    }}
                    leftIcon={svgPaths.person}
                    placeholder={'Admin name'}
                />
                <InputBox
                    LIGHT_GRAY_10
                    style={[styles.input, {backgroundColor: LIGHT_GRAY_10}]}
                    value={signupData.email}
                    leftIcon={svgPaths.emailLight}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        email: text,
                    })
                    }}
                    placeholder={'Admin email'}
                    editable={false}
                />

                <InputBox
                    style={[styles.input, {backgroundColor: LIGHT_GRAY_10}]}
                    value={signupData.ein_number}
                    leftIcon={svgPaths.addressCard}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        ein_number: text,
                    })
                    }}
                    placeholder={'Ein number'}
                    editable={false}
                />
            </>
                
            }

            {userType == 'User' &&
            <>
                <InputBox
                    style={[styles.input,{marginTop:20}]}
                    value={signupData.first_name}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        first_name: text,
                    })
                    }}
                    leftIcon={svgPaths.person}
                    placeholder={'First name'}
                />

                <InputBox
                    style={styles.input}
                    value={signupData.last_name}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        last_name: text,
                    })
                    }}
                    leftIcon={svgPaths.twoPerson}
                    placeholder={'Last name'}
                />

                <InputBox
                    style={[styles.input,{backgroundColor: LIGHT_GRAY_10}]}
                    value={signupData.user_name}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        name: text,
                    })
                    }}
                    leftIcon={svgPaths.threePerson}
                    placeholder={'Username'}
                    editable={false}
                />

                <InputBox
                    LIGHT_GRAY_10
                    style={[styles.input, {backgroundColor: LIGHT_GRAY_10}]}
                    value={signupData.email}
                    leftIcon={svgPaths.emailLight}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        email: text,
                    })
                    }}
                    placeholder={'Email'}
                    editable={false}
                />

                <InputBox
                    keyboardType="number-pad"
                    style={[styles.input_custom, {backgroundColor: LIGHT_GRAY_10,marginBottom:10}]}
                    leftIcon={svgPaths.phone}
                    value={signupData.mobile_number}
                    onChangeText={text => {
                    setSignupData({
                        ...signupData,
                        mobile_number: text,
                    })
                    }}
                    placeholder={'Mobile number*'}
                    editable={false}
                />

            </>
            }
          
          
          <Button
            onPress={updateProfile}
            style={{ marginTop: 15, marginBottom: 55 }}
            title={'Update Profile'}
          />
        </KeyboardAwareScrollView>
        <Picker
            ref={imagePickerRef}
            style={{ display: imagePickerRefVisibility }}
            selectedValue={''}
            onValueChange={(itemValue, itemIndex) => {
              if(!itemValue) return
              
              if (itemValue == 'camera') {
                openCamera()
              } else {
                chooseImagesFromGallery()
              }
              setTimeout(() => {
                setImagePickerRefVisibility('none')
              }, 200);
            }}>
            <Picker.Item label="Choose Option" value="" />
            <Picker.Item label="Camera" value="camera" />
            <Picker.Item label="Gallery" value="gallery" />
          </Picker>
      </View>
    </SafeAreaView>
  )
}

export default MyProfile
