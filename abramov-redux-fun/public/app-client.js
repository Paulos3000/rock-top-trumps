import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

// import root reducer
import todoApp from './reducers/index'

// actions defined individually in each relevant component

// import components
import { TodoApp } from './components/TodoApp'
import { Todo } from './components/Todo'
import { FilterLink } from './components/FilterLink'

// import utility functions
import {getVisibleTodos} from './util/getVisibleTodos'

// set up store
import { createStore } from 'redux'
const store = createStore(todoApp);
// console.log(store.getState())

import { Provider } from 'react-redux'

render(
   <Provider store={store}>
      <TodoApp />
   </Provider>,
   document.getElementById("root")
)
