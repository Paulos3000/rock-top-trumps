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
import Root from './components/Root'

// import utility functions
import {getVisibleTodos} from './util/getVisibleTodos'

// create/configure store
import configureStore from './configureStore'
const store = configureStore()

render(
   <Root store={store}/>,
   document.getElementById("root")
)
