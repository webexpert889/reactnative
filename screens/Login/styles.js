import { StyleSheet } from 'react-native'
import {
  WHITE,
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_LIGHT,
  LIGHT_BLACK01,
  FONT_SIZE_HEADING,
  CARROT_PINK,
  FONT_SIZE_LARGE,
  BABY_PINK_SHADE,
  LIGHT_GRAY_77,
  DARK_GRAY,
  scaleSize,
} from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  imageStyle: {
    flex: 1,
  },
  logoSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logo: {
    marginBottom: 35,
  },
  welcomeNote: {
    fontSize: FONT_SIZE_HEADING,
    color: CARROT_PINK,
    textAlign: 'center',
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    letterSpacing: 0.5,
  },
  loginDetails: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    paddingBottom: 35,
    backgroundColor: WHITE,
  },
  subLoginSection: {
    paddingHorizontal: 20,
  },
  loginWith: {
    color: LIGHT_BLACK01,
    textTransform: 'uppercase',
    fontSize: FONT_SIZE_LARGE,
    fontWeight: FONT_WEIGHT_LIGHT,
    textAlign: 'center',
    paddingTop: 17,
    paddingBottom: 16,
  },
  seprator: {
    borderBottomColor: BABY_PINK_SHADE,
    borderBottomWidth: 1,
  },
  input: {
    marginTop: 20,
  },
  forgotPaswd: {
    marginTop: 10,
  },
  forgotPaswdText: {
    textAlign: 'right',
    color: DARK_GRAY,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  loginButton: {
    marginTop: 30,
  },
  icon: {
    marginTop: 18,
    marginBottom: 22,
    marginLeft: 17,
  },
  eyeIcon: {
    marginTop: 20,
    marginBottom: 25,
    marginRight: 18,
  },
  continueWith: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSeparator: {
    flex: 1,
    height: 1,
    marginTop: 34,
    marginBottom: 36,
    backgroundColor: BABY_PINK_SHADE,
  },
  seperatorTextStyle: {
    paddingHorizontal: 10,
    textAlign: 'center',
    color: LIGHT_GRAY_77,
    marginTop: 25,
    marginBottom: 29,
  },
  socialConnects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: LIGHT_GRAY_77,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: scaleSize(12),
    paddingHorizontal: 30,
  },
  fbText: {
    marginLeft: 13,
    color: 'black',
  },
  signUpText: {
    marginTop: 22,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
})

export default styles
