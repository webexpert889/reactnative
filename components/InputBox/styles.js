import { StyleSheet } from 'react-native'
import {
  MANROPE_FONT,
  BABY_PINK,
  BABY_PINK_SHADE,
  FONT_WEIGHT_LIGHT,
} from '../../theme'

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.7,
    height: 50,
    backgroundColor: BABY_PINK,
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: MANROPE_FONT,
    fontWeight: FONT_WEIGHT_LIGHT,
    letterSpacing: 0.5,
  },
  leftIcon: {
    width: 50,
    height: 50,
    borderRightColor: BABY_PINK_SHADE,
    borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    width: 50,
    height: 50,
    borderLeftColor: BABY_PINK_SHADE,
    borderLeftWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    width: 70,
    height: 50,
    backgroundColor: BABY_PINK_SHADE,
    borderLeftColor: BABY_PINK_SHADE,
    borderLeftWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  descriptionBox: {
    height: 120,
    justifyContent: 'flex-start',
  },
})

export default styles
