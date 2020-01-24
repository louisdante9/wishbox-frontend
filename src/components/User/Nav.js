import React, {Fragment} from 'react';

function Nav (props) {
  return (
    <Fragment>
      <nav className="profile-notif">
        <ul className="nav justify-content-end mt-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-bell-o"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-user-circle-o"></i>{props.user.username}
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Nav;
