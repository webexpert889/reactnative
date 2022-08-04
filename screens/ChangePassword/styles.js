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
import { dynamicSize } from '../../helpers/helpers'
const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    paddingHorizontal: dynamicSize(20),
  },
  backIconWrap: {
    marginVertical: dynamicSize(10),
    positionn: 'absolute',
    borderRadius: dynamicSize(12),
    width: dynamicSize(45),
    height: dynamicSize(45),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
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
    marginTop: dynamicSize(20),
    backgroundColor: WHITE,
  },
  loginButton: {
    marginTop: dynamicSize(30),
    marginBottom: scaleSize(30),
  },
  input_custom:{
    marginTop: dynamicSize(20),
    marginBottom:dynamicSize(5),
    backgroundColor: WHITE,
  },  
  passwordInfo:{
    fontSize:dynamicSize(12),
    color:DARK_GRAY_20,
  },
})

export default styles
