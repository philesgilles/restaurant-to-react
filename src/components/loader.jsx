import React, { Component } from 'react';

import './loader.css';

class loader extends Component {
  render() {
    return (
      <div className='loader'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default loader;
