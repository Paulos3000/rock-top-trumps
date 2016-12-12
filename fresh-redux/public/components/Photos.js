import React, { Component } from 'react'

class Photos extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('photos')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const {photos} = this.props
      return (
         <div>
            <h1>Photos</h1>
            <h2><small>This is the photos page. It is making an API call to <code>https://jsonplaceholder.typicode.com/Photos</code> in <code>componentDidMount</code></small></h2>
            <hr />

            {photos.map( (photo, i) => <p key={i}>{photo.name}</p>)}

         </div>
      )
   }
}

import { connect } from 'react-redux'
// define component's props
const mapStateToProps = (state, ownProps) => ({
   photos: state.filteredList.photos.jsonArray,
   ownProps
})
// import component's actions
import * as actions from '../actions/actionCreators'

Photos = connect(mapStateToProps, actions)(Photos);

export default Photos;
