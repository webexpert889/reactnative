/**
 *  Import action creator constants & dependencies
 */
import { userConstants } from '../constants'
import { API_URLS } from '../../configs/url'

export const beginLoginUser = data => ({
  type: userConstants.LOGIN,
  payload: {
    request: {
      url: API_URLS.LOGIN,
      method: 'post',
      data,
    },
  },
})

export const beginLogoutUser = data => ({
  type: userConstants.LOGOUT,
  payload: {},
})

export const beginNormalLogoutUser = data => ({
  type: userConstants.NORMAL_LOGOUT,
  payload: {},
})

export const beginSignupUser = data => ({
  type: userConstants.SIGN_UP,
  payload: {
    request: {
      url: API_URLS.SIGN_UP,
      method: 'post',
      data,
    },
  },
})
export const getPopularAgencies = () => ({
  type: userConstants.POPULAR_AGENCIES,
  payload: {
    request: {
      url: API_URLS.POPULAR_AGENCIES,
      method: 'get',
    },
  },
})
export function getPopularAgenciesAPI() {
  return async dispatch => {
    try {
      const response = await dispatch(getPopularAgencies())
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      
      throw error.response
    }
  }
}

export const beginforgotPassword = data => ({
  type: userConstants.FORGOT_PASSWORD,
  payload: {
    request: {
      url: API_URLS.FORGOT_PASSWORD,
      method: 'post',
      data,
    },
  },
})

export const beginSendEmailOtpAgain = data => ({
  type: userConstants.SEND_EMAIL_OTP_AGAIN,
  payload: {
    request: {
      url: API_URLS.SEND_EMAIL_OTP_AGAIN,
      method: 'post',
      data,
    },
  },
})

export const beginForgotPasswordVerifyOtp = data => ({
  type: userConstants.FORGOT_PASSWORD_OTP_VERIFY,
  payload: {
    request: {
      url: API_URLS.FORGOT_PASSWORD_OTP_VERIFY,
      method: 'post',
      data,
    },
  },
})

export const beginConfirmforgotPassword = data => ({
  type: userConstants.CONFIRM_FORGOT_PASSWORD,
  payload: {
    request: {
      url: API_URLS.CONFIRM_FORGOT_PASSWORD,
      method: 'post',
      data,
    },
  },
})

export const beginUpdateUser = data => ({
  type: userConstants.UPDATE_USER,
  payload: {
    request: {
      url: API_URLS.UPDATE_PROFILE,
      method: 'post',
      data,
    },
  },
})

export const beginChangePassword = data => ({
  type: userConstants.CHANGE_PASSWORD,
  payload: {
    request: {
      url: API_URLS.CHANGE_PASSWORD,
      method: 'post',
      data,
    },
  },
})

export const beginVerifyOTP = data => ({
  type: userConstants.VERIFY_OTP,
  payload: {
    request: {
      url: API_URLS.VERIFY_OTP,
      method: 'post',
      data,
    },
  },
})

export const beginsendAgainOTP = data => ({
  type: userConstants.SEND_OTP_AGAIN,
  payload: {
    request: {
      url: API_URLS.SEND_OTP_AGAIN,
      method: 'post',
      data,
    },
  },
})

export const beginremoveFromCart = data => ({
  type: userConstants.USER_CART_DELETE,
  payload: {
    request: {
      url: API_URLS.USER_CART_DELETE,
      method: 'post',
      data,
    },
  },
})

export const begincheckoutCart = data => ({
  type: userConstants.USER_CART_CHECKOUT,
  payload: {
    request: {
      url: API_URLS.USER_CART_CHECKOUT,
      method: 'post',
      data,
    },
  },
})

export const beginSocialLogin = data => ({
  type: userConstants.SOCIAL_LOGIN,
  payload: {
    request: {
      url: API_URLS.SOCIAL_LOGIN,
      method: 'post',
      data,
    },
  },
})

export const showLoader = data => ({
  type: userConstants.SHOW_LOADER,
})

export const setToken = data => ({
  type: userConstants.SET_TOKEN,
  payload: {
    request: {
      url: API_URLS.FCM_SUBSCRIBE,
      method: 'post',
      data,
    },
  },
})

export const getCart = () => ({
  type: userConstants.USER_CART,
  payload: {
    request: {
      url: API_URLS.USER_CART,
      method: 'post',
    },
  },
})

export const beginAddCart = data => ({
  type: userConstants.USER_CART_ADD,
  payload: {
    request: {
      url: API_URLS.USER_CART_ADD,
      method: 'post',
      data,
    },
  },
})

export const beginAddCartAmount = data => ({
  type: userConstants.USER_CART_ADD_AMOUNT,
  payload: {
    request: {
      url: API_URLS.USER_CART_ADD_AMOUNT,
      method: 'post',
      data,
    },
  },
})
export const beginUserDonations = data => ({
  type: userConstants.USER_DONATIONS,
  payload: {
    request: {
      url: API_URLS.USER_DONATIONS,
      method: 'post',
      data,
    },
  },
})

export function userDonations(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginUserDonations(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function userAddCart(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginAddCart(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}
export function userAddCartAmount(params) {
  
  return async dispatch => {
    try {
      const response = await dispatch(beginAddCartAmount(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function userSocialLogin(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginSocialLogin(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function loginUser(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginLoginUser(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function registerUser(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginSignupUser(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

// Forgot Password
export function forgotPassword(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginforgotPassword(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

// Send Email Otp Again
export function sendEmailOtpAgain(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginSendEmailOtpAgain(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

// Forgot Password Verify Otp
export function forgotPasswordVerifyOtp(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginForgotPasswordVerifyOtp(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

// Confirm Forgot Password
export function confirmForgotPassword(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginConfirmforgotPassword(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function updateUser(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginUpdateUser(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function changePassword(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginChangePassword(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }
      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function verifyOTP(params) {
  return async dispatch => {
    try {
      
      const response = await dispatch(beginVerifyOTP(params))
      
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function sendAgainOTP(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginsendAgainOTP(params))
      
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function removeFromCart(params) {
  return async dispatch => {
    try {
   
      const response = await dispatch(beginremoveFromCart(params))
      
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function checkoutCart(params) {
  return async dispatch => {
    try {
     
      const response = await dispatch(begincheckoutCart(params))
      
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}
