import React, { Component } from 'react';

class contact extends Component {
  state = {};
  render() {
    return (
      <div className='row justify-content-center mt-1  p-3'>
        <div className='col border border-primary p-3'>
          <h1 className='font-weight-light text-center text-lg-left'>
            Contact us
          </h1>

          <hr className='mt-2 mb-5' />
          <div className='row'>
            <div className='col-12'>
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
                    <label htmlFor='name'>Name</label>
                    <input
                      required
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
                  <div className='col-group col-md-12'>
                    <label htmlFor='subject'>Subject</label>
                    <select className='form-control' id='subject'>
                      <option>General information</option>
                      <option>Complaints</option> &&
                      <option>Reception / Large Booking</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label htmlFor='contactMessage'>Message</label>
                  <textarea
                    className='form-control'
                    id='contactMessage'
                    rows='6'
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
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
