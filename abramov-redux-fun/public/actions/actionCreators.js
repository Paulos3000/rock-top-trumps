// to create unique user id...
import { v4 } from 'node-uuid'
// import all functions in fake backend to be used in actions
import * as api from '../api'

const receiveTodos = (filter, response) => ({
   type: 'RECEIVE_TODOS',
   filter,
   response
})

// this action now returns a PROMISE which RESOLVES to the action object (as seen above), thus encompassing all the necessary code in one function.
export const fetchTodos = (filter) =>
   api.fetchTodos(filter).then(response =>
      receiveTodos(filter, response)
   );

export const addTodo = (text) => ({
   type: 'ADD_TODO',
   id: v4(),
   text
})

export const toggleTodo = (id) => ({
   type: 'TOGGLE_TODO',
   id
})
