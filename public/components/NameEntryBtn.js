import React from 'react'

const NameEntryBtn = ({ handleAddNames }) => (
   <button
      className='btn btn-default'
      onClick={handleAddNames}>Add Names
   </button>
)

export default NameEntryBtn;
