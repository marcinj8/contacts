import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
  <div
    onClick={props.clicked}
    className='backdrop'></div>
);

export default backdrop;
