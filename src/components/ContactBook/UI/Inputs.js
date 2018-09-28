import React from 'react';
import Aux from 'react-aux';

const inputs = props => {
  return (
    <Aux>
      <input className='UI__input' value={props.name} onChange={props.changeProperty} name='name' type="text" placeholder='name' />
      <input className='UI__input' value={props.mail} onChange={props.changeProperty} name='mail' type="mail" placeholder='mail' />
      <input className='UI__input' value={props.phone} onChange={props.changeProperty} name='phone' type="tel" placeholder='phone' />
      <input className='UI__input' value={props.city} onChange={props.changeProperty} name='city' type="text" placeholder='city' />
      <input className='UI__input' value={props.street} onChange={props.changeProperty} name='street' type="text" placeholder='street' />
    </Aux>
  )
}

export default inputs;