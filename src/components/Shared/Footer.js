import React, {Fragment} from 'react';

function Footer (props) {
  return (
    <Fragment>
      <footer className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue">
        <span className="copy-right">&copy; wishBox. All rights reserved </span>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </footer>
    </Fragment>
  )
}

export default Footer;
