import React from 'react'

const StartRound = ({ onPlayer, handleActiveCard }) => (
   <div className="centro-container">
      <div className="centered">
         {/*<h1 className={`pl-${onPlayer.id}`}>{onPlayer.name}</h1>*/}
         {/*<h1>{onPlayer.name}, your turn</h1>*/}
         <div>
            <h1 className={`underline underline-pl-${onPlayer.id}`}>{onPlayer.name}, your turn</h1>
         </div>
         <button
            className={`btn btn-${onPlayer.id}`}
            onClick={handleActiveCard}>
            View Card
         </button>
      </div>
   </div>
)

export default StartRound
