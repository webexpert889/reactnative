import { StyleSheet } from 'react-native'
import {
  WHITE,
  PRIMARY_LIGHT,
  MANROPE_FONT,
  FONT_WEIGHT_LIGHT,
  FONT_SIZE_LARGE,
  BABY_PINK_LIGHT,
  BLACK
} from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_LIGHT,
  },
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: WHITE,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    borderBottomColor: PRIMARY_LIGHT,
    borderBottomWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: MANROPE_FONT,
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: FONT_SIZE_LARGE,
    letterSpacing: 0.5,
    color: '#333333',
    textAlign: 'center'
  },
  otpInput: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
  codeInputStyle: {
    borderRadius: 10,
    width: 64,
    height: 64,
    backgroundColor: BABY_PINK_LIGHT,
    color: BLACK,
    fontSize: 30,
    fontWeight: '300'
  },
  codeInputHighlightedStyle: {
    
  },
  resend: {
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 20,
    alignSelf: 'flex-end'
  },
  submit: {
    marginHorizontal: 20
  }
})

export default styles
