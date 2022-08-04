import { StyleSheet } from 'react-native'
import {
  WHITE,
  MANROPE_FONT,
  FONT_WEIGHT_EXTRA_BOLD,
  DARK_CARROT_PINK,
  FONT_SIZE_HEADING,
  scaleSize,
  DARK_GRAY_20
} from '../../theme'

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backIconWrap: {
    paddingVertical: 16,
    paddingHorizontal: 17,
    borderRadius: 12,
  },
  logoSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleSize(40),
  },
  logo: {
    marginBottom: scaleSize(40),
  },
  heading: {
    fontSize: FONT_SIZE_HEADING,
    fontFamily: MANROPE_FONT,
    color: DARK_CARROT_PINK,
    textAlign: 'center',
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    letterSpacing: 0.5,
  },
  input: {
    marginTop: 20,
    backgroundColor: WHITE,
  },
  input_custom: {
    marginTop: 5,
    backgroundColor: WHITE,
  },
  currentPswdInput: {
    marginTop: 20,
    backgroundColor: WHITE,
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 30,
    marginBottom: 40,
  },
  passwordInfo:{
    fontSize:12,
    color:DARK_GRAY_20,
  },
})

export default styles
