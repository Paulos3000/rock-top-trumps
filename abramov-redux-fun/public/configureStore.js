import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers/index'

import { loadState, saveState } from './localStorage'
// throttle function in lodash, prevents re-run of function after a time limit (useful here as saveState()'s JSON.stringify() is EXPENSIVE')
import throttle from 'lodash/throttle';

const configureStore = () => {
   const persistedState = loadState()
   const store = createStore(todoApp, persistedState);
   // every time state updated, pass state.todos to local storage (with 1000ms interval)
   store.subscribe(throttle(() => {
      saveState({
         todos: store.getState().todos
      });
   }, 1000));
   return store;
}

export default configureStore;
