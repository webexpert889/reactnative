import { subscriptionConstants } from '../constants'
import { success, failure } from '../../utilities'

const initialState = {
  isRequesting: false,
//   plan_list: [],
}

const sunscriptionReducer = (state = initialState, action) => {


    switch (action.type) {
        case subscriptionConstants.GET_PLANS:
            return { ...state, isRequesting: true }
        case success(subscriptionConstants.GET_PLANS):
        case failure(subscriptionConstants.GET_PLANS):
            return { ...state, isRequesting: false }
        
        default:
            return state
    }
}
export default sunscriptionReducer