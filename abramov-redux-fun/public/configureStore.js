import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/index'
import throttle from 'lodash/throttle';

const addLoggingToDispatch = (store) => {
   const rawDispatch = store.dispatch;
   if (!console.group) {
      return rawDispatch;
   }
   return (action) => {
      console.group(action.type);
      console.log('%c previous state', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action);
      const returnValue = rawDispatch(action);
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
   }
}

const addPromiseSupportToDispatch = (store) => {
   const rawDispatch = store.dispatch;
   // return function that has same api as dispatch function (this is, it accepts an action as an argument)
   return (action) => {
      // if it is a PROMISE...
      if (typeof action.then === 'function') {
         // return the action, wait for it resolve, then dispatch the synchronous action on that.
         return action.then(rawDispatch);
      }
      // otherwise just call dispatch with action object, as normal (synchronous)
      return rawDispatch(action)
   };
}

const configureStore = () => {
   const store = createStore(todoApp);

   // if in DEVELOPMENT mode, enable logging
   if (process.env.NODE_ENV !== 'production') {
      store.dispatch = addLoggingToDispatch(store)
   }

   // IMPORTANT THAT LOGGING SUPPORT FUNCTION COMES BEFORE PROMISE SUPPORT.

   // modify store.dispatch to accept promises (as defined above)
   store.dispatch = addPromiseSupportToDispatch(store)

   // return store to app.
   return store;
}

export default configureStore;
