//import liraries
import React, { useEffect, useState } from 'react'
import { View, Text, Modal, ActivityIndicator,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, ListOption } from '../../components'
import svgPaths from '../../utilities/svgPaths'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { beginNormalLogoutUser } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
// create a component
const Proile = ({ navigation }) => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userType, setuserType] = useState('')
  const [isRefreshing, setisRefreshing] = useState(false)
  const isLoading = useState(false)
  const getInitialData = async() => {
    let user = await AsyncStorage.getItem('user')
    user = JSON.parse(user)
    let userType = await AsyncStorage.getItem('user_type')
    setuserType(userType)
    setUserName(user.name)
  }
  
  useEffect( () => {
    getInitialData();
   
  
  }, [])

 
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header
          title={''}
          onBackPress={() => navigation.goBack()}
          leftIcon={svgPaths.brandLogo}
          rightIcon={svgPaths.notification}
          navigation={navigation}
        />
        <View style={styles.pageContainer}>
          <Text style={styles.pageTitle}>Hi, {userName}</Text>
          <ListOption
            onPress={() => navigation.navigate('MyProfile')}
            title={'My Profile'}
            leftIcon={svgPaths.personPrimaryDark}
            rightIcon={svgPaths.caretRight}
          />
          {userType == 'Agency' ? 
            <ListOption
              onPress={() => navigation.navigate('AllPostedNeeds',{type:'profile'})}
              title={'All Posted Needs'}
              leftIcon={svgPaths.personPrimaryDark}
              rightIcon={svgPaths.caretRight}
            />
          :
            <ListOption
              onPress={() => navigation.navigate('MyDonation')}
              title={'My Donations'}
              leftIcon={svgPaths.personPrimaryDark}
              rightIcon={svgPaths.caretRight}
            />
          }
           
          <ListOption
            onPress={() => navigation.navigate('ChangePassword')}
            title={'Change Password'}
            leftIcon={svgPaths.lockPrimaryDark}
            rightIcon={svgPaths.caretRight}
          />
          {userType == 'Agency' && 
            <ListOption
              onPress={() => navigation.navigate('Subscription', {back:true})}
              title={'Subscription'}
              leftIcon={svgPaths.dollarDark}
              rightIcon={svgPaths.caretRight}
            />
          }

       
          
          {/* <ListOption
            onPress={() => navigation.navigate('EditProfilePage')}
            title={'Edit Profile'}
            leftIcon={svgPaths.lockPrimaryDark}
            rightIcon={svgPaths.caretRight}
          /> */}
          <ListOption
            onPress={() => {
              AsyncStorage.clear()
              dispatch(beginNormalLogoutUser())
              // navigation.reset({
              //   index: 0,
              //   routes: [{ name: 'AuthNavigator' }],
              // })
            }}
            title={'Logout'}
            leftIcon={svgPaths.logout}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

//make this component available to the app
export default Proile
