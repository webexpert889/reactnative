import React, { useState, useRef, useEffect, useCallback } from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native'
import { MANROPE_FONT, BABY_PINK, PRIMARY, BLACK } from '../../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
// import { launchImageLibrary } from 'react-native-image-picker'

import svgPaths from '../../utilities/svgPaths'
import styles from './style'
import Loader from '../../components/Loader'

import { InputBox, Button, Header } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { Picker } from '@react-native-picker/picker'
import {
  addNeed,
  getCategories,
  getNeeds,
} from '../../redux/actions/needs.actions'
import ImagePicker from 'react-native-image-crop-picker'
import ImageView from 'react-native-image-viewing'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/native'

const Notification = ({ navigation }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.needs.isRequesting)
  const [notifications, setNotifications] = useState([])
  const [isRefreshing, setisRefreshing] = useState(false)

  const getInitialData = async () => {
    setisRefreshing(true)
    let user = await AsyncStorage.getItem('user')
    let notifications = await AsyncStorage.getItem('notifications')
    notifications = JSON.parse(notifications)
    
    setNotifications(notifications)

    setisRefreshing(false)
  }

  useEffect(() => {
    getInitialData()
    return () => {}
  }, [])

  const goBack = async () => {
    navigation.goBack()
  }

  const Item = ({ message }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{message}</Text>
    </View>
  )

  const renderItem = ({ item }) => <Item message={item.message} />
  const swipeRefresh = async () => {
    
    getInitialData()
  }
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Loader isLoading={isLoading} />
      <View style={styles.wrapper}>
        <Header
          title={'Notifications'}
          onBackPress={() => goBack()}
          // rightIcon={svgPaths.notification}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.form}
          extraScrollHeight={30}
          extraHeight={30}>
          {/* <Text style={styles.pageTitle}></Text> */}
          <FlatList
            style={{ marginBottom: 20 }}
            numColumns={2}
            data={notifications}
            onRefresh={swipeRefresh}
            refreshing={isRefreshing}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={renderItem}
            ListEmptyComponent={() => (
              <Text style={{ textAlign: 'center', fontSize: 20 }}>
                No Items Found.
              </Text>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
            keyExtractor={(_, index) => index.toString()}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Notification
