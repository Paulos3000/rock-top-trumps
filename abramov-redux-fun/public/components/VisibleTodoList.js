import React from 'react'
import { connect } from 'react-redux'

import { withRouter } from 'react-router'

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
const mapStateToProps = (state, { params }) => ({
   todos: getVisibleTodos(state.todos, params.filter || 'all')
})
// const mapDispatchToProps = (dispatch) => ({
//    onTodoClick(id) {
//       dispatch(toggleTodo(id))
//    }
// })

const VisibleTodoList = withRouter(connect(
   mapStateToProps,
   { onTodoClick: toggleTodo }   // this replaces mapDispatchToProps (see above)
)(TodoList));

export default VisibleTodoList;
