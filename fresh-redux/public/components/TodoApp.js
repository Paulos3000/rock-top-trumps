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
      <h2>Idiomatic Redux</h2>
      <hr />

      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <hr />

      <Notes />
      <hr />

   </div>
)
