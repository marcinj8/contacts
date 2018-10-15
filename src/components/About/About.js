import React from 'react';

import './About.css'

const about = props => {
  const aboutStyle = ['about']

  if (props.show) {
    aboutStyle.push('about--active')
  } else  if (!props.show) {
    aboutStyle.push('about--noActive')
  }

  return (
    <div className={aboutStyle.join(' ')}>
      <h4>Contact Manager</h4>
      <h5>Version: 1.0.0</h5>
      <h6>Author: Marcin Janerka</h6>
      <h6>Contact: contact@marcinjanerka.com</h6>
    </div>
  )
}

export default about;