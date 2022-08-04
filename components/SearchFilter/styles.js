import { StyleSheet } from 'react-native'
import { LIGHT_GRAY_6, MANROPE_FONT, FONT_WEIGHT_LIGHT } from '../../theme'

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seachBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: LIGHT_GRAY_6,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  placeholderInput: {
    flex: 1,
    marginLeft: 5,
    fontFamily: MANROPE_FONT,
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: 14,
    height: 50,
    // paddingRight: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    fontFamily: MANROPE_FONT,
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: 14,
    height: 50,
    // paddingRight: 20,
  },
  filterBtn: {
    backgroundColor: LIGHT_GRAY_6,
    borderRadius: 12,
    marginLeft: 18,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
