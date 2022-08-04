import { StyleSheet } from 'react-native'
import { PRIMARY_LIGHT, FONT_SIZE_LARGE, MANROPE_FONT } from '../../theme'
// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FFEBEF',
    borderRadius: 12,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    height: 37,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: PRIMARY_LIGHT,
  },
  optionText: {
    color: '#202020',
    marginLeft: 15,
    fontSize: FONT_SIZE_LARGE,
    fontFamily: MANROPE_FONT,
    flex: 0.95,
  },
})

export default styles
