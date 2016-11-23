import React, { Component } from 'react'

// import components
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { Footer } from './Footer'
import Notes from './Notes'

import { v4 } from 'node-uuid'

// MAIN CONTAINER COMPONENT
export const TodoApp = ({ params }) => (
   <div className='container'>
      <h2>Redux Todo App - Fake Server</h2>
      <hr />

      <Notes />
      <hr />

      <AddTodo />
      <VisibleTodoList />
      <Footer />

   </div>
)
