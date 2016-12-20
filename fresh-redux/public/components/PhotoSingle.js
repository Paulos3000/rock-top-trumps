import React, { Component } from 'react'

import SinglePhotoImg from './SinglePhotoImg'

import capitalizeFirstLetter from '../util/capitalizeFirstLetter'

class PhotoSingle extends Component {
   componentDidMount() {
      this.props.fetchRemoteData('photos')
   }
   render() {
      const {singlePhoto} = this.props
      const photoTitle = capitalizeFirstLetter(singlePhoto.title)
      if (this.props.isFetching) {
         return <h4>Fetching data...</h4>
      }
      return (
         <div>
            <SinglePhotoImg singlePhoto={singlePhoto} photoTitle={photoTitle}/>
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
      isFetching: state.filteredList.photos.isFetching
   }
}
import * as actions from '../actions/actionCreators'

PhotoSingle = connect(mapStateToProps, actions)(PhotoSingle)

export default PhotoSingle;
