import { StyleSheet } from 'react-native'
import {
  PRIMARY,
  MANROPE_FONT,
  FONT_WEIGHT_SEMI_BOLD,
  FONT_WEIGHT_LIGHT,
  LIGHT_GRAY_77,
  LIGHT_GRAY_6,
  PRIMARY_LIGHT,
  DARK_CARROT_PINK,
  BLACK,
} from '../../theme'

const style = StyleSheet.create({
  productCard: {
    borderWidth: 1,
    borderColor: LIGHT_GRAY_6,
    borderRadius: 12,
    overflow: 'hidden',
    width: '48%',
    height: 370,
    //  backgroundColor:'yellow'
  },
  productImg: {
    aspectRatio: 4 / 4,
    height: '100%',
  },
  productInfo: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    // backgroundColor:'red',
    height: '100%',
    position: 'relative',
  },
  chipsContainer: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  chipText: {
    backgroundColor: LIGHT_GRAY_6,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 8,
    fontSize: 10,
    maxHeight: 34,
    minHeight: 22,
  },
  productTitle: {
    fontFamily: MANROPE_FONT,
    fontSize: 15,
    fontWeight: FONT_WEIGHT_SEMI_BOLD,
    marginTop: 5,
    maxHeight: 40,
    minHeight: 40,
    color: BLACK,
  },
  progressBarWrap: {
    backgroundColor: PRIMARY_LIGHT,
    height: 6,
    borderRadius: 12,
    marginTop: 14,
  },
  progressIndicator: {
    width: '60%',
    backgroundColor: PRIMARY,
    height: 6,
    borderRadius: 12,
  },
  fulfilledText: {
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: 12,
    color: LIGHT_GRAY_77,
    marginTop: 4,
  },
  button: {
    marginTop: 12,
  },
  btnText: {
    paddingVertical: 12,
    fontFamily: MANROPE_FONT,
    fontWeight: FONT_WEIGHT_LIGHT,
  },
  by: {
    color: DARK_CARROT_PINK,
    fontSize: 12,
    fontFamily: MANROPE_FONT,
    marginTop: 7,
    fontWeight: '500',
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },
})

export default style
