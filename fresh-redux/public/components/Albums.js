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
      const {albums} = this.props

      return (
         <div>
            <PageHeader pageTitle={pageTitle} apiURL={apiURL} />
            <AlbumList albums={albums}/>
         </div>
      )
   }
}

import { connect } from 'react-redux'
const mapStateToProps = (state, ownProps) => ({
   albums: state.filteredList.albums.jsonArray
})
// import component's actions
import * as actions from '../actions/actionCreators'

Albums = connect(mapStateToProps, actions)(Albums);

export default Albums;
