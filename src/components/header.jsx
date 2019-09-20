import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div class='row justify-content-center p-3'>
        <div class='col10'>
          <img
            id='logoHeader'
            class='img-fluid'
            src='assets/img/logotop.png'
            alt=''
          />
        </div>
      </div>
    );
  }
}

export default header;
