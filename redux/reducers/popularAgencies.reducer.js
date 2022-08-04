import { userConstants } from '../constants'

import { success, failure } from '../../utilities'

const initialState = {
  isRequesting: false,
  agenciesData: [],
}

const popularAgenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.POPULAR_AGENCIES:
      return { ...state, isRequesting: true }
    case success(userConstants.POPULAR_AGENCIES): {
      let data = action.payload.data.result
      return { ...state, agenciesData: data }
    }

    case failure(userConstants.POPULAR_AGENCIES):
      return { ...state, isRequesting: false }

    default:
      return state
  }
}
export default popularAgenciesReducer
