import React from 'react';
import { NavLink } from 'react-router-dom'


const SideBar = ({ page, isActive }) => (
  <div className="flex-grow-1 d-lg-flex flex-column align-items-center justify-content-between">
    <span>
      <NavLink
        to="/dashboard"
        activeClassName={page === "dashboard" && isActive}>
        <i className="fa fa-th-large"></i>
        Home
      </NavLink>
    </span>
    <span>
      <NavLink to="/slots" activeClassName={page === "slots" && isActive}>
        <i className="fa fa-folder-open-o"></i>
        Slots
      </NavLink>
    </span>
    <span>
      <NavLink to="#" activeClassName={page === "wishes" && isActive}>
        <i className="fa fa-dropbox"></i>
        Wishes
      </NavLink>
    </span>
    <span>
      <NavLink to="#" activeClassName={page === "filfiled" && isActive}>
        <i className="fa fa-star"></i>
        Fulfiled
      </NavLink>
    </span>
  </div>
);

export default SideBar;