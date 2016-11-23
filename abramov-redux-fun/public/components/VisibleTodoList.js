import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// import specific actionCreator
import { toggleTodo } from '../actions/actionCreators'
// import connect child component (PRESENTATIONAL)
import { TodoList } from './TodoList'
// import SELECTOR
import { getVisibleTodos } from '../reducers'

// import fake api
import { fetchTodos } from '../api'

// test the fake api with a filter argument
fetchTodos('all').then(response =>
   console.log(response)
)

const mapStateToProps = (state, { params }) => ({
   todos: getVisibleTodos(state, params.filter || 'all')
})

const VisibleTodoList = withRouter(connect(
   mapStateToProps,
   { onTodoClick: toggleTodo }   // this replaces mapDispatchToProps (see above)
)(TodoList));

export default VisibleTodoList;
