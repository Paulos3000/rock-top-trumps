import { combineReducers } from 'redux';

// this reducer creates an 'index' of IDS ONLY
const createList = (filter) => {

// !! conditionals required here because createList runs on all 3 lists, the only thing that defines them apart here is the logic deciding which filter is applied.
   const ids = (state = [], action) => {
      switch (action.type) {
         case 'FETCH_TODOS_SUCCESS':
            // if filter in this list matches the filter in the action...
            return filter === action.filter ?
               // action.response is an array of todos. create new array of ONLY ids.
               action.response.map(todo => todo.id) :
               state;
         case 'ADD_TODO_SUCCESS':
            return filter !== 'completed' ?
            [...state, action.response.id] :
            state;
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
