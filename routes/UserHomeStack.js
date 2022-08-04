import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Agencydetail from '../screens/Agencydetail'
import AgencyHome from '../screens/AgencyHome'
import Category from '../screens/Categories'
import NeedDetails from '../screens/NeedDetails'
import FillNeeds from '../screens/FillNeeds'
import UserHome from '../screens/UserScreen/Userdashboard/UserHome'
import MyDonation from '../screens/MyDonations'
import AllNeeds from '../screens/AllNeeds/AllNeeds'
import Notification from '../screens/Notifications'
const UserHomeNavigator = ({ navigation, route }) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="UserHome">
      <Stack.Screen
        name="UserHome"
        component={UserHome}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Agencydetail"
        component={Agencydetail}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="CategoryList"
        component={Category}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="UserNeedDetails"
        component={NeedDetails}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="AllNeeds"
        component={AllNeeds}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="FillNeeds"
        component={FillNeeds}
        options={({ route }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  )
}

export default UserHomeNavigator
