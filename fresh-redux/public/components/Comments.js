import React, { Component } from 'react'

class Comments extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('comments')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const {comments} = this.props
      return (
         <div>
            <h1>Comments</h1>
            <h2><small>This is the Comments page. It is making an API call to <code>https://jsonplaceholder.typicode.com/comments</code> in <code>componentDidMount</code></small></h2>
            <hr />

            {comments.map( (comment, i) => <p key={i}>{comment.name}</p>)}

         </div>
      )
   }
}

import { connect } from 'react-redux'
// define component's props
const mapStateToProps = (state, ownProps) => ({
   comments: state.listByEndpoint.comments.jsonArray,
   ownProps
})
// import component's actions
import * as actions from '../actions/actionCreators'

Comments = connect(mapStateToProps, actions)(Comments);

export default Comments;
