import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-md navbar-dark bg-primary sticky'>
        <a aria-label='fake link to fix button float' to='/'>
          {' '}
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbar'
          aria-controls='navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbar'>
          <div class='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/'>
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
