import { combineReducers } from 'redux'

const createList = (endpoint) => {

   // REDUCER TO RETURN API RESPONSE ARRAY
   const jsonArray = (state = [], action) => {
      switch(action.type) {
         case 'FETCH_REMOTE_DATA_SUCCESS' :
            if (action.endpoint === endpoint) {
               if (action.response) {
                  return action.response.data
               }
            }
            default :
               return state;
      }
   }

   // REDUCER TO RETURN WHETHER DATA IS FETCHING
   const isFetching = (state = false, action) => {
      if (action.endpoint !== endpoint) {
         return state
      }
      switch(action.type) {
         case 'FETCH_REMOTE_DATA_REQUEST' :
            return true;
         case 'FETCH_REMOTE_DATA_SUCCESS' :
         case 'FETCH_REMOTE_DATA_FAILURE' :
            return false;
         default :
            return false;
      }
   }

   return combineReducers({
      jsonArray,
      isFetching
   })

}

export default createList;
