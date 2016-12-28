import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// IMPORT INDIVIDUAL reducers
// --------------------------
import deck from './deck'
import players from './players'

// import p1hand from './p1hand'
// import p2hand from './p2hand'
// import p3hand from './p3hand'
// import p4hand from './p4hand'

// const playerHands = combineReducers({ p1: p1hand, p2: p2hand, p3: p3hand, p4: p4hand })

import p1 from './p1'
import p2 from './p2'
import p3 from './p3'
import p4 from './p4'

const playerInfo = combineReducers({ p1, p2, p3, p4 })

// ROOT REDUCER (exported to configureStore.js). This defines the root store shape:
const rootReducer = combineReducers({
   deck,
   players,
   playerInfo,
   // playerHands,
   routing: routerReducer
})
export default rootReducer
