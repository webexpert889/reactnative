/**
 *  Import action creator constants & dependencies
 */
import { subscriptionConstants } from '../constants'
import { API_URLS } from '../../configs/url'

export const beginGetPlans = params => ({
  type: subscriptionConstants.GET_PLANS,
  payload: {
    request: {
      url: API_URLS.GET_PLANS,
      params,
    },
  },
})

export function getPlans(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginGetPlans(params))
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

export const cancelSubscriptionAPI = params => ({
  type: subscriptionConstants.CANCEL_SUBSCRIPTION,
  payload: {
    request: {
      url: API_URLS.CANCEL_SUBSCRIPTION,
      params,
      method: 'post',
    },
  },
})

export function cancelSubscription(params) {
  return async dispatch => {
    try {
      const response = await dispatch(cancelSubscriptionAPI(params))
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

export const getSubscriptionDetailAPI = params => ({
  type: subscriptionConstants.SUBSCRIPTION_DETAIL,
  payload: {
    request: {
      url: API_URLS.SUBSCRIPTION_DETAIL,
      params,
      method: 'get',
    },
  },
})

export function getSubscriptionDetail(params) {
  return async dispatch => {
    try {
      const response = await dispatch(getSubscriptionDetailAPI(params))
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
