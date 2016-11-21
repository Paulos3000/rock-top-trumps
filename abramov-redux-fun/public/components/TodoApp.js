import React, { Component } from 'react'

// import components
import AddTodo from './AddTodo'
import { VisibleTodoList } from './VisibleTodoList'
import { Footer } from './Footer'

import { v4 } from 'node-uuid'

// MAIN CONTAINER COMPONENT
export const TodoApp = ({ params }) => (
   <div className='container'>

      <h1>Todo App (continue from video #9)</h1>
      <hr/>

      <AddTodo />
      <VisibleTodoList filter={params.filter || 'all'}/>
      <Footer />

   </div>
)
