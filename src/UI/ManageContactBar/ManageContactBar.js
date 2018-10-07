import React from 'react';

import './ManageContactBar.css'

const manageContactBar = props => {
  return (
    <div className='manageContactBar'>
      <input onChange={props.changed} placeholder='search contact' type="text" />
      <div>
        <button onClick={props}>Sort A-Z</button>
        <button onClick={props}>Sort Z-A</button>
      </div>
    </div>
  )
}

export default manageContactBar;