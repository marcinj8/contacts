import React, { Component } from 'react';

import './ManageContactBar.css';

class ManageContactBar extends Component {

  render() {
    
    return (
      <div className='manageContactBar'>
        <input
          onChange={this.props.changed}
          placeholder='search contact'
          type="text" 
          value={this.props.searchBarValue}/>
        <div>
          <button onClick={() => this.props.sortContacts(true)}>Sort A-Z</button>
          <button onClick={() => this.props.sortContacts(false)}>Sort Z-A</button>
        </div>
      </div>
    );
  }
}

export default ManageContactBar;