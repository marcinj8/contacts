import React from 'react';

import './Inputs.css';

const inputs = props => {
  return (
    <div className='UI__block'>
      <label className='UI__label' >{props.label}</label>
      <input 
        className='UI__input' 
        value={props.value} 
        name={props.name} type={props.type} 
        placeholder='name'
        onChange={props.changeProperty} />
    </div>
  )
}

export default inputs;