import { needsConstants } from '../constants'
import { success, failure } from '../../utilities'

const initialState = {
  isRequesting: false,
  list: [],
  myPostedList:[],
  categoriesList: [],
  last_page:0
}

const needsReducer = (state = initialState, action) => {

  switch (action.type) {
    case needsConstants.GET_NEEDS:
      return { ...state, isRequesting: true }
    case success(needsConstants.GET_NEEDS): {
      const { data } = action.payload?.data?.result?.needs      
      if (!data.data || !data.data?.length)
        return { ...state, list: [], isRequesting: false }

      const list = data.data.map(item => ({
        ...item,
        images: item.images.map(image => ({
          ...image,
          image_path: `${action.payload?.data?.result.base_path}/${image.image_path}`,
        })),
        category_image_path:`${action.payload?.data?.result.base_path}/${item?.categories?.[0]?.category?.image}` ,
      }))
      return { ...state, list, isRequesting: false }
    }
    case failure(needsConstants.GET_NEEDS): {
      
      return { ...state, isRequesting: false }
    }

    // Get All needs for dashboard
    case needsConstants.GET_All_NEEDS:
      return { ...state, isRequesting: true }
    case success(needsConstants.GET_All_NEEDS): {
      const { data } = action.payload?.data?.result?.needs
      if (!data.data || !data.data?.length)
        return { ...state, list: [], isRequesting: false }
      
      // let temp = {}
      let list = data.data.map(item => ({
        ...item,
        images: item.images.map(image => ({
          ...image,
          image_path: `${action.payload?.data?.result.base_path}/${image.image_path}`,
        })),
        category_image_path:`${action.payload?.data?.result.base_path}/${item?.categories?.[0]?.category?.image}` ,
      }))

      if(data.current_page && data.current_page > 1){
     
        list = [...state.list, ...list]
      } else {
       
        list  = [...list]
      }

     

      return { ...state, list, isRequesting: false, last_page: data.last_page }
    }
    case failure(needsConstants.GET_All_NEEDS): {
     
      return { ...state, isRequesting: false }
    }

    // Get All My Posted Needs
    case needsConstants.MY_POSTED_NEEDS:
      return { ...state, isRequesting: true }
    case success(needsConstants.MY_POSTED_NEEDS): {
      const { data } = action.payload?.data?.result?.needs
      if (!data.data || !data.data?.length)
        return { ...state, myPostedList: [], isRequesting: false }      
      // let temp = {}
      let myPostedList = data.data.map(item => ({
        ...item,
        images: item.images.map(image => ({
          ...image,
          image_path: `${action.payload?.data?.result.base_path}/${image.image_path}`,
        })),
        category_image_path:`${action.payload?.data?.result.base_path}/${item?.categories?.[0]?.category?.image}` ,
      }))

      if(data.current_page && data.current_page > 1){
        myPostedList = [...state.myPostedList, ...myPostedList]
      } else {
        myPostedList  = [...myPostedList]
      }

     

      return { ...state, myPostedList, isRequesting: false, last_page: data.last_page }
    }
    case failure(needsConstants.MY_POSTED_NEEDS): {
      
      return { ...state, isRequesting: false }
    }

    // Get Agency details with needs
    case needsConstants.AGENCY_DETAIL:
      return { ...state, isRequesting: true }
    case success(needsConstants.AGENCY_DETAIL): {
      const { data } = action.payload?.data?.result?.needs
      if (!data.data || !data.data?.length)
        return { ...state, list: [], isRequesting: false }      
      // let temp = {}
      let list = data.data.map(item => ({
        ...item,
        images: item.images.map(image => ({
          ...image,
          image_path: `${action.payload?.data?.result.base_path}/${image.image_path}`,
        })),
        category_image_path:`${action.payload?.data?.result.base_path}/${item?.categories?.[0]?.category?.image}` ,
      }))

      if(data.current_page && data.current_page > 1){
        list = [...state.list, ...list]
      } else {
        list  = [...list]
      }

      

      return { ...state, list, isRequesting: false, last_page: data.last_page }
    }
    case failure(needsConstants.AGENCY_DETAIL): {
      
      return { ...state, isRequesting: false }
    }


    case needsConstants.POST_NEEDS:
      return { ...state, isRequesting: true }
    case success(needsConstants.POST_NEEDS):
    case failure(needsConstants.POST_NEEDS):
      return { ...state, isRequesting: false }

    // Fullfill need
    case needsConstants.FULFILL_NEED:
      return { ...state, isRequesting: true }
    case success(needsConstants.FULFILL_NEED):
    case failure(needsConstants.FULFILL_NEED):
      return { ...state, isRequesting: false }

    case needsConstants.GET_CATEGORIES: {
      return { ...state, isRequesting: true }
    }
    case success(needsConstants.GET_CATEGORIES): {
      
      const { data = [] } = action.payload?.data?.result?.categories
      return { ...state, categoriesList: data, isRequesting: false }
    }
    case failure(needsConstants.GET_CATEGORIES):
      return { ...state, isRequesting: false }
    case needsConstants.SHOW_LOADER:
      return { ...state, isRequesting: true }

    default:
      return state
  }
}
export default needsReducer
