import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const todoApp = combineReducers({
  todos
})
// exported to configureStore.js
export default todoApp;

// exported to VisibleTodoList.js -->. (Then passed into the prop definition of 'todos'. Selector is used to SELECT based on the filter)
export const getVisibleTodos = (state, filter) =>
   // run getVisibleTodos selector as defined in reducers/index.js
   fromTodos.getVisibleTodos(state.todos, filter);
