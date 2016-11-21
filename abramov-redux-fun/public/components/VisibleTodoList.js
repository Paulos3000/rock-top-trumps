import React from 'react'
import { connect } from 'react-redux'

// import sub-components
import { Todo } from './Todo'

// import specific action
import { toggleTodo } from '../actions/actionCreators'

// import utility function
import { getVisibleTodos } from '../util/getVisibleTodos'

// LIST OF TODOS (PRESENTATIONAL COMPONENT)
const TodoList = ( {todos, onTodoClick} ) => (
   <ul>
      {todos.map(todo =>
         <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
         />
      )}
   </ul>
)
// GENERATE CONTAINER WITH connect()...
const mapStateToTodoListProps = (state) => ({
   todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToTodoListProps = (dispatch) => ({
   onTodoClick(id) {
      dispatch(toggleTodo(id))
   }
})
// CONNECT CONTAINER TO PRESENTATIONAL (ie. pass props to presentational)
export const VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList)
