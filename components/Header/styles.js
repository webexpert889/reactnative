import { StyleSheet } from 'react-native'
import {
  MANROPE_FONT,
  PRIMARY_LIGHT,
  FONT_WEIGHT_LIGHT,
  FONT_SIZE_LARGE,
} from '../../theme'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: PRIMARY_LIGHT,
    borderBottomWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backIconWrap: {
    paddingVertical: 16,
    paddingHorizontal: 17,
    borderRadius: 12,
    backgroundColor: PRIMARY_LIGHT,
  },
  headerTitle: {
    fontFamily: MANROPE_FONT,
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: FONT_SIZE_LARGE,
    letterSpacing: 0.5,
    color: '#333333',
  },
})

export default styles
