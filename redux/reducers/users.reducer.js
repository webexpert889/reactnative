import { userConstants } from '../constants'
import { success, failure } from '../../utilities'

const initialState = {
  isRequesting: false,
  isLogin: false,
  fromApi: false,
  cartItems: [],
}

const usersReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case userConstants.LOGIN:
      return { ...state, isRequesting: true }
    case success(userConstants.LOGIN):
      return { ...state, isLogin: true, fromApi: false, isRequesting: false }
    case failure(userConstants.LOGIN):
  
      return { ...state, isRequesting: false }

    // For Session Logout
    case userConstants.LOGOUT:
      return { ...state, isLogin: false, fromApi: true, isRequesting: false }

    case userConstants.NORMAL_LOGOUT:
      return { ...state, isLogin: false, fromApi: false, isRequesting: false }

    case userConstants.SIGN_UP:
      return { ...state, isRequesting: true, fromApi: false }
    case success(userConstants.SIGN_UP):
    case failure(userConstants.SIGN_UP):
      return { ...state, isRequesting: false, fromApi: false }

    // For Forgot Password
    case userConstants.FORGOT_PASSWORD:
      return { ...state, isRequesting: true }
    case success(userConstants.FORGOT_PASSWORD):
    case failure(userConstants.FORGOT_PASSWORD):
      return { ...state, isRequesting: false }

    // For Send Email Otp again
    case userConstants.SEND_EMAIL_OTP_AGAIN:
      return { ...state, isRequesting: true }
    case success(userConstants.SEND_EMAIL_OTP_AGAIN):
    case failure(userConstants.SEND_EMAIL_OTP_AGAIN):
      return { ...state, isRequesting: false }

    // For Forgot Password Verify Otp
    case userConstants.FORGOT_PASSWORD_OTP_VERIFY:
      return { ...state, isRequesting: true }
    case success(userConstants.FORGOT_PASSWORD_OTP_VERIFY):
    case failure(userConstants.FORGOT_PASSWORD_OTP_VERIFY):
      return { ...state, isRequesting: false }

    case userConstants.CHANGE_PASSWORD:
      return { ...state, isRequesting: true }
    case success(userConstants.CHANGE_PASSWORD):
    case failure(userConstants.CHANGE_PASSWORD):
      return { ...state, isRequesting: false }

    case userConstants.UPDATE_USER:
      return { ...state, isRequesting: true }
    case success(userConstants.UPDATE_USER):
    case failure(userConstants.UPDATE_USER):
      return { ...state, isRequesting: false }

    case userConstants.GET_CATEGORIES: {
      return { ...state, isRequesting: true }
    }
    case success(userConstants.GET_CATEGORIES): {
      const { data = [] } = action.payload?.data?.result?.categories
      return { ...state, cartList: data, isRequesting: false }
    }
    case failure(userConstants.GET_CATEGORIES):
      return { ...state, isRequesting: false }

    case userConstants.USER_CART_ADD:
      return { ...state, isRequesting: true }
    case success(userConstants.USER_CART_ADD):
    case failure(userConstants.USER_CART_ADD):
      return { ...state, isRequesting: false }

    case userConstants.USER_CART_ADD_AMOUNT:
      return { ...state, isRequesting: true }
    case success(userConstants.USER_CART_ADD_AMOUNT):
    case failure(userConstants.USER_CART_ADD_AMOUNT):
      return { ...state, isRequesting: false }

    case userConstants.USER_CART:
   
      return { ...state, isRequesting: true }
    case success(userConstants.USER_CART):
      const { cart_data = [] } = action.payload?.data?.result
      const data = cart_data.map(cd => ({
        ...cd.need,
        ...cd,
        images: cd.need?.images?.map(img => ({
          ...img,
          image_path: `${action.payload?.data?.result.base_path}/${img.image_path}`,
        })),
      }))
     
      return { ...state, cartItems: data, isRequesting: true }
    case failure(userConstants.USER_CART):
      
      return { ...state, isRequesting: false }

    case userConstants.SOCIAL_LOGIN:
      return { ...state, isRequesting: true }
    case success(userConstants.SOCIAL_LOGIN):
    case failure(userConstants.SOCIAL_LOGIN):
      return { ...state, isRequesting: false }

    case userConstants.USER_DONATIONS:
      return { ...state, isRequesting: true }
    case success(userConstants.USER_DONATIONS):
    case failure(userConstants.USER_DONATIONS):
      return { ...state, isRequesting: false }

    case userConstants.VERIFY_OTP:
      
      return { ...state, isRequesting: true }
    case success(userConstants.VERIFY_OTP):
    
    case failure(userConstants.VERIFY_OTP):
      
      return { ...state, isRequesting: false }

    // Send Otp Again Case
    case userConstants.SEND_OTP_AGAIN:
    
      return { ...state, isRequesting: true }
    case success(userConstants.SEND_OTP_AGAIN):
     
    case failure(userConstants.SEND_OTP_AGAIN):
  
      return { ...state, isRequesting: false }

    case userConstants.USER_CART_DELETE:
      
      return { ...state, isRequesting: true }
    case success(userConstants.USER_CART_DELETE):
      
    case failure(userConstants.USER_CART_DELETE):
 
      return { ...state, isRequesting: false }

    case userConstants.USER_CART_CHECKOUT:
    
      return { ...state, isRequesting: true }
    case success(userConstants.USER_CART_CHECKOUT):
      
    case failure(userConstants.USER_CART_CHECKOUT):
      
      return { ...state, isRequesting: false }

    case userConstants.SHOW_LOADER:
      return { ...state, isRequesting: true }
    default:
      return state
  }
}
export default usersReducer
