import React, { Component } from 'react';

class bookTable extends Component {
  render() {
    return (
      <div
        className='modal fade'
        id='bookTable'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='bookATable'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-dialog-centered modal-lg'
          role='document'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='bookATable'>
                Book a Table
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>Firstname</label>
                    <input
                      required
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Name'
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='email'>Email</label>
                    <input
                      required
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='telephone'>Telephone</label>
                    <input
                      required
                      type='tel'
                      className='form-control'
                      id='telephone'
                      placeholder='tel n°'
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-4'>
                    <label htmlFor='date'>Date</label>
                    <input
                      required
                      type='date'
                      className='form-control'
                      id='date'
                    />
                  </div>
                  <div className='form-group col-md-4'>
                    <label htmlFor='time'>Time</label>
                    <input
                      required
                      type='time'
                      className='form-control'
                      id='time'
                    />
                  </div>
                  <div className='form-group col-md-4'>
                    <label htmlFor='seating'>Seating</label>
                    <select className='form-control' id='seating'>
                      <option>Inside</option>
                      <option>Terrace</option>
                    </select>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='contactMessage'>Message</label>
                  <textarea
                    className='form-control'
                    id='contactMessage'
                    rows='3'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='btn btn-primary float-right bold'
                >
                  Send message
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bookTable;
