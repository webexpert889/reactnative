import React from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import imagePaths from '../../utilities/imagePaths'
import WelcomeLogo from '../../assets/svg/welcome-logo.svg'
import { Button } from '../../components'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ec6e85" />
      <ImageBackground
        source={imagePaths.backgroundImage}
        resizeMode="cover"
        style={styles.imageStyle}>
        <ScrollView style={styles.container}>
          <View style={styles.logoSection}>
            <WelcomeLogo style={styles.logo} />
            <Text style={styles.welcomeNote}>WELCOME TO</Text>
            <Text style={styles.welcomeNote}>EVERYDAY ANGEL!</Text>
          </View>
          <Text style={styles.subNote}>
            Join Now to Start Donating to Neighbors In
          </Text>
          <Text style={styles.subNote}>Need!</Text>
          <Button
            title={'Login as a User'}
            onPress={() => navigation.navigate('Login', { type: 'User' })}
            style={styles.loginAsUser}
          />
          <Button
            title={'Login as an Agency'}
            onPress={() => navigation.navigate('Login', { type: 'Agency' })}
            style={styles.loginAsAgency}
            textStyle={styles.loginAsAgencyButtonText}
          />
          {/* <View style={styles.signUpText}>
              <Text style={{fontWeight: 'bold'}}>Don’t have an account? </Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  navigation.navigate('SignUp')
                }}>
                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>Sign up</Text>
              </TouchableOpacity>
            </View> */}
        </ScrollView>
      </ImageBackground>
    </>
  )
}

export default Welcome
