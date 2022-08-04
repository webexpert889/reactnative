/**
 *  Import action creator constants & dependencies
 */
import { needsConstants } from '../constants'
import { API_URLS } from '../../configs/url'

export const beginGetNeeds = params => ({
  type: needsConstants.GET_NEEDS,
  payload: {
    request: {
      url: API_URLS.MY_POSTED_NEEDS,
      params,
    },
  },
})

export const beginGetAllNeeds = params => ({
  type: needsConstants.GET_All_NEEDS,
  payload: {
    request: {
      url: API_URLS.NEEDS_LIST,
      params,
    },
  },
})

export const beginAgencyPostedNeeds = params => ({
  type: needsConstants.MY_POSTED_NEEDS,
  payload: {
    request: {
      url: API_URLS.MY_POSTED_NEEDS,
      params,
    },
  },
})

export const beginAgencyFulfillNeed = params => ({
  type: needsConstants.FULFILL_NEED,
  payload: {
    request: {
      url: API_URLS.FULFILL_NEED,
      params,
      method: 'post',
    },
  },
})

export const beginAgencyDetail = params => ({
  type: needsConstants.AGENCY_DETAIL,
  payload: {
    request: {
      url: API_URLS.AGENCY_DETAIL,
      params,
      method: 'post',
    },
  },
})

export const getCategories = () => ({
  type: needsConstants.GET_CATEGORIES,
  payload: {
    request: {
      url: API_URLS.CATEGORIES,
    },
  },
})

export const beginPostNeed = data => ({
  type: needsConstants.POST_NEEDS,
  payload: {
    request: {
      url: API_URLS.NEEDS_POST,
      method: 'post',
      data,
    },
  },
})

export function addNeed(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginPostNeed(params))
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

export function getNeeds(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginGetNeeds(params))
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

export function getAllNeeds(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginGetAllNeeds(params))
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

export function agencyPostedNeeds(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginAgencyPostedNeeds(params))
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

export function agencyFulfillNeed(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginAgencyFulfillNeed(params))
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


export function agencyDetail(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginAgencyDetail(params))
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
