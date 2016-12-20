import React from 'react'

const PageHeader = ({ pageTitle, apiURL }) => (
   <div>
      <h1>{pageTitle}</h1>
      {/*<p>API call made to <i>"{apiURL}"</i></p>*/}
      <hr />
   </div>
)

export default PageHeader;
