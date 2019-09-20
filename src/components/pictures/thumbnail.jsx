import React, { Component } from 'react';

class thumbnail extends Component {
  render() {
    return (
      <div className='col-lg-3 col-md-4 col-xs-6 thumb'>
        <a
          className='thumbnail'
          data-image-id=''
          data-toggle='modal'
          data-title='First picture title'
          data-image='https://picsum.photos/800/500?random=0'
          data-target='#image-gallery'
        >
          <img
            className='img-thumbnail'
            src='https://picsum.photos/800/500?random=0'
            alt='Another alt text'
          />
        </a>
      </div>
    );
  }
}

export default thumbnail;
