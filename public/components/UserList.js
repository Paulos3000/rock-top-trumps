import React, { Component } from 'react'

import User from './User'

const UserList = ({ users, isFetching }) => {
   if (isFetching) {
      return <h4>Fetching data...</h4>
   }
   return (
      <div>
         {users.map( (user, i) => (
            <User key={i} i={i} user={user} />)
         )}
      </div>
   )
}

export default UserList
