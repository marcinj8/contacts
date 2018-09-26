import React from 'react';

import './AddContact.css';

const addContact = props => (
  <div className='addContact__block'>
    <h3>Add new contact</h3>
    <input className='addContact__input' required onChange={props.changed} name='name' type="text" placeholder='name'/>
    <input className='addContact__input' onChange={props.changed} name='mail' type="mail" placeholder='mail'/>
    <input className='addContact__input' onChange={props.changed} name='phone' type="tel" placeholder='phone'/>
    <input className='addContact__input' onChange={props.changed} name='city' type="text" placeholder='city'/>
    <input className='addContact__input' onChange={props.changed} name='street' type="text" placeholder='street'/>
    <button className='addContact__button'>Add</button>
  </div>
)

export default addContact;