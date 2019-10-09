import React, { Component } from 'react';

import Thumb from '../components/pictures/thumbnail';
import PictureModal from '../components/pictures/pictureModal';
class pictures extends Component {
  state = {
    pictures: [
      {
        id: 0,
        title: 'First picture title',
        url: 'https://picsum.photos/800/500?random=0'
      },
      {
        id: 1,
        title: 'Second picture title',
        url: 'https://picsum.photos/800/500?random=1'
      },
      {
        id: 2,
        title: 'Third picture title',
        url: 'https://picsum.photos/800/500?random=2'
      },
      {
        id: 3,
        title: 'Fourth picture title',
        url: 'https://picsum.photos/800/500?random=3'
      },
      {
        id: 4,
        title: 'Fifth picture title',
        url: 'https://picsum.photos/800/500?random=4'
      },
      {
        id: 5,
        title: 'Sixth picture title',
        url: 'https://picsum.photos/800/500?random=5'
      },
      {
        id: 6,
        title: 'Seventh picture title',
        url: 'https://picsum.photos/800/500?random=6'
      },
      {
        id: 7,
        title: 'Heigth picture title',
        url: 'https://picsum.photos/800/500?random=7'
      },
      {
        id: 8,
        title: 'Nineth picture title',
        url: 'https://picsum.photos/800/500?random=8'
      },
      {
        id: 9,
        title: 'tenth picture title',
        url: 'https://picsum.photos/800/500?random=9'
      },
      {
        id: 10,
        title: 'First picture title',
        url: 'https://picsum.photos/800/500?random=10'
      },
      {
        id: 11,
        title: 'First picture title',
        url: 'https://picsum.photos/800/500?random=11'
      }
    ],
    modal: {
      id: 0,
      title: 'First picture title',
      url: 'https://picsum.photos/800/500?random=0'
    }
  };

  modalHandler = photoId => {
    const newPicture = this.state.pictures[photoId];
    this.setState(prevState => ({
      modal: {
        ...prevState.modal,
        url: newPicture.url,
        title: newPicture.title,
        id: newPicture.id
      }
    }));
  };

  prevPictureHandler = photoId => {
    const prevPicture = this.state.pictures[photoId - 1];
    this.setState(prevState => ({
      modal: {
        ...prevState.modal,
        url: prevPicture.url,
        title: prevPicture.title,
        id: prevPicture.id
      }
    }));
  };

  nextPictureHandler = photoId => {
    const nextPicture = this.state.pictures[photoId + 1];
    this.setState(prevState => ({
      modal: {
        ...prevState.modal,
        url: nextPicture.url,
        title: nextPicture.title,
        id: nextPicture.id
      }
    }));
  };

  handleKeyDown(e) {
    const { id } = this.state.modal;
    if (e.keyCode === 37) {
      if (id === 0) return;
      this.prevPictureHandler(id);
    } else if (e.keyCode === 39) {
      if (id === 11) return;
      this.nextPictureHandler(id);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div onKeyDown={e => this.handleKeyDown(e)} id='pictures'>
          <div className='row justify-content-center mt-1 p-3'>
            <div className='col border border-primary p-3'>
              <h1 className='font-weight-light text-center text-lg-left'>
                Photo Gallery
              </h1>

              <hr className='mt-2 mb-5' />

              <div className='row'>
                {this.state.pictures.map(picture => (
                  <Thumb
                    key={picture.id}
                    title={picture.title}
                    url={picture.url}
                    id={picture.id}
                    clicked={this.modalHandler}
                  />
                ))}
              </div>

              <PictureModal
                title={this.state.modal.title}
                url={this.state.modal.url}
                id={this.state.modal.id}
                nextPic={this.nextPictureHandler}
                prevPic={this.prevPictureHandler}
              />
            </div>
          </div>
        </div>
        )
      </React.Fragment>
    );
  }
}

export default pictures;
