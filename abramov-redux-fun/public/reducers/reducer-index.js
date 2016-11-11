import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducerFunction from './reducers'

const rootReducer = combineReducers( {global: reducerFunction, routing: routerReducer} )

export default rootReducer;
