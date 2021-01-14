import React, { Fragment } from "react";
import {NavLink} from 'react-router-dom';
import SideBar from './Commons/SideBar'

const Slot = () => {
  return (
    <Fragment>
      <div class="wrapper d-flex">
        <div class="side-nav d-none d-lg-flex h-100 px-0 flex-column">
          <div class="ds-brand-name flex-grow-1 px-2 pt-4">
            <a href="/">wishBox</a>
          </div>
          <SideBar page={"slots"} isActive={"is-active"} />
          <div class="flex-grow-1"></div>
        </div>
        <div class="container-fluid">
          <nav class="profile-notif">
            <ul class="nav justify-content-end mt-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-bell-o"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-user-circle-o"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div class="filter">
            <nav class="profile-notif">
              <span class="page-identifier">
                <h3>Slots</h3>
                <p>6 slots in progress</p>
              </span>
              <ul class="nav justify-content-end mt-2">
                <li class="nav-item dropdown px-4">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Filter
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <form class="form-inline has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="find.."
                    aria-label="Search"
                  />
                </form>
              </ul>
            </nav>
          </div>
          <div class="slots-lists">
            <div class="slot-item">
              <div class="slot-tag">
                <div>Slot</div>
                <div>1</div>
              </div>
              <div class="slot-name">
                <div class="wish-month">December Wishbox</div>
                <div class="wish-date">13/06/19 - 16/06/19</div>
                <div class="wish-count">2000 wishes</div>
              </div>
              <div class="slot-desc">
                We all want something for ourselves this christmas, simply pt
                your wish out there and someone might just get it for you and
                you can also return the favour if you like!
              </div>
              <div class="slot-wish">
                <a href="#" class="slot-wish-btn">
                  Make a Wish
                </a>
              </div>
            </div>
            <div class="slot-item">
              <div class="slot-tag">
                <div>Slot</div>
                <div>1</div>
              </div>
              <div class="slot-name">
                <div class="wish-month">December Wishbox</div>
                <div class="wish-date">13/06/19 - 16/06/19</div>
                <div class="wish-count">2000 wishes</div>
              </div>
              <div class="slot-desc">
                We all want something for ourselves this christmas, simply pt
                your wish out there and someone might just get it for you and
                you can also return the favour if you like!
              </div>
              <div class="slot-wish">
                <a href="#" class="slot-wish-btn">
                  Make a Wish
                </a>
              </div>
            </div>
            <div class="slot-item">
              <div class="slot-tag">
                <div>Slot</div>
                <div>1</div>
              </div>
              <div class="slot-name">
                <div class="wish-month">December Wishbox</div>
                <div class="wish-date">13/06/19 - 16/06/19</div>
                <div class="wish-count">2000 wishes</div>
              </div>
              <div class="slot-desc">
                We all want something for ourselves this christmas, simply pt
                your wish out there and someone might just get it for you and
                you can also return the favour if you like!
              </div>
              <div class="slot-wish">
                <a href="#" class="slot-wish-btn">
                  Make a Wish
                </a>
              </div>
            </div>
            <div class="slot-item">
              <div class="slot-tag">
                <div>Slot</div>
                <div>1</div>
              </div>
              <div class="slot-name">
                <div class="wish-month">December Wishbox</div>
                <div class="wish-date">13/06/19 - 16/06/19</div>
                <div class="wish-count">2000 wishes</div>
              </div>
              <div class="slot-desc">
                We all want something for ourselves this christmas, simply pt
                your wish out there and someone might just get it for you and
                you can also return the favour if you like!
              </div>
              <div class="slot-wish">
                <a href="#" class="slot-wish-btn">
                  Make a Wish
                </a>
              </div>
            </div>
            <div aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue">
        <span class="copy-right">&copy; wishBox. All rights reserved </span>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};


export default Slot;