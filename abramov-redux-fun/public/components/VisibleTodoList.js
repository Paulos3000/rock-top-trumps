import React from 'react'
import { connect } from 'react-redux'

// import specific actionCreator
import { toggleTodo } from '../actions/actionCreators'

// import connect child component (PRESENTATIONAL)
import { TodoList } from './TodoList'

const getVisibleTodos = (todos, filter) => {
   switch(filter) {
      case 'all' :
         return todos;
      case 'completed' :
         return todos.filter(
            todo => todo.completed
         )
      case 'active' :
         return todos.filter(
            todo => !todo.completed
         )
      default :
         throw new Error(`Unknown filter: ${filter}`)
   }
}

// Generate CONTAINER with connect()...
const mapStateToTodoListProps = (state, ownProps) => ({
   todos: getVisibleTodos(state.todos, ownProps.filter)
})
const mapDispatchToTodoListProps = (dispatch) => ({
   onTodoClick(id) {
      dispatch(toggleTodo(id))
   }
})
// CONNECT CONTAINER TO PRESENTATIONAL (ie. pass props to presentational)
export const VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList)
