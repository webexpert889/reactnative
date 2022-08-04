import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile'
import Login from '../screens/Login'
import ChangePassword from '../screens/ChangePassword'
import MyProfile from '../screens/EditProfile'
import Subscription from '../screens/Subscription'
import MyDonation from '../screens/MyDonations'
import AllPostedNeeds from '../screens/AllPostedNeeds'
import Notification from '../screens/Notifications'
const ProfileStack = ({ navigation, route }) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="MyDonation"
        component={MyDonation}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="AllPostedNeeds"
        component={AllPostedNeeds}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ route }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack
