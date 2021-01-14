import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top logo-nav">
          <Link className="brand" to="/">
            WishBox
          </Link>
        </nav>
      </header>
    );
}

export default Header;