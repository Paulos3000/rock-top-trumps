import React, { Component } from 'react'

class Todos extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('todos')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const {todos} = this.props
      return (
         <div>
            <h1>Todos</h1>
            <h2><small>This is the Todos page. It is making an API call to <code>https://jsonplaceholder.typicode.com/todos</code> in <code>componentDidMount</code></small></h2>
            <hr />

            {todos.map( (todo, i) => <p key={i}>{todo.name}</p>)}

         </div>
      )
   }
}

import { connect } from 'react-redux'
// define component's props
const mapStateToProps = (state, ownProps) => ({
   todos: state.filteredList.todos.jsonArray,
   ownProps
})
// import component's actions
import * as actions from '../actions/actionCreators'

Todos = connect(mapStateToProps, actions)(Todos);

export default Todos;
