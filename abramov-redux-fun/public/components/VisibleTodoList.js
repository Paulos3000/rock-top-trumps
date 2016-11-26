import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// import specific actionCreator
import * as actions from '../actions/actionCreators'
// import connect child component (PRESENTATIONAL)
import { TodoList } from './TodoList'
// import SELECTOR
import { getVisibleTodos } from '../reducers'



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
      fetchTodos(filter)
   }

   render() {
      const { toggleTodo, ...rest } = this.props
      return (
         <TodoList
            {...rest}
            onTodoClick={toggleTodo}
         />
      )
   }
}

const mapStateToProps = (state, { params }) => {
   const filter = params.filter || 'all';
   return {
      todos: getVisibleTodos(state, filter),
      filter
   }
}

VisibleTodoList = withRouter(connect(
   mapStateToProps,
   actions
)(VisibleTodoList));

export default VisibleTodoList;
