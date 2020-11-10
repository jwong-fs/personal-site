import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink to="/#experience">Experience</HashLink>
          </li>
          <li>
            <HashLink to="/#projects">Projects</HashLink>
          </li>
          <li>
            <HashLink to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
