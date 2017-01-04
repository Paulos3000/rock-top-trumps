import React from 'react'

const Fight = ({ handleReveal }) => (
   <div className='centered'>
      <h1>Fight...</h1>
      <button className='btn btn-primary' onClick={handleReveal}>Reveal All Cards</button>
   </div>
)

export default Fight;
