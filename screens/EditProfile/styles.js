import { StyleSheet } from 'react-native'
import {
  WHITE,
  PRIMARY_LIGHT,
  LIGHT_GRAY_77,
  BABY_PINK_SHADE,
  scaleSize,
  DARK_GRAY_20
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
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  continueWith: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSeparator: {
    flex: 1,
    height: 1,
    marginTop: 34,
    marginBottom: 36,
    backgroundColor: BABY_PINK_SHADE,
  },
  seperatorTextStyle: {
    paddingHorizontal: 10,
    textAlign: 'center',
    color: LIGHT_GRAY_77,
    marginTop: 25,
    marginBottom: 29,
  },
  socialConnects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: LIGHT_GRAY_77,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: scaleSize(12),
    paddingHorizontal: 30,
  },
  fbText: {
    marginLeft: 13,
  },
  camera: {
    width: 40, 
    height: 40,
    backgroundColor: WHITE,
    top: -35,
    marginLeft: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: DARK_GRAY_20
  }
})

export default styles
