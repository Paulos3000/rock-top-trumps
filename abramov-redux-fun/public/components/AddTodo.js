import React from 'react'
import { connect } from 'react-redux'

// import actionCreator
import { addTodo } from '../actions/actionCreators'

// INPUT FIELD AND SUBMIT BUTTON (PRESENTATIONAL COMPONENT) 'Functional' Component - Input Field
let AddTodo = ( {dispatch} ) => {
   let input;
   return (
   <div>
      <input ref={ node => {input = node} }></input>
      <button onClick={() => {
         dispatch(addTodo(input.value));
         input.value = ''
      }}>Add Todo
      </button>
   </div>
   )
}
AddTodo = connect()(AddTodo)   // this passes 'null' for mapStateToProps and dispatch method by default to mapDispatchToProps. Now this.props.dispatch should work on AddTodo. *Note the use of let binding to update component*

export default AddTodo;
