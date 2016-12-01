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
      <h2>Fresh-Redux</h2>
      <h3>Stripped bare, and experimenting with thunks and react-router-redux</h3>
      <hr />

      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <hr />

      <Notes />
      <hr />

   </div>
)
