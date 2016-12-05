import React from 'react'

// import components
import Users from './Users'
import Posts from './Posts'

const AnyPage = ({ rootPage, fetchRemoteData }) => {
   // const capsTitle = rootPage[0].toUpperCase() + rootPage.slice(1);
   const renderContent = () => {
      switch(rootPage) {
         case 'users' :
            return <Users rootPage={rootPage} fetchRemoteData={fetchRemoteData}/>
         case 'posts' :
            return <Posts rootPage={rootPage}/>
         case '' :
            return <Home />
         default:
            return 'UH?'
      }
   }
   return renderContent()
}

export default AnyPage;
