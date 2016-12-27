import React, { Component } from 'react'

import PhotoSingleImg from './PhotoSingleImg'

import capitalizeFirstLetter from '../util/capitalizeFirstLetter'

class PhotoSingle extends Component {
   componentDidMount() {
      this.props.fetchRemoteData('photos')
   }
   render() {
      const {singlePhoto, photoId} = this.props
      return (
         <div>
            <PhotoSingleImg singlePhoto={singlePhoto} photoId={photoId} />
         </div>
      )
   }
}

import { connect } from 'react-redux'
// IMPORT SELECTOR...
import { getSinglePhoto } from '../reducers/createList'
const mapStateToProps = (state, { params }) => {
   const photoId = parseInt(params.photoId)
   return {
      singlePhoto: getSinglePhoto(state.filteredList.photos.jsonArray, photoId),
      isFetching: state.filteredList.photos.isFetching,
      photoId
   }
}
import * as actions from '../actions/actionCreators'

PhotoSingle = connect(mapStateToProps, actions)(PhotoSingle)

export default PhotoSingle;
