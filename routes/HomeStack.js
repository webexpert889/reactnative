import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Agencydetail from '../screens/Agencydetail'
import AgencyHome from '../screens/AgencyHome'
import Category from '../screens/Categories'
import NeedDetails from '../screens/NeedDetails'
import FillNeeds from '../screens/FillNeeds'
import AllPostedNeeds from '../screens/AllPostedNeeds'
import Notification from '../screens/Notifications'
const HomeNavigator = ({ navigation, route }) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="AgencyHome">
      <Stack.Screen
        name="AgencyHome"
        component={AgencyHome}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Agencydetail"
        component={Agencydetail}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="NeedDetails"
        component={NeedDetails}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ route }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="AllPostedNeeds"
        component={AllPostedNeeds}
        options={({ route }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
