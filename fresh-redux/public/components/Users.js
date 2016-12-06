import React, { Component } from 'react'

export default class Users extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.fetchRemoteData('users')
   }
   componentDidUpdate(prevProps) {
      console.log('Component Updated!')
   }
   render() {
      const {users} = this.props
      console.log('users: ', users)
      const {rootPage} = this.props;
      return (
         <div>
            <h1>Users Page</h1>
            <p>This is the Users page. It is making an API call to /users in <code>componentDidMount</code></p>
            <p>rootPage: {rootPage}</p>
            {users ?
               users.map( (user, i) => <p key={i}>{user.name}</p>) :
               <p>No data received...</p>
            }
         </div>
      )
   }
}
