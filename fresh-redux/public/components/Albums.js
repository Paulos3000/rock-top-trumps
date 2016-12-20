import React, { Component } from 'react'
// import util functions
import capitalizeFirstLetter from '../util/capitalizeFirstLetter'
// import components
import PageHeader from './PageHeader'
import AlbumList from './AlbumList'

class Albums extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('albums')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const endpoint = this.props.location.pathname.slice(1)
      const pageTitle = capitalizeFirstLetter(endpoint)
      const apiURL = `https://jsonplaceholder.typicode.com/${endpoint}`
      const {albums, isFetching} = this.props

      return (
         <div>
            <PageHeader pageTitle={pageTitle} apiURL={apiURL} />
            <AlbumList albums={albums} isFetching={isFetching}/>
         </div>
      )
   }
}

import { connect } from 'react-redux'
const mapStateToProps = (state, ownProps) => ({
   albums: state.filteredList.albums.jsonArray,
   isFetching: state.filteredList.albums.isFetching
})
// import component's actions
import * as actions from '../actions/actionCreators'

Albums = connect(mapStateToProps, actions)(Albums);

export default Albums;
