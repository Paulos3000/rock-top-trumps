import React, { Component } from 'react'

// import components
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { Footer } from './Footer'

import { v4 } from 'node-uuid'

// MAIN CONTAINER COMPONENT
export const TodoApp = ({ params }) => (
   <div className='container'>

      <h2>Todo App</h2>
      <h2><small>Finished #11 - tricky, but it works. Maybe go over again.</small></h2>
      <hr/>

      <AddTodo />
      <VisibleTodoList />
      <Footer />

   </div>
)
