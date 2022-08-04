import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import OTPScreen from '../screens/OTPScreen'
import Welcome from '../screens/Welcome'
import ForgotPassword from '../screens/ForgotPassword/index'
import UserSignUp from '../screens/UserScreen/Auth/UserSignUp'

const AuthNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="UserSignUp"
        component={UserSignUp}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={({ route }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
