import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    getFCMToken()
}

const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log('old FcmToken:', fcmToken)
    if(!fcmToken){
        try {
            fcmToken = await messaging().getToken();
            if(fcmToken){
                console.log("fcmTokenfcmToken1", fcmToken)
                await AsyncStorage.setItem('fcmToken', fcmToken)
            }
        } catch (error) {
            
        }
    }
}
