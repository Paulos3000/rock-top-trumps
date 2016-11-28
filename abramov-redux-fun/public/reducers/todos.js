import { combineReducers } from 'redux';

// List of todo OBJECTS, each written with id as its key
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state };
      action.response.forEach(todo => {
         nextState[todo.id] = todo
      })
      return nextState;
    default:
      return state
  }
}

// Simply the list of ids. Used to search all the todo OBJECTS
const allIds = (state = [], action) => {
   // if it's not 'all' filter, BYPASS THIS REDUCER
   if (action.filter !== 'all') {
      return state;
   }
   switch (action.type) {
      case 'RECEIVE_TODOS':
         // action.response is an array of todos
         return action.response.map(todo => todo.id);
      default:
         return state;
   }
}

const activeIds = (state = [], action) => {
   // if it's not 'active' filter, BYPASS THIS REDUCER
   if (action.filter !== 'active') {
      return state;
   }
   switch(action.type) {
      case 'RECEIVE_TODOS':
         return action.response.map(todo => todo.id);
      default:
         return state
   }
}

const completedIds = (state = [], action) => {
   // if it's not 'completed' filter, BYPASS THIS REDUCER
   if (action.filter !== 'completed') {
      return state;
   }
   switch(action.type) {
      case 'RECEIVE_TODOS':
         return action.response.map(todo => todo.id);
      default:
         return state
   }
}

const idsByFilter = combineReducers({
   all: allIds,
   active: activeIds,
   completed: completedIds
})

const todos = combineReducers({
   byId,
   idsByFilter
})
export default todos

// exported to reducers/index.js... -->
export const getVisibleTodos = (state, filter) => {
   const ids = state.idsByFilter[filter];
   return ids.map(id => state.byId[id])
}
