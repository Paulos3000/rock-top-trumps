import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/reducer-index';

// Add Redux DevTools...
const enhancers = compose( // this method is used to add 'enhancers' to the store
   window.devToolsExtension ? window.devToolsExtension() : f => f
)
// Define 'defaultState'? Pass as 2nd argument to 'store'
export const store = createStore(rootReducer, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

// // Add Hot Reloading for reducers... --> why not working?
// if (module.hot) {
//    module.hot.accept('./reducers/', () => {
//       const nextRootReducer = require('./reducers/reducer-index').default;
//       store.replaceReducer(nextRootReducer);
//    })
// }
