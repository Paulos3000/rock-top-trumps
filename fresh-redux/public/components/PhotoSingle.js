import React, { Component } from 'react'

import capitalizeFirstLetter from '../util/capitalizeFirstLetter'

class PhotoSingle extends Component {
   componentDidMount() {
      this.props.fetchRemoteData('photos')
   }
   render() {
      const {singlePhoto} = this.props
      const photoTitle = capitalizeFirstLetter(singlePhoto.title)
      return (
         <div>
            <h1>Single Photo</h1>
            <h3><i>{photoTitle}</i></h3>
            <hr />
            <img className='single-photo' src={singlePhoto.url} />
            <p>Album ID: {singlePhoto.albumId} | Photo ID: {singlePhoto.id}</p>
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
