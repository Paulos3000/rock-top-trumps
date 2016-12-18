import React from 'react'

const Home = () => (
   <div>
      <h1>Home</h1>
      <hr />
      <div className='jumbotron'>
         <p>This is a test React application using async Redux actions to gather data from a server and present in the view. Styled with Bootstrap.</p>
         <p>All data fetched from <code>https://jsonplaceholder.typicode.com/</code></p>
         <p>Work in progress...</p>
      </div>
   </div>
)

export default Home;
