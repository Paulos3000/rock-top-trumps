import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/index'
import throttle from 'lodash/throttle';

const logger = (store) => (next) => {
   if (!console.group) {
      return next;
   }
   return (action) => {
      console.group(action.type);
      console.log('%c previous state', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action);
      const returnValue = next(action);
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
   }
}


const promise = (store) => (next) => (action) => {
   // if it is a PROMISE...
   if (typeof action.then === 'function') {
      // return the action, wait for it resolve, then dispatch the synchronous action on that.
      return action.then(next);
   }
   // otherwise just call dispatch with action object, as normal (synchronous)
   return next(action)
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
   // run code for every middleware
   middlewares.slice().reverse().forEach(middleware =>
      // re-write store.dispatch as before, but with each middleware function in array (see above for details)
      store.dispatch = middleware(store)(store.dispatch)
   )
}

const configureStore = () => {
   const store = createStore(todoApp);
   const middlewares = [promise];

   // if in DEVELOPMENT mode, enable logging
   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(logger);
   }

   middlewares.push(promise);

   wrapDispatchWithMiddlewares(store, middlewares);

   // return store to app.
   return store;
}

export default configureStore;
