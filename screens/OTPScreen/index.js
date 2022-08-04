import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import styles from './styles'
import Loader from '../../components/Loader'
import { Button } from '../../components'
import { verifyOTP, sendAgainOTP, sendEmailOtpAgain, forgotPasswordVerifyOtp } from '../../redux/actions/users.actions'

const SignUp = ({ navigation, route }) => {
   
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState('')
  const dispatch = useDispatch()
  const [timer, setimer] = useState(15)

  const {mobile_number} = route?.params?.signupData
  const {email} = route?.params?.signupData
  const {signupData} = route?.params
  const {from} = route?.params
  const {user_type} = route?.params?.signupData

    const checkOtp = async() => {
        setIsLoading(true)
        if(from == 'ForgotPassword'){
            forgtPasswordVerifyOtp()
        }else{
            const response = await dispatch(verifyOTP({
                mobile_number,
                otp,
            })).catch((err)=>{
                
            })
            setIsLoading(false)
            if(!response.isAuthenticated) {
                Toast.show({
                    type: 'error',
                    text1: response.message
                })
            }else {
                Toast.show({
                    type: 'success',
                    text1: 'You have been successfully registered.'
                })
                setTimeout(() => {
                    navigation.navigate('Login',{type: 'User'})             
                }, 200);                                    
            }
        }
    }

    const forgtPasswordVerifyOtp = async() => {
       
        const response = await dispatch(forgotPasswordVerifyOtp({
            otp,
            email,
            user_type,
            mobile_number
        })).catch((err)=>{
            
        })
        setIsLoading(false)
        if(response.message !== undefined)
        {
            Toast.show({
                type: 'success',
                text1: response.message
            })
            setTimeout(() => {                
                navigation.navigate('ForgotPassword', {signupData,otpConfirm:true, type: user_type} )                      
            }, 200);  
        }
          
    }

    const resendOtp = async() =>{
        if(from == 'ForgotPassword' && email !== undefined && email !== null && email !== ''){
            resendEmailOtp()
        }else{
            resendMobileOtp()
        }
    }

    const resendMobileOtp = async() =>{
        setIsLoading(true)
       
        const response = await dispatch(sendAgainOTP({
            mobile_number,
            email
        }))
        if(response.message){
            Toast.show({
                type: 'success',
                text1: response.message
            })
            setIsLoading(false)
        }
    }

    const resendEmailOtp = async() =>{
        let params = signupData
        setIsLoading(true)
        const response = await dispatch(sendEmailOtpAgain(params))
        if(response.message){
            Toast.show({
                type: 'success',
                text1: response.message
            })
            setIsLoading(false)
        }
    }


    useEffect(() => {
        const timerId = setInterval(() => {
            var timer2 = timer
            timer2 -= 1;
            
            if (timer2 < 0) {
                clearInterval(timerId);
            } else {
                setimer(timer2);
            }
        }, 1000);
        return () => {
        clearInterval(timerId);
        };
    }, [timer])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffdbdb" />
      <Loader isLoading={isLoading} />
      <Text style={[styles.headerTitle, {paddingTop: 15}]}>Enter 4-digit Verification code</Text>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Code send to {from == "ForgotPassword" && email !== undefined && email !== null && email !== '' ? email.toString().substring(0, 6) : mobile_number.toString().substring(0, 6)}****</Text>
        </View>
        <OTPInputView
            style={styles.otpInput}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.codeInputStyle}
            codeInputHighlightStyle={styles.codeInputHighlightedStyle}
            keyboardType='phone-pad'
            onCodeFilled={code => {
                setOtp(code)
            }}
        />
        
            {timer <= 0 ?
            <TouchableOpacity style={styles.resend} onPress={()=>{resendOtp()}}>
                <Text>Resend code</Text>
            </TouchableOpacity>            
            :
            <Pressable style={styles.resend}>
                <Text>Resend code in 00:{timer.toString().padStart(2, '0')}</Text>
            </Pressable>
            }
                  
        <Button
            onPress={() => { checkOtp()}}
            style={styles.submit}
            title={'Submit'}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUp
