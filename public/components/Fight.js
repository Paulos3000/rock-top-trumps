import React from 'react'

const Fight = ({ onPlayer, handleReveal }) => (
   <div className='centered'>
      <h1>Fight...</h1>
      <button className={`btn btn-${onPlayer.id}`} onClick={handleReveal}>Reveal All Cards</button>
   </div>
)

export default Fight;
