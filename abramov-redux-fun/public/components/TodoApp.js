import React, { Component } from 'react'

// import components
import AddTodo from './AddTodo'
import { VisibleTodoList } from './VisibleTodoList'
import { Footer } from './Footer'

// MAIN CONTAINER COMPONENT
export const TodoApp = () => (
   <div className='container'>

      <h1>TodoApp</h1>
      <hr/>

      <AddTodo />
      <VisibleTodoList />
      <Footer />

   </div>
)
