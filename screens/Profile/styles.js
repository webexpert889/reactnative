import { StyleSheet } from 'react-native'
import { WHITE, MANROPE_FONT, PRIMARY_LIGHT, FONT_SIZE_LARGE, BLACK } from '../../theme'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontFamily: MANROPE_FONT,
    color:BLACK
  },
  pageContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  btnCon: {
    height: 45,
    width: '70%',
    elevation: 1,
    backgroundColor: '#00457C',
    borderRadius: 3,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 18,
  },
  webViewCon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wbHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    zIndex: 25,
    elevation: 2,
  },
})

export default style
