import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import specific actionCreator
import { toggleTodo } from '../actions/actionCreators'
// import connect child component (PRESENTATIONAL)
import { TodoList } from './TodoList'

import { getVisibleTodos } from '../reducers'

// Generate CONTAINER with connect()...
const mapStateToProps = (state, { params }) => ({
   todos: getVisibleTodos(state, params.filter || 'all')
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
