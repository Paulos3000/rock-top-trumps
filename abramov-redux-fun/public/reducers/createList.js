import { combineReducers } from 'redux';

const createList = (filter) => {
   const ids = (state = [], action) => {
      // if the user-selected filter doesn't match the one this list is created with, bypass this reducer.
      if (action.filter !== filter) {
         return state;
      }
      switch (action.type) {
         case 'FETCH_TODOS_SUCCESS':
            // action.response is an array of todos
            return action.response.map(todo => todo.id);
         default:
            return state;
      }
   }

   const isFetching = (state = false, action) => {
      // if the user-selected filter doesn't match the one this list is created with, bypass this reducer.
      if (action.filter !== filter) {
         return state;
      }
      switch (action.type) {
         case 'FETCH_TODOS_REQUEST':
            return true;
         case 'FETCH_TODOS_SUCCESS':
         case 'FETCH_TODOS_FAILURE':
            return false;
         default:
            return state;
      }
   }

   const errorMessage = (state = null, action) => {
      // if the user-selected filter doesn't match the one this list is created with, bypass this reducer.
      if (filter !== action.filter) {
         return state;
      }
      switch (action.type) {
         case 'FETCH_TODOS_FAILURE':
            return action.message;  // <-- message embedded in action creator
         case 'FETCH_TODOS_REQUEST':
         case 'FETCH_TODOS_SUCCESS':
            return null;
         default:
            return state;
      }
   }

   return combineReducers({
      ids,
      isFetching,
      errorMessage
   })
}
export default createList;

// 3. *Secondary* Selectors defined here. 
export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
