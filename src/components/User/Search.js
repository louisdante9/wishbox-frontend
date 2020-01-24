import React, {Fragment} from 'react';

function Search (props) {
  return (
    <Fragment>
      <div className="filter">
        <nav className="profile-notif">
          <ul className="nav justify-content-end mt-2">
            <li className="nav-item dropdown px-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <form className="form-inline has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input className="form-control mr-sm-2" type="search" placeholder="find.." aria-label="Search"/>
            </form>
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}

export default Search;
