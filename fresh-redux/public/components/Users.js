import React, { Component } from 'react'
import { connect } from 'react-redux'
// import component's actions
import * as actions from '../actions/actionCreators'

// import util functions
import capitalizeFirstLetter from '../util/capitalizeFirstLetter'

// import components
import PageHeader from './PageHeader'
import UserList from './UserList'

class Users extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('users')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const endpoint = this.props.location.pathname.slice(1)
      const pageTitle = capitalizeFirstLetter(endpoint)
      const apiURL = `https://jsonplaceholder.typicode.com/${endpoint}`
      const {users} = this.props

      return (
         <div>
            <PageHeader pageTitle={pageTitle} apiURL={apiURL} />
            <UserList users={users}/>
         </div>
      )
   }
}

// define component's props
const mapStateToProps = (state) => ({
   users: state.filteredList.users.jsonArray,
   isFetching: state.filteredList.users.isFetching
})

Users = connect(mapStateToProps, actions)(Users);

export default Users;
