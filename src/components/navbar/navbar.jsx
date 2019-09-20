import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-primary sticky'>
        <span aria-label='fake link to fix button float' to='/'>
          {' '}
        </span>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbar'
          aria-controls='navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/home'>
              Home
            </NavLink>
            <NavLink id='menu_link' className='nav-item nav-link' to='/menu'>
              Menu
            </NavLink>
            <NavLink
              id='photo_link'
              className='nav-item nav-link'
              to='/pictures'
            >
              Pictures
            </NavLink>
            <NavLink id='info_link' className='nav-item nav-link' to='/info'>
              Informations
            </NavLink>
            <NavLink
              id='contact_link'
              className='nav-item nav-link'
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
