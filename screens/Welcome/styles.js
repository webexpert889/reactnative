import { StyleSheet } from 'react-native'
import {
  WHITE,
  FONT_WEIGHT_EXTRA_BOLD,
  DARK_CARROT_PINK,
  FONT_SIZE_HEADING,
  scaleSize,
} from '../../theme'

const styles = StyleSheet.create({
  imageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  logoSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleSize(40),
  },
  logo: {
    marginBottom: scaleSize(50),
  },
  welcomeNote: {
    fontSize: FONT_SIZE_HEADING,
    color: WHITE,
    textAlign: 'center',
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    letterSpacing: 0.5,
  },
  subNote: {
    textAlign: 'center',
    color: WHITE,
  },
  loginAsUser: {
    marginTop: scaleSize(49),
  },
  loginAsAgency: {
    marginTop: scaleSize(20),
    backgroundColor: WHITE,
  },
  loginAsAgencyButtonText: {
    color: DARK_CARROT_PINK,
  },
  signUpText: {
    marginTop: 22,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
})

export default styles
