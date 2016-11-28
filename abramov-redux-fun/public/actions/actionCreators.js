// to create unique user id...
import { v4 } from 'node-uuid'
import { getIsFetching } from '../reducers';
// import all functions in fake backend to be used in actions
import * as api from '../api'

// this action is a 'thunk', meaning it is able to pass a second function which takes 'dispatch' and 'getState' arguments (of 'createStore')
export const fetchTodos = (filter) => (dispatch, getState) => {
   // if already fetching todos (true), resolve promise (this exposes fetchTodos call to .then() method)
   if (getIsFetching(getState(), filter)) {
      return Promise.resolve();
   }
   // dispatching FETCH_TODOS_REQUEST simply sets 'isFetching' to 'true' for the specific filter
   dispatch({
      type: 'FETCH_TODOS_REQUEST',
      filter
   });
   // this contacts server/api, and when payload received, dispatches FETCH_TODOS_SUCCESS.
   return api.fetchTodos(filter).then(
      response => {
         dispatch({
            type: 'FETCH_TODOS_SUCCESS',
            filter,
            response
         });
      },
      error => {
         dispatch({
            type: 'FETCH_TODOS_FAILURE',
            filter,
            message: error.message || 'Something went wrong.'
         })
      }
   );
}

export const addTodo = (text) => ({
   type: 'ADD_TODO',
   id: v4(),
   text
})

export const toggleTodo = (id) => ({
   type: 'TOGGLE_TODO',
   id
})
