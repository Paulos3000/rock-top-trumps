import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux'

// import individual reducers
import users from './users'

// ROOT REDUCER (imported in configureStore.js). This defines the root store shape:
const rootReducer = combineReducers({
   users,
   routing: routerReducer
})
export default rootReducer


// // SELECTORS
// // ----------------------------------------------------------------------
//
// // 2. *Primary* Selectors defined here, accepting state and filter arguments --> go to createList.js
// // Each subsequently calls Secondary Selector (defined in createList.js), which passes the specific state for the selected list (e.g listByFilter['all'], or listByFilter['completed'])
//
// // exported to actionCreators.js to be used in thunk action -->. (returns true or false)
// // also exported to mapStateToProps, to pass boolean flag
// export const getIsFetching = (state, filter) =>
//    fromCreateList.getIsFetching(state.listByFilter[filter])
//
// // exported to mapStateToProps, to pass error message
// export const getErrorMessage = (state, filter) =>
//    fromCreateList.getErrorMessage(state.listByFilter[filter])
//
// // exported to VisibleTodoList.js -->. (Then passed into the prop definition of 'todos'. Selector is used to SELECT based on the filter)
// export const getVisibleTodos = (state, filter) => {
//    const ids = fromCreateList.getIds(state.listByFilter[filter]);
//    return ids.map(id => fromById.getTodo(state.byId, id))
// }
