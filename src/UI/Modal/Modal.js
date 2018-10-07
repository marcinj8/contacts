import React from 'react';
import Aux from 'react-aux';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const modal = props => {
  const style = ['modal'];
  if (props.show) {
    style.push('active');
  }
  return (
    <Aux>
      <Backdrop clicked={props.toggleModal}/>
      <div className={style.join(' ')}>

        <div className='modal__content'>
          {props.children}
        </div>
        <div>
          <button className='modal__button--delete' onClick={props.delete}>Confirm</button>
          <button className='modal__button--cancel' onClick={props.toggleModal}>Cancel</button>
        </div>
      </div>
    </Aux>
  );
};

export default modal;