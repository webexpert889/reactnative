import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationRef, isReadyRef } from './RootNavigation'

import DashboradStack from './DashboardStack'
import AuthNavigator from './AuthNavigator'
import Toast from 'react-native-toast-message'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserStack from './Userstack'
import { useSelector } from 'react-redux'

/**
 * Screens
 */

const Stack = createStackNavigator()

const AppContainer = ({ navigation }) => {
  const [defaultRoute, setDefaultRoute] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const isLogin = useSelector(state => state.users)
  const { fromApi } = useSelector(state => state.users)
  const processInitialAction = async () => {
    const token = await AsyncStorage.getItem('access_token')
    let user = await AsyncStorage.getItem('user')
   
    setUserToken(token)
    user = JSON.parse(user)
    let userType = user && user?.roles[0]?.name

    if (token == null && fromApi == true) {
      Toast.show({
        type: 'error',
        text1: 'Your account is inactive.',
      })
    }

    // const dashboardRoute = userType == 'Agency' ? 'Dashboard': 'UserStack'
    const dashboardRoute = userType == 'Agency' ? 'DashboradStack' : 'UserStack'
  
    setDefaultRoute(token && token != null ? dashboardRoute : 'AuthNavigator')

    setIsChecked(true)

    setTimeout(() => {
      SplashScreen.hide()
     
    }, 200)
  }

  useEffect(() => {
  
    processInitialAction()
  }, [isLogin])

  useEffect(() => {
    return () => {
      isReadyRef.current = false
    }
  }, [])

  if (!isChecked) return null
 
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true
        }}>
        <Stack.Navigator initialRouteName={defaultRoute}>
          {userToken == null ? (
            <Stack.Screen
              name="AuthNavigator"
              component={AuthNavigator}
              options={({ route }) => ({ headerShown: false })}
            />
          ) : (
            <>
              {defaultRoute == 'DashboradStack' && (
                <Stack.Screen
                  name="DashboradStack"
                  component={DashboradStack}
                  options={({ route }) => ({ headerShown: false })}
                />
              )}
              {defaultRoute == 'UserStack' && (
                <Stack.Screen
                  name="UserStack"
                  component={UserStack}
                  options={({ route }) => ({ headerShown: false })}
                />
              )}
              {defaultRoute == 'AuthNavigator' && (
                <Stack.Screen
                  name="AuthNavigator"
                  component={AuthNavigator}
                  options={({ route }) => ({ headerShown: false })}
                />
              )}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  )
}

export default AppContainer
