import React, { Component } from 'react'

// import util functions
import capitalizeFirstLetter from '../util/capitalizeFirstLetter'

// import components
import PageHeader from './PageHeader'
import PostList from './PostList'

class Posts extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('posts')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const endpoint = this.props.location.pathname.slice(1)
      const pageTitle = capitalizeFirstLetter(endpoint)
      const apiURL = `https://jsonplaceholder.typicode.com/${endpoint}`
      const {posts, isFetching} = this.props
      return (
         <div>
            <PageHeader pageTitle={pageTitle} apiURL={apiURL} />
            <PostList posts={posts} isFetching={isFetching} />
         </div>
      )
   }
}

import { connect } from 'react-redux'
// define component's props
const mapStateToProps = (state) => ({
   posts: state.filteredList.posts.jsonArray,
   isFetching: state.filteredList.posts.isFetching
})
// import component's actions
import * as actions from '../actions/actionCreators'

Posts = connect(mapStateToProps, actions)(Posts);

export default Posts;
