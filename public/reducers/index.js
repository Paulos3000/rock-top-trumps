import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// IMPORT INDIVIDUAL reducers
// --------------------------
// import users from './users'
// import posts from './posts'
// import albums from './albums'
// import comments from './comments'
// import photos from './photos'
// import todos from './todos'

// IMPORT FUNCTION THAT RETURN SPECIFIC STATE DEPENDING ON 'ENDPOINT' ARGUMENT
import createList from './createList'

const filteredList = combineReducers({
   users: createList('users'),
   posts: createList('posts'),
   albums: createList('albums'),
   comments: createList('comments'),
   photos: createList('photos'),
   todos: createList('todos')
})

// ROOT REDUCER (imported in configureStore.js). This defines the root store shape:
const rootReducer = combineReducers({
   filteredList,
   routing: routerReducer
})
export default rootReducer
