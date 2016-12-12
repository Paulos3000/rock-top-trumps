import React from 'react'

const PageHeader = ({ pageTitle, apiURL }) => (
   <div>
      <h1>{pageTitle}</h1>
      <h2><small>This is the {pageTitle} page. It is making an API call to <i>"{apiURL}"</i> in <code>componentDidMount</code></small></h2>
      <hr />
   </div>
)

export default PageHeader;
