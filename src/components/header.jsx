import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div className='row justify-content-center p-3'>
        <div className='col10'>
          <img
            id='logoHeader'
            className='img-fluid'
            src='assets/img/logotop.png'
            alt=''
          />
        </div>
      </div>
    );
  }
}

export default header;
