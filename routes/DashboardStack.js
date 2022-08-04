import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddNeedStack from './needStack'
import AgencyHome from '../screens/AgencyHome'
import AddNeed from '../screens/AddNeed'
import Subscription from '../screens/Subscription'
import ProfileStack from '../routes/ProfileStack'
import svgPaths from '../utilities/svgPaths'
import { PRIMARY, BLACK, MANROPE_FONT, FONT_WEIGHT_SEMI_BOLD } from '../theme'
import HomeNavigator from './HomeStack'
const Tab = createBottomTabNavigator()

const DashboardStack = () => {
  const renderIcon = (routeName, isFocused) => {
    switch (routeName) {
      case 'HOME':
        return isFocused ? svgPaths.homePrimary : svgPaths.homeGray
      case 'ADD_NEED':
        return svgPaths.tabBarPlus
      case 'PROFILE':
        return isFocused ? svgPaths.person : svgPaths.personGray
    }
  }

  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
                paddingBottom: route.name == 'ADD_NEED' ? 55 : 10,
                flex: 1,
                alignItems: 'center',
              }}
            >
              {renderIcon(route.name, isFocused)}
              <Text
                style={{
                  color: isFocused ? PRIMARY : BLACK,
                  fontFamily: MANROPE_FONT,
                  fontWeight: FONT_WEIGHT_SEMI_BOLD,
                  paddingTop: 5,
                }}
              >
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
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="HOME"
        options={{
          tabBarLabel: 'HOME',
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="ADD_NEED"
        options={{
          tabBarLabel: 'ADD A NEED ',
        }}
        component={AddNeedStack}
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

export const BookStack = () => (
  <Stack.Navigator
      initialRouteName="BookLoads"
      screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
      }}
  >
      <Stack.Screen name="BookLoads" component={BookLoads} />
  </Stack.Navigator>
);
export default DashboardStack
