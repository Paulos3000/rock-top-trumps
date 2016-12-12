import React, { Component } from 'react'
// import util functions
import capitalizeFirstLetter from '../util/capitalizeFirstLetter'
// import components
import PageHeader from './PageHeader'
import PhotoList from './PhotoList'

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
      const {albumId} = this.props.params
      console.log(albumId)
      return (
         <div>
            <h1>Album id: {albumId}</h1>
            <h2><small>This is the filtered list of albums as dictated by the album id. The photos are compiled from the <code>/photos</code> endpoint, using a selector which passes in the album id to filter the result down to the correct payload</small></h2>
            <hr />
            <PhotoList albumId={albumId}/>
            {/*photos.map( (photo, i) => <p key={i}>{photo.name}</p>)*/}
         </div>
      )
   }
}

import { connect } from 'react-redux'
// define component's props
const mapStateToProps = (state, { params }) => ({
   photos: state.filteredList.photos.jsonArray,
})
// import component's actions
import * as actions from '../actions/actionCreators'

Photos = connect(mapStateToProps, actions)(Photos);

export default Photos;
