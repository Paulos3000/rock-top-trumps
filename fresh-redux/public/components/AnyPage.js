import React from 'react'

// import components
import Users from './Users'
import Posts from './Posts'

// const AnyPage = ({ rootPage, fetchRemoteData, users }) => {
const AnyPage = (props) => {
   // const capsTitle = rootPage[0].toUpperCase() + rootPage.slice(1);
   const renderContent = () => {
      switch(props.rootPage) {
         case 'users' :
            return <Users
            rootPage={props.rootPage}
            fetchRemoteData={props.fetchRemoteData}
            users={props.users}/>
         case 'posts' :
            return <Posts rootPage={props.rootPage}/>
         case '' :
            return <Home />
         default:
            return 'UH?'
      }
   }
   return renderContent()
}

export default AnyPage;
