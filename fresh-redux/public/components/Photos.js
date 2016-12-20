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
      const {allPhotos, albumPhotos} = this.props
      const {albumId} = this.props.params
      console.log(albumId)
      return (
         <div>
            <h1>Album id: {albumId}</h1>
            <hr />
            <PhotoList albumId={albumId} albumPhotos={albumPhotos}/>
         </div>
      )
   }
}

import { connect } from 'react-redux'
import { getAlbumPhotos } from '../reducers/createList'
const mapStateToProps = (state, { params }) => {
   const albumId = parseInt(params.albumId)
   return {
      allPhotos: state.filteredList.photos.jsonArray,
      albumPhotos: getAlbumPhotos(state.filteredList.photos.jsonArray, albumId)
   }
}
// import component's actions
import * as actions from '../actions/actionCreators'

Photos = connect(mapStateToProps, actions)(Photos);

export default Photos;
