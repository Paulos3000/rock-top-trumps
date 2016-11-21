import React, { Component } from 'react'

// import components
import AddTodo from './AddTodo'
import { VisibleTodoList } from './VisibleTodoList'
import { Footer } from './Footer'

import { v4 } from 'node-uuid'

// MAIN CONTAINER COMPONENT
export const TodoApp = () => (
   <div className='container'>

      <h1>Todo App</h1>
      <hr/>

      <AddTodo />
      <VisibleTodoList />
      <Footer />

   </div>
)
