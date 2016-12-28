import React from 'react'

const NumPlayers = () => (
   <div className='centered'>
      <h1>Number of Players:</h1>
      <label className="radio-inline"><input type="radio" name="optradio" />2</label>
      <label className="radio-inline"><input type="radio" name="optradio" />3</label>
      <label className="radio-inline"><input type="radio" name="optradio" />4</label>
   </div>
)

export default NumPlayers;
