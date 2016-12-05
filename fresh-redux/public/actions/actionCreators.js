import { normalize } from 'normalizr';
import * as schema from './schema';
// import all functions in fake backend to be used in actions
import * as api from '../api'
// import getIsFetching selector
import { getIsFetching } from '../reducers';

import axios from 'axios'

export const fetchRemoteData = (endpoint) => (dispatch, getState) => {
   // dispatch({
   //    type: 'FETCH_REMOTE_DATA_REQUEST',
   //    endpoint
   // })
   return axios.get('https://jsonplaceholder.typicode.com/users').then(
      response =>
         dispatch({
            type: 'FETCH_REMOTE_DATA_SUCCESS',
            endpoint,
            response
         })
      )
} // end fetchRemoteData actionCreator


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
            response: normalize(response, schema.arrayOfTodos)
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

// this is now run on the server (api) - returns THUNK.
// this function passes text value to the api function which returns the response, which this function then dispatches action.
export const addTodo = (text) => (dispatch) =>
   api.addTodo(text).then(response =>
      dispatch({
         type: 'ADD_TODO_SUCCESS',
         response: normalize(response, schema.todo)
      })
   )


export const toggleTodo = (id) => (dispatch) =>
   api.toggleTodo(id).then(response =>
      dispatch({
         type: 'TOGGLE_TODO_SUCCESS',
         response: normalize(response, schema.todo)
      })
   )
