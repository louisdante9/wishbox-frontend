import React, { Fragment } from 'react';

function Footer() {
    return (
        <Fragment>
            <footer className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue">
                <span className="copy-right">&copy; wishBox. All rights reserved </span>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>

                </ul>
            </footer>
        </Fragment>
    )
}

export default Footer;