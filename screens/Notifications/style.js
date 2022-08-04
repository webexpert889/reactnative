import { StyleSheet } from 'react-native'
import {
  WHITE,
  MANROPE_FONT,
  LIGHT_GRAY_6,
  DARK_GRAY,
  LIGHT_GRAY_10,
  BLACK,
  BABY_PINK,
  FONT_WEIGHT_LIGHT,
  BABY_PINK_SHADE,
} from '../../theme'

const styles = StyleSheet.create({
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
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  pageTitle: {
    marginBottom: 20,
    fontSize: 22,
    fontFamily: MANROPE_FONT,
    color: DARK_GRAY,
  },
  imageContainer: {
    width: '49%',
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: LIGHT_GRAY_6,
  },
  deleteImage: {
    height: 40,
    width: 40,
    position: 'absolute',
    backgroundColor: LIGHT_GRAY_10,
    zIndex: 999,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
  },
  selectedStyle: {
    backgroundColor: LIGHT_GRAY_10,
    borderWidth: 0,
    borderRadius: 6,
  },

  placeholderTextStyle: {
    // color: BLACK,
    fontSize: 14,
    fontFamily: MANROPE_FONT,
    borderRightWidth: 1,
    paddingRight: 50,
  },
  multiField: {
    borderRadius: 10,
    opacity: 0.7,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: BABY_PINK,
    marginBottom: 20,
  },
  multiIcons: {
    justifyContent: 'center',
    borderRightWidth: 2,
    width: '13%',
    borderColor: BABY_PINK_SHADE,
  },
  dropIcon: {
    justifyContent: 'center',
    borderLeftWidth: 2,
    width: '13%',
    borderColor: BABY_PINK_SHADE,
  },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  centeredView: {
    bottom: 0,
    marginTop: 'auto',
    left: 0,
    right: 0,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#D93250',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
    color: BLACK,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  
})

export default styles
