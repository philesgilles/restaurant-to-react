import React, { Component } from 'react';

class pictureModal extends Component {
  state = {};
  render() {
    return (
      <div
        className='modal fade'
        id='image-gallery'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title' id='image-gallery-title'>
                {this.props.title}
              </h4>
              <button type='button' className='close' data-dismiss='modal'>
                <span aria-hidden='true'>×</span>
                <span className='sr-only'>Close</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='p-md-3'>
                <img
                  id='image-gallery-image'
                  className='img-responsive col-md-12 border border-primary shadow p-0'
                  src={this.props.url}
                  alt={this.props.title}
                />
              </div>
            </div>
            <div className='modal-footer'>
              {this.props.id !== 0 && (
                <button
                  type='button'
                  className='btn btn-secondary float-left'
                  id='show-previous-image'
                  onClick={() => this.props.prevPic(this.props.id)}
                >
                  <i className='fa fa-arrow-left'></i>
                </button>
              )}

              {this.props.id !== 11 && (
                <button
                  type='button'
                  onClick={() => this.props.nextPic(this.props.id)}
                  id='show-next-image'
                  className='btn btn-secondary float-right'
                >
                  <i className='fa fa-arrow-right'></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pictureModal;
