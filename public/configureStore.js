import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import rootReducer from './reducers/index';

const configureStore = () => {
   const middlewares = [thunk];
   // if in DEVELOPMENT mode, enable logging
   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(createLogger());
   }
   middlewares.push();

   return createStore(
      rootReducer, // --> this is ROOT REDUCER (reducers/index.js)
      // persistedState, --> Can add this if needed. !Must be before enhancer!
      applyMiddleware(...middlewares) // --> Final argument is an 'ENHANCER'
   );
}

export default configureStore;
