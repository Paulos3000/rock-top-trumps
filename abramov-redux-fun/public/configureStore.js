import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import todoRootReducer from './reducers/index';

// ------------------------------------------------
// OLD MANUAL THUNK IMPLEMENTATION (FOR REFERENCE)

// const thunk = (store) => (next) => (action) =>
//    typeof action === 'function' ?
//       action(store.dispatch, store.getState) :
//       next(action);


// OLD MANUAL LOGGER IMPLEMENTATION (FOR REFERENCE)

// const logger = (store) => (next) => {
//    if (!console.group) {
//       return next;
//    }
//    return (action) => {
//       console.group(action.type);
//       console.log('%c previous state', 'color: gray', store.getState())
//       console.log('%c action', 'color: blue', action);
//       const returnValue = next(action);
//       console.log('%c next state', 'color: green', store.getState());
//       console.groupEnd(action.type);
//       return returnValue;
//    }
// }

// OLD MANUAL PROMISE IMPLEMENTATION (FOR REFERENCE)

// const promise = (store) => (next) => (action) => {
//    // if it is a PROMISE...
//    if (typeof action.then === 'function') {
//       // return the action, wait for it resolve, then dispatch the synchronous action on that.
//       return action.then(next);
//    }
//    // otherwise just call dispatch with action object, as normal (synchronous)
//    return next(action)
// };
// ------------------------------------------------

const configureStore = () => {
   const middlewares = [thunk];
   // if in DEVELOPMENT mode, enable logging
   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(createLogger());
   }
   middlewares.push();

   return createStore(
      todoRootReducer, // --> this is ROOT REDUCER (reducers/index.js)
      // persistedState, --> Can add this if needed. !Must be before enhancer!
      applyMiddleware(...middlewares) // --> Final argument is an 'ENHANCER'
   );
}

export default configureStore;
