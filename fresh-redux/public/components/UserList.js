import React, { Component } from 'react'

import User from './User'

const UserList = ({ users }) => (
   <div>
      {users.map( (user, i) => (
         <User key={i} i={i} user={user} />)
      )}
   </div>
)

export default UserList
