import React, { Component } from 'react';

class info extends Component {
  state = {};
  render() {
    return (
      <div id='informations'>
        <div className='row justify-content-center mt-1 p-3'>
          <div className='col border border-primary p-3'>
            <h1 className='font-weight-light text-center text-lg-left'>
              Informations
            </h1>

            <hr className='mt-2 mb-5' />

            <section className=''>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div>
                      <div className='pb-3 align-left'>
                        <h5>Hours of operation:</h5>
                        <h6>Proper lunch</h6>
                        <p>
                          Mon - Fri: 11 a.m. - 2 p.m.
                          <br />
                          Saturday: 11 a.m. - 3 p.m.
                          <br />
                          Sunday: 10 a.m. - 4 p.m.
                          <br />
                        </p>
                        <h6>Dinner</h6>
                        <p>
                          Daily: 5 p.m. - 11 p.m.
                          <br />
                        </p>
                        <h5>
                          <hr />
                          Address:
                        </h5>
                        <p>
                          350 5th Avenue
                          <br />
                          New York
                          <br />
                          NY 10118
                          <br />
                          USA
                        </p>
                        <h5>
                          <hr />
                          Reservations / Info:
                        </h5>
                        <p>
                          Phone: +1 (0) 000 0000 001 <br />
                          Email: don@codfather.com
                        </p>
                        <h5>
                          <hr />
                          Social:
                        </h5>
                        <p>
                          <i className='fab fa-facebook-square fa-2x'></i>{' '}
                          Facebook
                        </p>
                        <p>
                          <i className='fab fa-twitter-square fa-2x'></i>{' '}
                          Twitter
                        </p>
                        <p>
                          <i className='fab fa-instagram fa-2x'></i> Instagram
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='google-map border shadow'>
                      <iframe
                        title='Google Map'
                        frameBorder='0'
                        style={{ border: 0 }}
                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw'
                        allowFullScreen=''
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className='row justify-content-center'>
              <div className='col-6 text-center mt-3 mt-md-0'>
                <button
                  type='button'
                  className='btn btn-primary btn-lg'
                  data-toggle='modal'
                  data-target='#bookTable'
                >
                  Book a table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default info;
