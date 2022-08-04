import { StyleSheet } from 'react-native'
import {
  FONT_SIZE_LARGER,
  MANROPE_FONT,
  WHITE,
  FONT_WEIGHT_EXTRA_BOLD,
  scaleSize,
  DARK_CARROT_PINK,
} from '../../theme'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: DARK_CARROT_PINK,
    borderRadius: 12,
  },
  text: {
    fontFamily: MANROPE_FONT,
    color: WHITE,
    paddingVertical: scaleSize(13),
    fontSize: FONT_SIZE_LARGER,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
  },
})

export default styles
