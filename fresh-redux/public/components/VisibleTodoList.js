import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// import specific actionCreator
import * as actions from '../actions/actionCreators'
// import connect child component (PRESENTATIONAL)
import { TodoList } from './TodoList'
// import SELECTORS
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'

class VisibleTodoList extends Component {
   componentDidMount() {
      this.fetchData()
   }

   componentDidUpdate(prevProps) {
      // if 'completed' (currentProp) is not the same as 'all' (prevProp), then...
      if (this.props.filter !== prevProps.filter) {
         this.fetchData()
      }
   }

   fetchData() {
      const { filter, fetchTodos } = this.props;
      fetchTodos(filter).then(() => console.log('done!'))
   }

   render() {
      const { toggleTodo, errorMessage, todos, isFetching } = this.props
      // if no todos to display & fetching data...
      if (isFetching && !todos.length) {
         return <p>Loading...</p>
      }
      // if no todos to display & error message in props
      if (errorMessage && !todos.length) {
         return (
            <FetchError
               message={errorMessage}
               onRetry={() => this.fetchData()}
            />
         )
      }
      return (
         <TodoList
            todos={todos}
            onTodoClick={toggleTodo}
         />
      )
   }
}

// to follow data trail... start here.
// 1. State and filter passed in to each prop. --> go to reducers/index.js
const mapStateToProps = (state, { params }) => {
   const filter = params.filter || 'all';
   return {
      isFetching: getIsFetching(state, filter),
      errorMessage: getErrorMessage(state, filter),
      todos: getVisibleTodos(state, filter),
      filter
   }
}

VisibleTodoList = withRouter(connect(
   mapStateToProps,
   actions
)(VisibleTodoList));

export default VisibleTodoList;
