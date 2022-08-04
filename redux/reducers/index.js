/**
 *  Import node modules
 */
import { combineReducers } from 'redux'

/**
 *  Import reducers
 *  All reducers used in the app must be declared here!
 */
import users from './users.reducer'
import needs from './needs.reducer'
import subscriptionReducer from './subscription.reducer'
import popularAgenciesReducer from './popularAgencies.reducer'

/**
 *  Combine the reducers
 */
const reducers = combineReducers({
  users,
  needs,
  subscriptionReducer,
  popularAgenciesReducer,
})

/**
 *  Export the combined reducers
 */
export default reducers
