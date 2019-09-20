import React, { Component } from 'react';

class thumbnail extends Component {
  render() {
    return (
      <div className='col-lg-3 col-md-4 col-xs-6 thumb'>
        <div
          className='thumbnail'
          data-image-id=''
          data-toggle='modal'
          data-title={this.props.title}
          data-image={this.props.url}
          data-target='#image-gallery'
          onClick={() => this.props.clicked(this.props.id)}
        >
          <img
            className='img-thumbnail'
            src={this.props.url}
            alt={this.props.title}
          />
        </div>
      </div>
    );
  }
}

export default thumbnail;
