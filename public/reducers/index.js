import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// IMPORT INDIVIDUAL reducers
// --------------------------
import deck from './deck'
import stage from './stage'
import players from './players'
import p1 from './p1'
import p2 from './p2'
import p3 from './p3'
import p4 from './p4'
const playerInfo = combineReducers({ p1, p2, p3, p4 })
import activePlayer from './activePlayer'

// ROOT REDUCER (exported to configureStore.js). This defines the root store shape:
const rootReducer = combineReducers({
   deck,
   stage,
   players,
   playerInfo,
   activePlayer,
   routing: routerReducer
})
export default rootReducer
