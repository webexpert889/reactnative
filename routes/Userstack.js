import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AgencyHome from '../screens/AgencyHome'
import AddNeed from '../screens/AddNeed'
import ProfileStack from '../routes/ProfileStack'
import svgPaths from '../utilities/svgPaths'
import { PRIMARY, BLACK, MANROPE_FONT, FONT_WEIGHT_SEMI_BOLD } from '../theme'
import UserHomeStack from './UserHomeStack'
import Cart from '../screens/UserScreen/Userdashboard/Cart'

const Tab = createBottomTabNavigator()

const UserStack = () => {

  const renderIcon = (routeName, isFocused) => {
    switch (routeName) {
      case 'HOME':
        return isFocused ? svgPaths.homePrimary : svgPaths.homeGray
      case 'CART':
        return isFocused ? svgPaths.cart : svgPaths.cartGray
      case 'PROFILE':
        return isFocused ? svgPaths.person : svgPaths.personGray
    }
  }

  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {state.routes.map((route, index) => {
          
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              {renderIcon(route.name, isFocused)}
              <Text
                style={{
                  color: isFocused ? PRIMARY : BLACK,
                  fontFamily: MANROPE_FONT,
                  fontWeight: FONT_WEIGHT_SEMI_BOLD,
                  paddingTop: 5,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      options={{ tabBarHideOnKeyboard: true }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HOME"
        options={{
          tabBarLabel: 'HOME',
        }}
        component={UserHomeStack}
      />
      <Tab.Screen
        name="CART"
        options={{
          tabBarLabel: 'CART',
        }}
        component={Cart}
      />
      <Tab.Screen
        name="PROFILE"
        options={{
          tabBarLabel: 'PROFILE',
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  )
}

export default UserStack
