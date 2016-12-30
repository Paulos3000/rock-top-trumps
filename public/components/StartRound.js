import React from 'react'

const StartRound = ({ onPlayer, handleActiveCard }) => (
   <div className="centered">
      <h1>Player turn: {onPlayer.name}</h1>
      <h3>Other players look away</h3>
      <button
         className='btn btn-primary'
         onClick={handleActiveCard}>
         View Card
      </button>
   </div>
)

export default StartRound
