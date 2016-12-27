import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import middlewares...
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// import rootReducer
import rootReducer from './reducers/index';

// import data
import deck from './data/deck'

const defaultState = {
   deck
}

const configureStore = () => {
   const middlewares = [thunk];
   // if in DEVELOPMENT mode, enable logging
   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(createLogger());
   }
   middlewares.push();

   return createStore(
      rootReducer, // --> this is ROOT REDUCER (reducers/index.js)
      defaultState, // --> If needed. MUST BE OBJECT.
      applyMiddleware(...middlewares) // --> Final argument is an 'ENHANCER'
   );
}

export default configureStore;
