import React from 'react'

const StartRound = ({ onPlayer, handleActiveCard }) => (
   <div className="centro-container">
      <div className="centered">
         {/*<h1 className={`pl-${onPlayer.id}`}>{onPlayer.name}</h1>*/}
         <h1>{onPlayer.name}, your turn</h1>
         <button
            className='btn btn-primary'
            onClick={handleActiveCard}>
            View Card
         </button>
      </div>
   </div>
)

export default StartRound
